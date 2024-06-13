"use client";

import {
  type TweetProps,
  useTweet,
} from "react-tweet";
import { MyTweet } from "./my-tweet";
import { TweetSkeleton } from "./tweet-skeleton";
import { TweetNotFound } from "./tweet-not-found";

export const Tweet = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  onError,
}: TweetProps) => {
  const { data, error, isLoading } = useTweet(id, apiUrl);

  if (isLoading) return fallback;
  if (error || !data) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound error={onError ? onError(error) : error} />;
  }

  return <MyTweet tweet={data} components={components} />;
};
