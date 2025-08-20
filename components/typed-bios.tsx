"use client";

import React from "react";
import Typed from "typed.js";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const TypedBios: React.FC<Props> = ({ className }) => {
  const el = React.useRef(null);
  const typed = React.useRef(null);
  const d = new Date();
  const year = d.getFullYear();

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
        <div className="grid grid-cols-1">
          <ul id="bios" className="hidden">
            <li>跟自己的热爱。</li>
            <li>我们会创造新的历史。</li>
            <li>打败我，你就是LPL第一AD。</li>
            <li>17岁的我马上就要拿到LPL冠军了。</li>
            <li>好好调整，哥几个等你回来。</li>
            <li>本台记者喻文波为您报道。</li>
            <li>再给我一次机会，我还是会E上去。</li>
            <li>伊泽瑞尔的精髓就是要E!</li>
            <li>哥们的韦鲁斯还需要练吗?</li>
          </ul>
          <p
            className={`shine w-full h-full grow content-end text-sm md:text-base text-neutral-900 dark:text-neutral-300`}
          >
            
            <span ref={el} />
          </p>
          <p className="text-[10px]/4 w-full h-full grow content-end text-gray-500 md:text-gray-600 md:dark:text-gray-400">
            &copy; 2016-{year} JackeyLove. All rights reserved.
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default TypedBios;
