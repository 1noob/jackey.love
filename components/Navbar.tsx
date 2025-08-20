import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  TiktokIcon,
  SinaIcon,
  XIcon,
  UmamiIcon,
  CloudinaryIcon,
  HuyaIcon,
  JackeyLoveIcon,
} from "@/components/icon";
import Link from "next/link";
import { ScrollShadow } from "@heroui/react";

interface Props {
  className?: string;
  getOpacity: Function;
  parentOpacity: boolean;
}

const Navbar: React.FC<Props> = ({
  className,
  getOpacity,
  parentOpacity,
}) => {
  const [opacity, setOpacity] = useState<boolean>(parentOpacity);

  const changeOpacity = (val: boolean) => {
    setOpacity(val);
    getOpacity(val);
  };

  return (
    <div className={cn("p-2 md:p-0 w-full flex justify-between mx-auto max-w-md md:max-w-3xl min-w-[324px] z-10 fixed top-0 md:relative self-center", className)}>
      <div className="absolute md:hidden inset-0 pointer-events-none z-[-1] bg-white/20 dark:bg-black/20 backdrop-blur-sm backdrop-brightness-50 md:backdrop-brightness-200 border-b border-white/30 rounded-b-md" />
      <button className="pointer-events-none md:pointer-events-auto" onClick={() => changeOpacity(!opacity)}>
        <JackeyLoveIcon
          size={35}
          className="px-2 md:px-0 brightness-150"
        />
      </button>
      <div
        className="backdrop-blur-sm px-2 md:px-0 rounded-md flex flex-col gap-1 max-w-[65px] content-center overflow-hidden"
      >
        <div className={"animate-[scy_30s_linear_infinite] w-max"}>
          <div className="w-max flex">
            <div className="w-max flex gap-1 pr-1">
              <Link
                href={"https://m.weibo.cn/u/5966770936"}
                target="_blank"
                aria-label="Weibo"
                className="grid content-center shadow-sm dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <SinaIcon />
              </Link>
              <Link
                href={"https://x.com/TESJKL1118"}
                target="_blank"
                aria-label="Twitter"
                className="bg-blue-50/50 grid content-center shadow-sm dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <XIcon />
              </Link>
              <Link
                href={"https://v.douyin.com/iYdXGgMa/"}
                target="_blank"
                aria-label="Tiktok"
                className="bg-blue-50/50 grid content-center  shadow-sm  dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <TiktokIcon />
              </Link>
            </div>
            <div className="w-max flex gap-1 pr-1">
              <Link
                href={"https://m.weibo.cn/u/5966770936"}
                target="_blank"
                aria-label="Weibo"
                className="bg-blue-50/50 grid content-center  shadow-sm  dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <SinaIcon />
              </Link>
              <Link
                href={"https://x.com/TESJKL1118"}
                target="_blank"
                aria-label="Twitter"
                className="bg-blue-50/50 grid content-center  shadow-sm  dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <XIcon />
              </Link>
              <Link
                href={"https://v.douyin.com/iYdXGgMa/"}
                target="_blank"
                aria-label="Tiktok"
                className="bg-blue-50/50 grid content-center  shadow-sm  dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <TiktokIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className={"animate-[scy_30s_linear_infinite] w-max -ml-4"}>
          <div className="w-max flex">
            <div className="w-max flex gap-1 pl-1">
              <Link
                href={"https://huya.com/111800"}
                target="_blank"
                aria-label="Huya"
                className="bg-blue-50/50 grid content-center  shadow-sm  dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <HuyaIcon />
              </Link>
              <Link
                href={
                  "https://us.umami.is/share/BW3QIQmZDEKkrQSd/jackey.love"
                }
                target="_blank"
                aria-label="Umami"
                className="bg-blue-50/50 grid content-center  shadow-sm  dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <UmamiIcon />
              </Link>
              <Link
                href={
                  "https://collection.cloudinary.com/jackeylove/47d98a861770aac89b9c6102e46a916d"
                }
                target="_blank"
                aria-label="Cloudinary"
                className="bg-blue-50/50 grid content-center  shadow-sm  dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <CloudinaryIcon />
              </Link>
            </div>
            <div className="w-max flex gap-1 pl-1">
              <Link
                href={"https://huya.com/111800"}
                target="_blank"
                aria-label="Huya"
                className="bg-blue-50/50 grid content-center  shadow-sm  dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <HuyaIcon />
              </Link>
              <Link
                href={
                  "https://us.umami.is/share/BW3QIQmZDEKkrQSd/jackey.love"
                }
                target="_blank"
                aria-label="Umami"
                className="bg-blue-50/50 grid content-center  shadow-sm  dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <UmamiIcon />
              </Link>
              <Link
                href={
                  "https://collection.cloudinary.com/jackeylove/47d98a861770aac89b9c6102e46a916d"
                }
                target="_blank"
                aria-label="Cloudinary"
                className="bg-blue-50/50 grid content-center  shadow-sm  dark:bg-gray-900/50 rounded-md p-px w-5 h-5 justify-center"
              >
                <CloudinaryIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
