import type { ReactNode } from "react";
import clsx from "clsx";

type Props = { className?: string; children: ReactNode };

export const TweetContainer = ({ className, children }: Props) => (
  <div
    className={clsx(
      "bg-box react-tweet-theme container-root h-[450px] ",
      className
    )}
  >
    <article className={"container-article"}>{children}</article>
  </div>
);
