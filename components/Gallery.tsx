"use client";

import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import type { ImageProps } from "@/types";
import shuffle from "lodash.shuffle";

interface ListProps {
  images: ImageProps[];
}

const image_len = 160;

const Gallery: React.FC<ListProps> = ({ images }) => {

  const [data, setData] = useState(shuffle(images).slice(0, image_len))

  return (
    <div className="gallery">
      <div className="animate-[scy_90s_linear_infinite] transform-gpu w-max grayscale-[50%]">
        <div className="float-left grid grid-rows-8 grid-flow-col">
          {data.map(({ public_id, format }) => (
            <Image
              rel="preload"
              radius="none"
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto,q_30,w_1000/${public_id}.${format}`}
              width={180}
              alt={"JackeyLove, TES, IG, LOL, LPL"}
              loading="eager"
            />
          ))}
        </div>
        <div className="grid grid-rows-8 grid-flow-col">
          {data.map(({ public_id, format }) => (
            <Image
              radius="none"
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
