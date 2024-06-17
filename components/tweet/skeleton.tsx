import type { HTMLAttributes } from 'react'

export const Skeleton = ({ style }: HTMLAttributes<HTMLSpanElement>) => (
  <span className={"skeleton"} style={style} />
)
