"use client";

import { type TweetProps, useTweet } from "react-tweet";
import { MyTweet } from "./my-tweet";
import { TweetSkeleton } from "./tweet-skeleton";
import { TweetNotFound } from "./tweet-not-found";

// react-tweet's enrichTweet walks hashtags/user_mentions/urls/symbols
// unconditionally, but the syndication payload only ships the entity types the
// tweet actually has - a media-only tweet carries just `media`, and the loop
// then throws "entities is not iterable". Fill the absent ones in.
const EMPTY_ENTITIES = {
  hashtags: [],
  user_mentions: [],
  urls: [],
  symbols: [],
};

const withEntityDefaults = (tweet: any) => ({
  ...tweet,
  entities: { ...EMPTY_ENTITIES, ...tweet.entities },
});

// Photos are vendored next to the JSON as /tweet/<key>.jpg and therefore
// relative, but react-tweet's getMediaUrl runs new URL(media.media_url_https),
// which rejects a relative path outright. Resolve against the origin actually
// serving the page so the same JSON works in development and in production.
const resolveMediaUrls = (tweet: any) => {
  const origin =
    typeof window === "undefined" ? "" : window.location.origin;
  const absolutise = (url: string) =>
    url.startsWith("/") && origin ? origin + url : url;
  return {
    ...tweet,
    mediaDetails: (tweet.mediaDetails || []).map((m: any) => ({
      ...m,
      media_url_https: absolutise(m.media_url_https),
    })),
  };
};

export const Tweet = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  onError,
}: TweetProps) => {
  const { data, error, isLoading } = useTweet(id, apiUrl);

  // `entities` is an OBJECT keyed by entity type ({ media: [...] }), not an
  // array. This used to test Array.isArray(entities), which is false for every
  // real payload, so the card could never get past its skeleton.
  if (isLoading || error || !data || !data.entities) return fallback;
  // if (error || !data) {
  //   const NotFound = components?.TweetNotFound || TweetNotFound;
  //   return <NotFound error={onError ? onError(error) : error} />;
  // }

  return (
    <MyTweet
      tweet={resolveMediaUrls(withEntityDefaults(data))}
      components={components}
    />
  );
};
