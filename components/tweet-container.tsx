import type { ReactNode } from 'react'
import clsx from 'clsx'

type Props = { className?: string; children: ReactNode }

export const TweetContainer = ({ className, children }: Props) => (
  <div className={clsx('react-tweet-theme tweet-root', className)}>
    <article className={"tweet-article"}>{children}</article>
  </div>
)
