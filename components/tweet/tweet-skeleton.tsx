import { Skeleton } from "./skeleton";
import { TweetContainer } from "./tweet-container";

export const TweetSkeleton = () => (
  <TweetContainer className={"skeleton-root"}>
    <Skeleton style={{ height: "3rem" }} />
    <Skeleton style={{ height: "12rem", margin: "0.5rem 0" }} />
    <div style={{ borderTop: "var(--tweet-border)", margin: "0.5rem 0" }} />
    <Skeleton
      style={{
        height: "2rem",
      }}
    />
    <Skeleton
      style={{
        height: "2rem",
        borderRadius: "9999px",
        marginTop: "0.5rem",
      }}
    />
  </TweetContainer>
);
