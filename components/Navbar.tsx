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
import TypedBios from "./typed-bios";

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
    <div className={cn("w-full flex justify-between max-w-md md:max-w-3xl min-w-[324px] z-10 fixed top-0 md:relative self-center", className)}>
      <div className="m-2 md:m-0 relative flex rounded-full md:rounded-md flex-grow px-2">
        <div className="absolute md:hidden inset-0 pointer-events-none z-[-1] bg-white/20 dark:bg-black/20 backdrop-blur-sm backdrop-brightness-100 dark:backdrop-brightness-200 md:backdrop-brightness-200 border border-white/30 rounded-full md:rounded-md" />
        <TypedBios className="my-auto"/>
      </div>
      <div className="m-2 md:my-0 relative flex rounded-full md:rounded-md gap-1 md:gap-4">
        <div className="absolute md:hidden inset-0 pointer-events-none z-[-1] bg-white/20 dark:bg-black/20 backdrop-blur-sm backdrop-brightness-100 dark:backdrop-brightness-200 md:backdrop-brightness-200 border border-white/30 rounded-full md:rounded-md" />
        <button className="m-2 md:m-0 pointer-events-none md:pointer-events-auto col-span-2" onClick={() => changeOpacity(!opacity)}>
          <JackeyLoveIcon
            size={35}
            className="brightness-150"
          />
        </button>
        <div
          className="md:border border-white/40 relative rounded-full m-auto md:rounded-md flex flex-col max-w-[45px] md:max-w-[65px] overflow-hidden"
        >
          <div className={"animate-[scy_30s_linear_infinite] w-max"}>
            <div className="w-max flex">
              <div className="w-max flex gap-1 pr-1">
                <Link
                  href={"https://m.weibo.cn/u/5966770936"}
                  target="_blank"
                  aria-label="Weibo"
                  className="grid content-center rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <SinaIcon />
                </Link>
                <Link
                  href={"https://x.com/TESJKL1118"}
                  target="_blank"
                  aria-label="Twitter"
                  className="grid content-center rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <XIcon />
                </Link>
                <Link
                  href={"https://v.douyin.com/iYdXGgMa/"}
                  target="_blank"
                  aria-label="Tiktok"
                  className="backdrop-blur-sm  grid content-center  rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <TiktokIcon />
                </Link>
              </div>
              <div className="w-max flex gap-1 pr-1">
                <Link
                  href={"https://m.weibo.cn/u/5966770936"}
                  target="_blank"
                  aria-label="Weibo"
                  className="backdrop-blur-sm  grid content-center  rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <SinaIcon />
                </Link>
                <Link
                  href={"https://x.com/TESJKL1118"}
                  target="_blank"
                  aria-label="Twitter"
                  className="backdrop-blur-sm  grid content-center  rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <XIcon />
                </Link>
                <Link
                  href={"https://v.douyin.com/iYdXGgMa/"}
                  target="_blank"
                  aria-label="Tiktok"
                  className="backdrop-blur-sm  grid content-center  rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <TiktokIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className={"animate-[scy2_30s_linear_infinite] w-max"}>
            <div className="w-max flex">
              <div className="w-max flex gap-1 pl-1">
                <Link
                  href={"https://huya.com/111800"}
                  target="_blank"
                  aria-label="Huya"
                  className="backdrop-blur-sm  grid content-center  rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <HuyaIcon />
                </Link>
                <Link
                  href={
                    "https://us.umami.is/share/BW3QIQmZDEKkrQSd/jackey.love"
                  }
                  target="_blank"
                  aria-label="Umami"
                  className="backdrop-blur-sm  grid content-center  rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <UmamiIcon />
                </Link>
                <Link
                  href={
                    "https://collection.cloudinary.com/jackeylove/47d98a861770aac89b9c6102e46a916d"
                  }
                  target="_blank"
                  aria-label="Cloudinary"
                  className="backdrop-blur-sm  grid content-center  rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <CloudinaryIcon />
                </Link>
              </div>
              <div className="w-max flex gap-1 pl-1">
                <Link
                  href={"https://huya.com/111800"}
                  target="_blank"
                  aria-label="Huya"
                  className="backdrop-blur-sm  grid content-center  rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <HuyaIcon />
                </Link>
                <Link
                  href={
                    "https://us.umami.is/share/BW3QIQmZDEKkrQSd/jackey.love"
                  }
                  target="_blank"
                  aria-label="Umami"
                  className="backdrop-blur-sm  grid content-center  rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <UmamiIcon />
                </Link>
                <Link
                  href={
                    "https://collection.cloudinary.com/jackeylove/47d98a861770aac89b9c6102e46a916d"
                  }
                  target="_blank"
                  aria-label="Cloudinary"
                  className="backdrop-blur-sm  grid content-center  rounded-full md:rounded-md p-px w-5 h-5 justify-center"
                >
                  <CloudinaryIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed md:hidden top-0 left-0 h-20 w-full pointer-events-none bg-gradient-to-b from-white to-transparent dark:from-black/70"
      />
      
    </div>
  );
};

export default Navbar;
