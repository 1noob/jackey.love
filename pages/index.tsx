import type { NextPage } from "next";
import cloudinary from "@/lib/cloudinary";
import type { ImageProps } from "@/types";
import { Image } from "@heroui/react";
import Divider from "@/components/divider";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { CSSTransition } from "react-transition-group";

import Box from "@/components/Box";
import Evaluation from "@/components/evaluation";
import Script from "next/script";
import Gallery from "@/components/Gallery";
import { JackeyLoveIcon } from "@/components/icon";
import EmblaCarousel from "@/components/EmblaCarousel";
import Intro from "@/components/Intro";
import Stat from "@/components/statistics";
import X from "@/components/tweet/X";
import AppleMusic from "@/components/AppleMusic";
import TagCloud3d from "@/components/TagCloud3d";
import MatchSchedule from "@/components/match-schedule";
import { Pixel } from "@/types/fonts";
import useSWR from "swr";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import TypedBios from "@/components/typed-bios";

// The timeout is what turns a hung socket into a real error. Without it a
// request can stay pending indefinitely, and since the splash is gated on
// `isLoading` the visitor would wait on the logo forever.
const fetcher = (arg: string) =>
  fetch(arg, { signal: AbortSignal.timeout(10000) }).then((res) => res.json());

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const nodeRef = useRef(null);
  const [opacity, setOpacity] = useState<boolean>(false);

  const getChildOpacity = (val: boolean) => {
    setOpacity(val);
    return val;
  };

  const { data, isLoading, error } = useSWR(
    "https://stats.jackey.love/JackeyLove",
    fetcher
  );

  // The splash must never be able to trap the visitor. It is driven by
  // `isLoading`, which only turns false on success or failure - so a request
  // that hangs without ever erroring (a flaky mobile link, a captive portal,
  // a TCP connection that never sends RST) leaves isLoading true forever and
  // the page sits on the logo. Tapping the screen "fixed" it only because SWR
  // revalidates on focus. Cap the splash so content always arrives on its own.
  const [splashExpired, setSplashExpired] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setSplashExpired(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const ready = !isLoading || !!error || splashExpired;

  return (
    <>
      <Script
        async
        src="https://us.umami.is/script.js"
        data-website-id="61824479-8621-45cf-981c-867d2ac2066d"
      />
      <main className={`${Pixel.variable} font-pixel`}>
        <CSSTransition
          in={ready}
          timeout={500}
          classNames="loading"
          unmountOnExit
        >
          {/*
            `bg-page` was an opaque black on mobile (desktop already used
            md:bg-transparent), which painted straight over the wall now that
            the wall is visible on phones too. The page colour still comes from
            <body className="bg-page"> in _document.tsx.
          */}
          <div className="bg-transparent absolute left-0 w-full h-lvh z-10 pt-2 pb-28 md:pt-0 md:pb-0 md:place-content-center grid md:shadow-[inset_0_0_360px_10px_rgba(0,0,0,0.6)]">
            <CSSTransition
              in={opacity}
              timeout={500}
              classNames="loading"
              unmountOnExit
            >
              <button className="w-full h-svh fixed top-0 left-0 cursor-dot">
                <JackeyLoveIcon
                  onClick={() => setOpacity(!opacity)}
                  className="brightness-125 dark:brightness-150 left-[30%] md:left-[35%] lg:left-[42%] xl:left-[46%] w-[40%] md:w-[30%] lg:w-[16%] xl:w-[8%] m-auto"
                  size={300}
                />
              </button>
            </CSSTransition>
            <CSSTransition
              in={!opacity}
              timeout={500}
              classNames="loading"
              unmountOnExit
            >
              <div
                className={cn(
                  "md:backdrop-blur-xl md:backdrop-brightness-200 mx-auto max-w-md md:max-w-3xl min-w-[324px] h-full md:h-[75%] self-center md:p-2 flex flex-col rounded-[16px] md:gap-y-2 safe-area"
                )}
              >
                <Navbar
                  getOpacity={getChildOpacity}
                  parentOpacity={opacity}
                  className="safe-area-top"
                />
                <div className="mt-14 md:m-0 !z-[3] flex flex-col gap-2 mobile:p-2 h-full overflow-y-auto no-scrollbar md:max-h-[55.5rem] rounded-xl">
                  <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                    <EmblaCarousel
                      components={[
                        <Image
                          classNames={{
                            wrapper:
                              "min-w-full h-full grid place-content-center rounded-[12px] bg-box",
                          }}
                          className={
                            "m-auto h-[450px] dark:invert-[.89] rounded-[12px]"
                          }
                          radius="none"
                          shadow="none"
                          src="/img/handwrite.jpeg"
                        />,
                        <TagCloud3d />,
                        <X id="1788487122485166261" />,
                        <AppleMusic id="jackeylove-live/pl.u-gxbll0JC5vEGkPj" />,
                      ]}
                    />
                    <Intro />
                  </section>
                  <section>
                    <Box>
                      <h1>Evaluations</h1>
                      <Divider className={"my-4"} />
                      <Evaluation />
                    </Box>
                  </section>
                  <section>
                    <Box>
                      <h1>Awards</h1>
                      <Divider className={"my-4"} />
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-2 text-nowrap">
                        {Awards.map((item, index) => (
                          <p key={index}>&bull;&nbsp;{item}</p>
                        ))}
                      </div>
                    </Box>
                  </section>
                  <section className="md:m-0 grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                    <MatchSchedule data={data?.[3]} />
                    <EmblaCarousel
                      components={[
                        <Stat title="LPL" data={data?.[0]} />,
                        <Stat title="Worlds" data={data?.[1]} />,
                        <Stat title="All" data={data?.[2]} />,
                      ]}
                    />
                  </section>
                </div>
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>
        {/*
          Edge scrims. These are siblings of the content container on purpose.

          They cannot live inside Navbar: Navbar renders within the content
          container (z-10), so anything written there competes with the cards in
          the same stacking context and paints over them. Out here z-[5] means
          what it says - above the wall (z-0), below the content container
          (z-10) - so they shade the backdrop and never touch the cards.

          Why they exist: iOS Safari does not let page content paint into the
          status-bar strip (top) or behind its bottom address bar, so the wall
          can never reach those bands no matter how far it bleeds. These fade the
          backdrop to black there so the edge reads as intentional.

          One full-height gradient covers both edges (see .edge-scrim in
          styles/index.css), so there is no seam between a top and a bottom
          field to line up. It sits above the loading overlay (z-999) too, so
          the load state is finished the same way.
        */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-[1000] edge-scrim md:hidden" />

        {/*
          The wall is a background layer that needs no API data, so it renders
          outside the loading transition and therefore ends up in the static
          HTML. While it sat inside that transition the page had no wall at all
          for the ~2-3s it took SWR to resolve and the transition to mount.

          It must also stay AFTER the content container. That container is
          `absolute` with no `top`, so its vertical position falls back to its
          static position - where it would sit in normal flow. Rendering the
          wall first (it occupies 100lvh) pushed the whole UI down by a full
          viewport height, off screen.
        */}
        <Gallery images={images} />
      </main>
      <CSSTransition
        in={!ready}
        timeout={800}
        classNames="loading"
        unmountOnExit
        enter={false}
        nodeRef={nodeRef}
      >
        {/* 
          使用 safe-area 进行定位会导致抖动
          使用 lvh 会先出现 svh 再延伸为 lvh
        */}
        <div
          className="bg-blur backdrop-blur-xl fixed top-0 left-0 w-full h-lvh z-[999]"
          ref={nodeRef}
        >
          <JackeyLoveIcon
            size={300}
            className="h-svh absolute brightness-125 dark:brightness-150 top-0 left-[30%] md:left-[35%] lg:left-[42%] xl:left-[46%] w-[40%] md:w-[30%] lg:w-[16%] xl:w-[8%] m-auto"
          />
          {/*
            Load-state copies of the Navbar scrims. The permanent ones sit at
            z-[5] so they can never dim the cards - but that also means this
            overlay (z-999) hid them, so during load the status-bar strip read
            as a bright band again. Drawing them again inside the overlay
            finishes both states the same way, and nothing can be dimmed here
            because the content container is not mounted yet.
          */}
        </div>
      </CSSTransition>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(500)
    .execute();
  let reducedResults: ImageProps[] = [];

  for (let result of results.resources) {
    reducedResults.push({
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}


const Awards = [
  "2016 NEST全国冠军",
  "2017 NEST全国冠军",
  "2018 LPL春季赛二阵",
  "2018 LPL夏季赛三阵",
  "2018 亚洲对抗赛冠军",
  "2018 全球总决赛冠军",
  "2018 德玛西亚杯冠军",
  "2018 LPL年度最佳新秀",
  "2019 LPL春季赛冠军",
  "2020 MSC季中杯冠军",
  "2020 LPL夏季赛冠军",
  "2020 LPL夏季赛一阵",
  "2020 LPL年度最佳ADC",
  "2020 德玛西亚杯冠军",
  "2021 德玛西亚杯冠军",
  "2022 LPL夏季赛一阵",
  "LPL10周年 十大选手",
  "2023 LPL夏季赛三阵",
  "2024 LPL春季赛三阵",
  "2024 LPL夏季赛二阵",
  "2025 LPL第一赛段冠军",
  "2025 LPL第一赛段FMVP",
  "2025 LPL第二赛段一阵",
];
