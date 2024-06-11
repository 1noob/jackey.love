import type { NextPage } from "next";
import cloudinary from "@/utils/cloudinary";
import type { ImageProps } from "@/utils/types";
import { Divider, Image } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { JetBrains_Mono } from "next/font/google";
import localFont from 'next/font/local'
import { CSSTransition } from "react-transition-group";

import Box from "@/components/Box";
import List from "@/components/List";
import Recommendation from "@/components/Recommendation";
import Script from "next/script";
import TypedBios from "@/components/typed-bios";
import Gallery from "@/components/Gallery";
import { JackeyLoveIcon } from "@/components/icon";
import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const SmileySans = localFont({
  src: [
    {
      path: '../public/fonts/smiley/SmileySans-Oblique.otf.woff2',
    },
    {
      path: '../public/fonts/smiley/SmileySans-Oblique.ttf.woff2',
    }
  ],
  variable: '--font-smiley'
});

const PixelMono = localFont({
  src: [
    {
      path: '../public/fonts/pixel/ark-pixel-12px-monospaced-latin.woff2',
    },
    {
      path: '../public/fonts/pixel/ark-pixel-12px-monospaced-zh_cn.woff2',
    }
  ],
  variable: '--font-pixel'
});

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 2
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const { systemTheme } = useTheme();

  const [loaded, setStatus] = useState(false);
  const nodeRef = useRef(null);

  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }

  // This will run one time after the component mounts
  useLayoutEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setStatus(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      <Script
        async
        src="https://us.umami.is/script.js"
        data-website-id="61824479-8621-45cf-981c-867d2ac2066d"
      />
      <CSSTransition
        in={loaded}
        timeout={500}
        classNames="loading"
        unmountOnExit
      >
        <main className={`${PixelMono.variable} font-mono`}>
          <div className="page">
            <div className={"content"}>
              <ScrollShadow
                hideScrollBar
                offset={-8}
                size={6}
                className="grid gap-y-4 scroll-smooth h-dvh md:max-h-[50rem] p-2 md:px-2"
              >
                <section>
                  <Image
                    rel="preload"
                    classNames={{
                      wrapper:
                        "hidden h-full md:flex relative float-right md:w-[45%] dark:invert-[.88] invert-[.02] z-[99] shadow-lg rounded-xl",
                    }}
                    className={
                      "min-h-full md:hover:scale-[1.5] origin-top-right transform-gpu duration-200 ease-in-out"
                    }
                    radius="lg"
                    shadow="none"
                    src="/img/handwrite.jpeg"
                    loading="eager"
                    alt={"JackeyLove, 喻文波, Yu-WenBo, 阿水, 水子哥, 哥哥"}
                  />
                  <EmblaCarousel slides={SLIDES} options={OPTIONS} systemTheme={systemTheme} />
                  <div className={"grid gap-y-4 w-full md:w-[54%]"}>
                    <Box>
                      <h1>JackeyLove</h1>
                      <Divider className={"my-4"} />
                      <div
                        className={
                          "grid align-middle px-3 gap-y-2 tracking-tighter"
                        }
                      >
                        <List>
                          <p>Team</p>
                          <p>TOP E-SPORT</p>
                        </List>
                        <List>
                          <p>Role</p>
                          <p>AD Carry</p>
                        </List>
                        <List>
                          <p>Birthday</p>
                          <p>Nov,18,2000</p>
                        </List>
                      </div>
                    </Box>
                    <Box>
                      <h1> Career </h1>
                      <Divider className={"my-4"} />
                      <div
                        className={
                          "grid gap-y-[0.97rem] px-3 align-middle tracking-tighter"
                        }
                      >
                        {pageData.career.map((item, index) => {
                          return (
                            <List key={index}>
                              <p>{item.team}</p>
                              <p>{item.time}</p>
                            </List>
                          );
                        })}
                      </div>
                    </Box>
                  </div>
                </section>
                <section>
                  <Box>
                    <h1>Awards</h1>
                    <Divider className={"my-4"} />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 md:gap-x-12 px-3">
                      {pageData.awards.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </div>
                  </Box>
                </section>
                <section>
                  <Box>
                    <h1>Recommendations</h1>
                    <Divider className={"my-4"} />
                    <Recommendation />
                  </Box>
                </section>
                <section className="hidden md:flex">
                  <iframe
                    className={"w-full rounded-2xl h-[450px] shadow-lg"}
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src={
                      `https://embed.music.apple.com/cn/playlist/jackeylove-live/pl.u-gxbll0JC5vEGkPj?theme=` +
                      systemTheme
                    }
                  />
                </section>
              </ScrollShadow>
              <TypedBios />
            </div>
          </div>
          <Gallery images={images} />
        </main>
      </CSSTransition>
      <CSSTransition
        in={!loaded}
        timeout={800}
        classNames="loading"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div className="loading" ref={nodeRef}>
          <JackeyLoveIcon
            size={300}
            className="w-[50%] md:w-[35%] lg:w-[20%] m-auto h-dvh"
          />
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

const pageData = {
  career: [
    {
      time: "Jun,2016 - Apr,2017",
      team: "Invictus Gaming",
    },
    {
      time: "Apr,2017 - May,2017",
      team: "Young Glory",
    },
    {
      time: "May,2017 - Nov,2019",
      team: "Invictus Gaming",
    },
    {
      time: "Apr,2020 - Present",
      team: "TOP E-SPORT",
    },
  ],
  awards: [
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
  ],
};
