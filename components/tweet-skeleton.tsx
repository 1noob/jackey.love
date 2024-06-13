import { TweetContainer } from 'react-tweet'
import { Skeleton } from './skeleton'

export const TweetSkeleton = () => (
  <TweetContainer className={"skeleton-root h-full m-0"}>
    <Skeleton style={{ height: '3rem', }} />
    <Skeleton style={{ height: '6rem', margin: '0.5rem 0' }} />
    <div style={{ borderTop: 'var(--tweet-border)', margin: '0.5rem 0' }} />
    <Skeleton
      style={{
        height: '2rem',
      }}
    />
    <Skeleton
      style={{
        height: '2rem',
        borderRadius: '9999px',
        marginTop: '0.5rem',
      }}
    />
  </TweetContainer>
)
