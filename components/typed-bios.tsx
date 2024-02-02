"use client";

import React from "react";
import Typed from "typed.js";

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
    <div>
      <ul id="bios" className="hidden">
        <li>今夜，我是天选，也是唯一。</li>
        <li>给大家拜个早年吧，新年快乐。</li>
        <li>跟自己的热爱。</li>
        <li>再给我一次机会，我还是会E上去。</li>
        <li>伟大，无需多言。</li>
        <li>感觉会有好事发生。</li>
      </ul>
      <p className={"text-center"}>
        "
        <span
          ref={el}
          className="text-neutral-900 dark:text-neutral-200 text-xs lg:text-sm"
        />
        "
      </p>
    </div>
  );
};

export default TypedBios;
