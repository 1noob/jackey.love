import type { ReactNode } from "react";
import clsx from "clsx";

type Props = { className?: string; children: ReactNode };

export const TweetContainer = ({ className, children }: Props) => (
  <div
    className={clsx(
      "bg-card react-tweet-theme container-root h-[450px] border-dashed border-gray-400 border dark:border-transparent md:border-transparent",
      className
    )}
  >
    <article className={"container-article"}>{children}</article>
  </div>
);
