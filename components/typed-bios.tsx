"use client";

import React from "react";
import Typed from "typed.js";
import {TiktokDarkIcon, TiktokIcon, SinaIcon, XIcon, UmamiIcon, CloudinaryIcon} from "@/components/icon";
import Link from "next/link";

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

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
    <div className={"grid grid-flow-col px-3 mt-2"}>
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
        <p className={"w-full min-h-full"}>
        "
        <span
          ref={el}
          className="text-neutral-900 dark:text-neutral-200 text-sm"
        />
        "
      </p>
      <div className={"flex justify-end content-center gap-2 md:gap-2.5"}>
        <Link href={"https://m.weibo.cn/u/5966770936"} target="_blank" aria-label="Weibo" className={"hidden md:flex"}>
          <SinaIcon size={18}/>
        </Link>
        <Link href={"https://twitter.com/TESJKL1118"} target="_blank" aria-label="Twitter">
          <XIcon size={18}/>
        </Link>
        <Link href={"https://v.douyin.com/iYdXGgMa/"} target="_blank" aria-label="Tiktok" className="hidden dark:flex">
          <TiktokIcon size={17}/>
        </Link>
        <Link href={"https://v.douyin.com/iYdXGgMa/"} target="_blank" aria-label="Tiktok" className="dark:hidden">
          <TiktokDarkIcon size={17}/>
        </Link>
        <Link href={"https://us.umami.is/share/BW3QIQmZDEKkrQSd/jackey.love"} target="_blank" aria-label="Umami" className={"hidden md:flex"}>
          <UmamiIcon size={18}/>
        </Link>
        <Link href={"https://collection.cloudinary.com/jackeylove/47d98a861770aac89b9c6102e46a916d"} target="_blank" aria-label="Cloudinary" className={"hidden md:flex"}>
          <CloudinaryIcon size={19}/>
        </Link>
      </div>
    </div>
  );
};

export default TypedBios;
