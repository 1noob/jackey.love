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
        <li>再给我一次机会，我还是会E上去。</li>
        <li>感觉我还有救。</li>
      </ul>
      <p className={"w-full text-center mt-2"}>
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
