"use client";

import React, { useState } from "react";
import { Image } from "@heroui/react";
import type { ImageProps } from "@/types";
import shuffle from "lodash.shuffle";

interface ListProps {
  images: ImageProps[];
}

// 240 -> 96: DOM img count drops from 480 to 192, cutting layout and
// compositing cost on the animated background grid.
const image_len = 96;

// Add f_auto and lower w_1000 -> w_320: ~46.4KB -> ~8.8KB per image (about 81%
// less) because Cloudinary then serves WebP/AVIF to the browser.
const srcOf = (public_id: string, format: string) =>
  `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,ar_1:1,c_fill,g_auto,q_30,w_320/${public_id}.${format}`;

const Gallery: React.FC<ListProps> = ({ images }) => {
  const [data] = useState(shuffle(images).slice(0, image_len));

  return (
    <div className="hidden z-0 md:grid justify-center rotate-[75deg] origin-center">
      <div className="flex gap-5 animate-[scy_100s_linear_infinite] transform-gpu w-max h-max grayscale-[75%] dot-background">
        <div className="float-left grid grid-rows-16 grid-flow-col gap-5">
          {data.map(({ public_id, format }) => (
            <Image
              key={`a-${public_id}`}
              className="-rotate-[90deg] rounded-sm"
              shadow="none"
              radius="none"
              classNames={{
                wrapper: "rounded-sm border-8 border-black",
              }}
              src={srcOf(public_id, format)}
              width={180}
              alt={"JackeyLove, TES, IG, LOL, LPL"}
              decoding="async"
              loading="eager"
            />
          ))}
        </div>
        <div className="grid grid-rows-16 grid-flow-col gap-5">
          {data.map(({ public_id, format }) => (
            <Image
              key={`b-${public_id}`}
              className="-rotate-[90deg] rounded-sm"
              shadow="none"
              radius="none"
              classNames={{
                wrapper: "rounded-sm border-8 border-black",
              }}
              src={srcOf(public_id, format)}
              width={180}
              alt={"JackeyLove, TES, IG, LOL , LPL"}
              decoding="async"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
