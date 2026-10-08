"use client";

import React, { useEffect, useState } from "react";
import { Image } from "@heroui/react";
import type { ImageProps } from "@/types";

interface ListProps {
  images: ImageProps[];
}

// Deterministic shuffle. `Math.random()`-based shuffling produced a different
// order on the server than in the browser, which was harmless only while this
// component was client-rendered; now that the wall is part of the static HTML,
// the two would disagree and React would reject the hydration. A fixed-seed
// PRNG keeps the "looks random" result identical in both environments.
const mulberry32 = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const seededShuffle = <T,>(input: T[], seed = 0x5eed1e): T[] => {
  const out = input.slice();
  const rand = mulberry32(seed);
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

// Every class string below is written out in full because Tailwind's JIT only
// sees literal class names - `grid-rows-8`, `animate-[scy_22s_linear_infinite]`
// etc. must never be built by concatenation.
//
// The cycle length is expressed with a responsive variant rather than being
// swapped by JS: changing an `animation` property restarts it from 0%, which
// made the wall visibly snap back to the start when the client upgraded from
// the mobile preset to the desktop one. `will-change` is desktop-only because
// it pins the composited layer in GPU memory - worth it for the 12.6M px
// desktop wall, pure waste for the ~1.3M px mobile one.
const TRACK_CLASS =
  "flex animate-[scy_22s_linear_infinite] md:animate-[scy_100s_linear_infinite] " +
  "transform-gpu w-max h-max dot-background md:will-change-transform";

// Desktop keeps 96 tiles of 180px over 16 rows (6 columns per group).
const DESKTOP = {
  imageLen: 96,
  tile: 180,
  groupClass: "grid grid-rows-16 grid-flow-col gap-5 pr-5",
};

// Mobile: 60 tiles of 150px over 20 rows (3 columns per group).
//
// The row count is not cosmetic - it is what keeps the wall covering the
// viewport. `scy` translates along the track's OWN x axis, and the track is
// rotated 75deg, so ~96% of that motion is vertical on screen. Over one cycle
// the wall slides one group-width along that axis, and whether a bare edge
// appears then depends only on how far the track extends in its own y
// direction:
//
//   uncovered = viewportHeight / 2 - trackHeight * cos(75deg) / 2
//
// With 8 rows x 110px that measured ~280px of exposed edge over a full cycle.
// So trackHeight must be >= viewportHeight / cos(75deg) (~3260px for an 844px
// viewport). 20 rows x 166px + 19 gaps gives ~3700px, about 57px of margin.
// Desktop already satisfies this at 16 rows x 196px (~3436px).
const MOBILE = {
  imageLen: 60,
  tile: 150,
  groupClass: "grid grid-rows-20 grid-flow-col gap-5 pr-5",
};

// Add f_auto and lower w_1000 -> w_320: ~46.4KB -> ~8.8KB per image (about 81%
// less) because Cloudinary then serves WebP/AVIF to the browser.
//
// Grayscale is baked in server-side with `e_grayscale` instead of a CSS
// `filter: grayscale()`. A CSS filter makes the browser re-run a colour matrix
// across the entire composited layer on every frame; on this wall that layer is
// ~12.6M px, the single most expensive thing we can ask a phone GPU to do.
// Measured on the same 320x320 sample: 10,515B as colour vs 8,990B as a
// 1-component JPEG - so it is both 14.5% smaller and free at runtime.
const srcOf = (public_id: string, format: string) =>
  `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/e_grayscale,f_auto,ar_1:1,c_fill,g_auto,q_30,w_320/${public_id}.${format}`;

const Gallery: React.FC<ListProps> = ({ images }) => {
  // Shuffle exactly once per mount. `useState` freezes the first result, so the
  // two groups always render the same order, and switching preset only changes
  // how many tiles are sliced off the front - the order never jumps around.
  const [shuffled] = useState(() => seededShuffle(images));

  // `imageLen` depends on the viewport, but getStaticProps runs at build time
  // and cannot see it. Default to the light mobile preset so the very first
  // frame on a phone is already cheap, then upgrade on the client only when the
  // viewport really is wide (md = 768px). Doing it the other way round (default
  // 96) would make the phone stall on its first frame.
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const preset = wide ? DESKTOP : MOBILE;
  const data = shuffled.slice(0, preset.imageLen);

  return (
    <div className="fixed inset-0 z-0 grid place-content-center rotate-[75deg] origin-center">
      {/*
        `fixed`, not static. As a normal-flow element the wall occupied 100lvh
        and scrolled together with the page, so scrolling on a phone dragged the
        backdrop along with the content. A fixed element's containing block is
        the viewport, so it stays put while the content scrolls - and because it
        is out of flow it also stops contributing to the document scroll height.
        `inset-0` already pins it to the viewport on all four sides, so no
        explicit width/height is needed here.
      */}
      {/*
        The wrapper MUST be explicitly sized to the viewport (w-full h-lvh)
        instead of being sized by its content. The marquee track is deliberately
        taller than the viewport (16 rows x ~200.5px = ~3208px on desktop), and
        with the default `align-items: normal` (stretch) that oversized track
        overflows the grid wrapper equally in BOTH directions -
        (3208 - 800) / 2 = 1204px upward. Combined with the `scy` keyframe
        offset, this used to push the top edge of the wall to y~110 and leave
        ~200px of bare black at the top of the first frame. Pinning the wrapper
        to exactly the viewport removes that centring-induced upward shift, and
        place-content:center keeps the wall visually centred without letting the
        wrapper box grow with it. The wrapper has to stay a grid container for
        place-content to have any effect on the oversized track.
      */}
      {/*
        Seamless marquee: two identical groups shifted by translate(-50%).
        The inter-group gap MUST live inside each group's own width (pr-5)
        rather than as a flex `gap` on this container. With a flex gap, the
        track is 2W + gap wide, so -50% moves W + gap/2 while a seamless wrap
        needs W + gap: a constant gap/2 (10px) jump at the end of every cycle.
        Keeping the spacer inside the group makes -50% land exactly on W, and
        that stays true for both presets because the two groups are always
        rendered from the same `data` array with the same `pr-5`.
      */}
      <div className={TRACK_CLASS}>
        {/* Each tile is given an explicit width AND height so the grid has its
            final geometry before a single image decodes. Without a height the
            tiles are laid out at the intrinsic aspect ratio, the wall's box
            grows ~3.8x as decoding proceeds, and the centred wrapper drags the
            top of the wall far above the viewport - which showed up as an empty
            black upper half on first paint. */}
        <div className={preset.groupClass}>
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
              width={preset.tile}
              height={preset.tile}
              alt={"JackeyLove, TES, IG, LOL, LPL"}
              decoding="async"
              loading="eager"
            />
          ))}
        </div>
        <div className={preset.groupClass}>
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
              width={preset.tile}
              height={preset.tile}
              alt={"JackeyLove, TES, IG, LOL, LPL"}
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
