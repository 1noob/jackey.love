"use client";

import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import type { ImageProps } from "@/types";
import shuffle from "lodash.shuffle";

interface ListProps {
  images: ImageProps[];
}

const image_len = 240;

const Gallery: React.FC<ListProps> = ({ images }) => {

  const [data, setData] = useState(shuffle(images).slice(0, image_len))

  return (
    <div className="hidden z-0 md:grid justify-center content-center rotate-[75deg]">
      <div className="flex gap-5 animate-[scy_100s_linear_infinite] transform-gpu w-max h-max grayscale-[75%] dot-background">
        <div className="float-left grid grid-rows-16 grid-flow-col gap-5">
          {data.map(({ public_id, format }) => (
            <Image
              className="-rotate-[90deg] rounded-sm"
              rel="preload"
              shadow="none"
              radius="none"
              classNames={{
                wrapper: "rounded-sm border-8 border-white dark:border-black",
              }}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto,q_30,w_1000/${public_id}.${format}`}
              width={180}
              alt={"JackeyLove, TES, IG, LOL, LPL"}
              loading="eager"
            />
          ))}
        </div>
        <div className="grid grid-rows-16 grid-flow-col gap-5">
          {data.map(({ public_id, format }) => (
            <Image
              className="-rotate-[90deg] rounded-sm"
              shadow="none"
              radius="none"
              classNames={{
                wrapper: "rounded-sm border-8 border-white dark:border-black",
              }}
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto,q_30,w_1000/${public_id}.${format}`}
              width={180}
              alt={"JackeyLove, TES, IG, LOL , LPL"}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
