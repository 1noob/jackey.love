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
    <div className="hidden z-0 md:grid w-full h-lvh place-content-center rotate-[75deg] origin-center">
      {/*
        The wrapper MUST be explicitly sized to the viewport (w-full h-lvh)
        instead of being sized by its content. The marquee track is deliberately
        taller than the viewport (16 rows x ~200.5px = ~3208px), and with the
        default `align-items: normal` (stretch) that oversized track overflows
        the grid wrapper equally in BOTH directions - (3208 - 800) / 2 = 1204px
        upward. Combined with the `scy` keyframe offset, this pushes the top edge
        of the wall to y~110 and leaves ~200px of bare black at the top of the
        first frame. Pinning the wrapper to exactly the viewport height removes
        that centring-induced upward shift, and place-content:center keeps the
        wall visually centred without letting the wrapper box grow with it.
        `md:grid` must stay because the grid wrapper is what centres the
        oversized marquee track.
      */}
      {/*
        Seamless marquee: two identical groups shifted by translate(-50%).
        The inter-group gap MUST live inside each group's own width (pr-5)
        rather than as a flex `gap` on this container. With a flex gap, the
        track is 2W + gap wide, so -50% moves W + gap/2 while a seamless wrap
        needs W + gap: a constant gap/2 (10px) jump at the end of every cycle.
        Keeping the spacer inside the group makes -50% land exactly on W.
        will-change promotes the wall to its own compositor layer so the
        192-image grid is not repainted while it travels.
      */}
      <div className="flex animate-[scy_100s_linear_infinite] transform-gpu w-max h-max grayscale-[75%] dot-background will-change-transform">
        {/* Each tile is given an explicit width AND height so the grid has its
            final geometry before a single image decodes. Without a height the
            tiles are laid out at the intrinsic aspect ratio, the wall's box
            grows ~3.8x as decoding proceeds, and the centred wrapper drags the
            top of the wall far above the viewport - which showed up as an empty
            black upper half on first paint. */}
        <div className="grid grid-rows-16 grid-flow-col gap-5 pr-5">
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
              height={180}
              alt={"JackeyLove, TES, IG, LOL, LPL"}
              decoding="async"
              loading="eager"
            />
          ))}
        </div>
        <div className="grid grid-rows-16 grid-flow-col gap-5 pr-5">
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
              height={180}
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
