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

  return <MyTweet tweet={withEntityDefaults(data)} components={components} />;
};
