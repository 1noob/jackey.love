"use client";

import React from "react";
import {Image} from "@nextui-org/react";
import type { ImageProps } from "@/utils/types";

interface ListProps {
    images: ImageProps[];
}
const Gallery: React.FC<ListProps> = ({ images}) => {
  return (
      <div className="gallery">
          <div className="animate-[scy_60s_linear_infinite] transform-gpu w-max grayscale-[50%]">
              <div className="float-left grid grid-rows-8 grid-flow-col">
                  {images.map(({public_id, format}) => (
                      <Image
                          radius="none"
                          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto,q_30/${public_id}.${format}`}
                          width={180}
                          alt={"JackeyLove, TES, IG, LOL, LPL"}
                      />
                  ))}
              </div>
              <div className="grid grid-rows-8 grid-flow-col">
                  {images.map(({public_id, format}) => (
                      <Image
                          radius="none"
                          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto,q_30/${public_id}.${format}`}
                          width={180}
                          alt={"JackeyLove, TES, IG, LOL , LPL"}
                      />
                  ))}
              </div>
          </div>
      </div>
  );
};

export default Gallery;
