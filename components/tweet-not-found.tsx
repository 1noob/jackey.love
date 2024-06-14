import { TweetContainer } from "./tweet-container";

type Props = {
  error?: any;
};

export const TweetNotFound = (_props: Props) => (
  <TweetContainer>
    <div className={"notfound-root"}>
      <h3>Tweet not found</h3>
      <p>The embedded tweet could not be found…</p>
    </div>
  </TweetContainer>
);
