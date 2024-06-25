"use client";

import React from "react";
import Typed from "typed.js";
import {
  TiktokDarkIcon,
  TiktokIcon,
  SinaIcon,
  XIcon,
  UmamiIcon,
  CloudinaryIcon,
  MailIcon,
} from "@/components/icon";
import Link from "next/link";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const TypedBios: React.FC<Props> = ({ className }) => {
  const el = React.useRef(null);
  const typed = React.useRef(null);
  const { systemTheme } = useTheme();

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: "#bios",
      typeSpeed: 80,
      backSpeed: 20,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div
      className={cn(
        "z-[9999] grid grid-cols-6 px-3 py-2 mx-1 md:mx-2 fixed left-0 right-0 max-w-full",
        "border border-dashed border-gray-300 dark:border-0 md:border-0 rounded-b-xl md:rounded-xl",
        "bg-card dark:bg-page/5 dark:md:bg-blur md:bg-blur md:backdrop-blur-2xl",
        className
      )}
    >
      <ul id="bios" className="hidden">
        <li>感觉我还有得救。</li>
        <li>我是天选，也是唯一。</li>
        <li>跟自己的热爱。</li>
        <li>伟大，无需多言。</li>
        <li>好好调整，哥几个等你回来。</li>
        <li>本台记者喻文波为您报道。</li>
        <li>再给我一次机会，我还是会E上去。</li>
        <li>伊泽瑞尔的精髓就是要E!</li>
        <li>哥们的韦鲁斯还需要练吗?</li>
      </ul>
      <p className={"w-full min-h-full col-span-5"}>
        "
        <span
          ref={el}
          className="text-neutral-900 dark:text-neutral-200 text-sm"
        />
        "
      </p>
      <ScrollShadow
        className="w-full rounded-full"
        offset={-2}
        size={systemTheme === "dark" ? 12 : 2}
        orientation="horizontal"
        hideScrollBar
      >
        <div className={"animate-[scy_18s_linear_infinite] w-max flex"}>
          <div className="w-max flex gap-2 pr-2 content-center">
            <Link
              href={"mailto:x@jackey.love"}
              target="_blank"
              aria-label="mail"
            >
              <MailIcon size={18} />
            </Link>
            <Link
              href={"https://m.weibo.cn/u/5966770936"}
              target="_blank"
              aria-label="Weibo"
            >
              <SinaIcon size={18} />
            </Link>
            <Link
              href={"https://twitter.com/TESJKL1118"}
              target="_blank"
              aria-label="Twitter"
            >
              <XIcon size={18} />
            </Link>
            <Link
              href={"https://v.douyin.com/iYdXGgMa/"}
              target="_blank"
              aria-label="Tiktok"
              className="hidden dark:flex"
            >
              <TiktokIcon size={16.5} />
            </Link>
            <Link
              href={"https://v.douyin.com/iYdXGgMa/"}
              target="_blank"
              aria-label="Tiktok"
              className="dark:hidden"
            >
              <TiktokDarkIcon size={16.5} />
            </Link>
            <Link
              href={"https://us.umami.is/share/BW3QIQmZDEKkrQSd/jackey.love"}
              target="_blank"
              aria-label="Umami"
            >
              <UmamiIcon size={17.5} />
            </Link>
            <Link
              href={
                "https://collection.cloudinary.com/jackeylove/47d98a861770aac89b9c6102e46a916d"
              }
              target="_blank"
              aria-label="Cloudinary"
            >
              <CloudinaryIcon size={19} />
            </Link>
          </div>
          <div className="w-max flex gap-2 pr-2 content-center">
            <Link
              href={"mailto:x@jackey.love"}
              target="_blank"
              aria-label="mail"
            >
              <MailIcon size={18} />
            </Link>
            <Link
              href={"https://m.weibo.cn/u/5966770936"}
              target="_blank"
              aria-label="Weibo"
            >
              <SinaIcon size={18} />
            </Link>
            <Link
              href={"https://twitter.com/TESJKL1118"}
              target="_blank"
              aria-label="Twitter"
            >
              <XIcon size={18} />
            </Link>
            <Link
              href={"https://v.douyin.com/iYdXGgMa/"}
              target="_blank"
              aria-label="Tiktok"
              className="hidden dark:flex"
            >
              <TiktokIcon size={16.5} />
            </Link>
            <Link
              href={"https://v.douyin.com/iYdXGgMa/"}
              target="_blank"
              aria-label="Tiktok"
              className="dark:hidden"
            >
              <TiktokDarkIcon size={16.5} />
            </Link>
            <Link
              href={"https://us.umami.is/share/BW3QIQmZDEKkrQSd/jackey.love"}
              target="_blank"
              aria-label="Umami"
            >
              <UmamiIcon size={17.5} />
            </Link>
            <Link
              href={
                "https://collection.cloudinary.com/jackeylove/47d98a861770aac89b9c6102e46a916d"
              }
              target="_blank"
              aria-label="Cloudinary"
            >
              <CloudinaryIcon size={19} />
            </Link>
          </div>
        </div>
      </ScrollShadow>
    </div>
  );
};

export default TypedBios;
