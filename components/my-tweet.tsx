import type { Tweet } from 'react-tweet/api'
import {
  type TwitterComponents,
  TweetHeader,
  TweetInReplyTo,
  TweetBody,
  TweetMedia,
  TweetInfo,
  TweetActions,
  QuotedTweet,
  enrichTweet,
  TweetReplies,
} from 'react-tweet'
import { TweetContainer } from './tweet-container'
 
type Props = {
  tweet: Tweet
  components?: TwitterComponents
}
 
export const MyTweet = ({ tweet: t, components }: Props) => {
  const tweet = enrichTweet(t)
  return (
    <TweetContainer>
      <TweetHeader tweet={tweet} components={components} />
      {tweet.in_reply_to_status_id_str && <TweetInReplyTo tweet={tweet} />}
      <TweetBody tweet={tweet} />
      {tweet.mediaDetails?.length ? (
        <TweetMedia tweet={tweet} components={components} />
      ) : null}
      {tweet.quoted_tweet && <QuotedTweet tweet={tweet.quoted_tweet} />}
      <TweetInfo tweet={tweet} />
      <TweetActions tweet={tweet} />
      <TweetReplies tweet={tweet}/>
    </TweetContainer>
  )
}