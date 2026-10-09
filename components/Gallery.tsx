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
// The animation name encodes the travel distance: `scy4` moves -25% of the
// track, which is exactly one group when four groups are rendered; `scy3`
// moves -33.3333% (one group out of three). See tailwind.config.js for why
// two groups are not enough. The cycle length is a responsive variant rather
// than a JS swap because changing an `animation` property restarts it, which
// made the wall snap back to the start when the client upgraded presets.
// `will-change` is desktop-only because it pins the composited layer in GPU
// memory - worth it for the desktop wall, pure waste for the mobile one.
const TRACK_CLASS =
  "flex animate-[scy4_22s_linear_infinite] md:animate-[scy3_100s_linear_infinite] " +
  "transform-gpu w-max h-max dot-background md:will-change-transform";

// Desktop keeps 96 tiles of 180px over 16 rows (6 columns per group). Three
// groups - measured worst-case hole over a full travel: 75/144 cells with two
// groups vs 9/144 with three, and 9/144 is just the tile gaps.
const DESKTOP = {
  imageLen: 96,
  tile: 180,
  groups: 3,
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
  // Four groups, not three: with three the worst-case hole was still 37/144
  // cells; with four it is 11/144, i.e. only the gaps.
  groups: 4,
  groupClass: "grid grid-rows-20 grid-flow-col gap-5 pr-5",
};

// Add f_auto and lower w_1000 -> w_320: ~46.4KB -> ~8.8KB per image (about 81%
// less) because Cloudinary then serves WebP/AVIF to the browser.
//
// Desaturation is baked in server-side with `e_saturation:-88` instead of a CSS
// `filter: grayscale(50%)`. Note `e_grayscale` takes no amount - it is always
// full grey; `e_saturation:-88` is what gives a partial amount.
// A CSS filter makes the browser re-run a colour matrix
// across the entire composited layer on every frame; on this wall that layer is
// ~12.6M px, the single most expensive thing we can ask a phone GPU to do.
// Measured on the same 320x320 sample: 10,515B as colour vs 8,990B as a
// 1-component JPEG - so it is both 14.5% smaller and free at runtime.
const srcOf = (public_id: string, format: string) =>
  `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/e_saturation:-88,e_brightness:20,f_auto,ar_1:1,c_fill,g_auto,q_30,w_320/${public_id}.${format}`;

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
    <div
      className="fixed left-0 w-full z-0 grid place-content-center rotate-[75deg] origin-center"
      style={{
        // Bleed past BOTH viewport edges by a fixed amount so the wall covers
        // the status-bar band on iOS.
        //
        // This deliberately does NOT use env(safe-area-inset-top): Safari
        // reports that inset as 0 (it treats the status-bar strip as its own
        // chrome rather than something the page must avoid), so a
        // `calc(-1 * env(...))` offset evaluates to zero and does nothing -
        // which is exactly why the previous attempt changed nothing on device.
        // A fixed bleed is larger than any status bar (44-59px across models)
        // and is harmless where there is none: the wall is an oversized
        // repeating texture, so the extra area is simply clipped.
        top: "-60px",
        // Fixed height from `vh`, NOT `bottom` and not `lvh`/`dvh`.
        //
        // `vh` on iOS Safari resolves to the LARGE viewport and stays constant
        // while the toolbar expands/collapses, so the element's box never
        // changes size. Using `bottom: -80px` (or dvh/lvh) made the height
        // track the changing viewport, so the wall was re-laid-out on every
        // frame of a scroll gesture - which showed up as jitter.
        // 100vh + 60 (top bleed) + 80 (bottom bleed).
        height: "calc(100vh + 140px)",
      }}
    >
      {/*
        `fixed`, not static. As a normal-flow element the wall occupied 100lvh
        and scrolled together with the page, so scrolling on a phone dragged the
        backdrop along with the content. A fixed element's containing block is
        the viewport, so it stays put while the content scrolls - and because it
        is out of flow it also stops contributing to the document scroll height.

        Sized with `lvh` rather than `inset-0`. `inset-0` tracks the CURRENT
        viewport, which on iOS Safari shrinks while the toolbar is showing - so
        the wall stopped below the status-bar band and the page colour showed
        through there. `100lvh` is the largest the viewport ever gets (toolbar
        collapsed), so the wall always reaches behind the status bar; when the
        toolbar is out the extra height is simply clipped.
      */}
      {/*
        The wrapper MUST be explicitly pinned to the viewport instead of being
        sized by its content. The marquee track is deliberately taller than the
        viewport (20 rows x ~166px = ~3700px on mobile, 16 rows x ~196px on
        desktop), and with the default `align-items: normal` (stretch) that
        oversized track overflows the grid wrapper equally in BOTH directions.
        Combined with the keyframe offset this used to push the top edge of the
        wall below the fold and leave a bare band at the top of the first frame.
        Pinning the wrapper (fixed + top/bottom) removes that centring-induced
        shift, and place-content:center keeps the wall visually centred without
        letting the wrapper box grow with it. The wrapper has to stay a grid
        container for place-content to have any effect on the oversized track.
      */}
      {/*
        Seamless marquee: N identical groups, and the animation travels exactly
        ONE group width per cycle (`scy4` = -25% of a four-group track,
        `scy3` = -33.3333% of a three-group track), so group k+1 lands where
        group k started.

        The inter-group gap MUST live inside each group's own width (pr-5)
        rather than as a flex `gap` on this container. With a flex gap the
        track is N*W + gap wide, so the wrap lands gap/N short and the seam
        jumps. Keeping the spacer inside the group makes the travel land
        exactly on one group width.

        Two groups is not enough: travelling half the track leaves only
        (track - viewportProjection)/2 of margin, which is always short on the
        travel axis no matter how large the track is - measured 75-77 uncovered
        cells out of 144 at the end of a cycle on both desktop and mobile.
      */}
      <div className={TRACK_CLASS}>
        {/*
          Each tile is given an explicit width AND height so the grid has its
          final geometry before a single image decodes. Without a height the
          tiles are laid out at the intrinsic aspect ratio, the wall's box grows
          ~3.8x as decoding proceeds, and the centred wrapper drags the top of
          the wall far above the viewport - which showed up as an empty black
          upper half on first paint.

          Every group is eager, none lazy: the marquee brings each group into
          view within one cycle, and a lazy group arrives half-empty (measured
          31/60 loaded at wrap time), which reads as a jump to blank tiles.

          `aspect-square !h-auto` keeps the image itself 1:1. The wrapper is
          border-box with border-8, so the grid cell (150/180px) leaves only
          cell-16px of content width; Tailwind's `img { max-width: 100% }` then
          narrows the image while its height attribute stays put, squashing it
          to a 0.937 ratio. The `!` is needed because HeroUI sets the height
          inline.
        */}
        {Array.from({ length: preset.groups }).map((_, gi) => (
          <div key={`group-${gi}`} className={preset.groupClass}>
            {data.map(({ public_id, format }) => (
              <Image
                key={`${gi}-${public_id}`}
                className="-rotate-[90deg] rounded-sm aspect-square !h-auto"
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
        ))}
      </div>
    </div>
  );
};

export default Gallery;
