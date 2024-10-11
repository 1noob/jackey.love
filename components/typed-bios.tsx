"use client";

import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import {
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
import { handWrite } from "@/types/fonts";

interface Props {
  className?: string;
}

const TypedBios: React.FC<Props> = ({ className }) => {
  const el = React.useRef(null);
  const typed = React.useRef(null);
  const { systemTheme } = useTheme();
  const iconSet = [];

  iconSet.push([
    <XIcon />,
    <TiktokIcon />,
    <UmamiIcon />,
    <CloudinaryIcon />,
    <MailIcon />,
    <SinaIcon />,
  ]);

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
    <div className={cn("w-full", className)}>
      <div className="flex justify-between">
        <div>
          <ul id="bios" className="hidden">
            <li>跟自己的热爱。</li>
            <li>打败我，你就是LPL第一AD。</li>
            <li>17岁的我马上就要拿到LPL冠军了。</li>
            <li>好好调整，哥几个等你回来。</li>
            <li>本台记者喻文波为您报道。</li>
            <li>再给我一次机会，我还是会E上去。</li>
            <li>伊泽瑞尔的精髓就是要E!</li>
            <li>哥们的韦鲁斯还需要练吗?</li>
          </ul>
          <p className={`w-full h-full grow content-end text-base ${handWrite.variable} font-hw`}>
            “
            <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
            ”
          </p>
        </div>

        <ScrollShadow
          className="max-w-[65px] md:max-w-[80px] content-center rounded-md grayscale-[33%]"
          offset={-2}
          size={systemTheme === "dark" ? 12 : 4}
          orientation="horizontal"
          hideScrollBar
        >
          <div className={"animate-[scy_30s_linear_infinite] w-max"}>
            <div className="w-max flex">
              <div className="w-max flex gap-3 pr-3">
                <Link
                  href={"https://m.weibo.cn/u/5966770936"}
                  target="_blank"
                  aria-label="Weibo"
                  className="grid content-center"
                >
                  <SinaIcon />
                </Link>
                <Link
                  href={"https://x.com/TESJKL1118"}
                  target="_blank"
                  aria-label="Twitter"
                  className="grid content-center"
                >
                  <XIcon />
                </Link>
                <Link
                  href={"https://v.douyin.com/iYdXGgMa/"}
                  target="_blank"
                  aria-label="Tiktok"
                  className="grid content-center"
                >
                  <TiktokIcon />
                </Link>
              </div>
              <div className="w-max flex gap-3 pr-3">
                <Link
                  href={"https://m.weibo.cn/u/5966770936"}
                  target="_blank"
                  aria-label="Weibo"
                  className="grid content-center"
                >
                  <SinaIcon />
                </Link>
                <Link
                  href={"https://x.com/TESJKL1118"}
                  target="_blank"
                  aria-label="Twitter"
                  className="grid content-center"
                >
                  <XIcon />
                </Link>
                <Link
                  href={"https://v.douyin.com/iYdXGgMa/"}
                  target="_blank"
                  aria-label="Tiktok"
                  className="grid content-center"
                >
                  <TiktokIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className={"animate-[scy_30s_linear_infinite] w-max"}>
            <div className="w-max flex">
              <div className="w-max flex gap-3 pl-3">
                <Link
                  href={"mailto:x@jackey.love"}
                  target="_blank"
                  aria-label="mail"
                  className="grid content-center"
                >
                  <MailIcon />
                </Link>
                <Link
                  href={
                    "https://us.umami.is/share/BW3QIQmZDEKkrQSd/jackey.love"
                  }
                  target="_blank"
                  aria-label="Umami"
                  className="grid content-center"
                >
                  <UmamiIcon />
                </Link>
                <Link
                  href={
                    "https://collection.cloudinary.com/jackeylove/47d98a861770aac89b9c6102e46a916d"
                  }
                  target="_blank"
                  aria-label="Cloudinary"
                  className="grid content-center"
                >
                  <CloudinaryIcon />
                </Link>
              </div>
              <div className="w-max flex gap-3 pl-3">
                <Link
                  href={"mailto:x@jackey.love"}
                  target="_blank"
                  aria-label="mail"
                  className="grid content-center"
                >
                  <MailIcon />
                </Link>
                <Link
                  href={
                    "https://us.umami.is/share/BW3QIQmZDEKkrQSd/jackey.love"
                  }
                  target="_blank"
                  aria-label="Umami"
                  className="grid content-center"
                >
                  <UmamiIcon />
                </Link>
                <Link
                  href={
                    "https://collection.cloudinary.com/jackeylove/47d98a861770aac89b9c6102e46a916d"
                  }
                  target="_blank"
                  aria-label="Cloudinary"
                  className="grid content-center"
                >
                  <CloudinaryIcon />
                </Link>
              </div>
            </div>
          </div>
        </ScrollShadow>
      </div>
    </div>
  );
};

export default TypedBios;
