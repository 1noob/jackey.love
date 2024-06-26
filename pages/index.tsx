import type { NextPage } from "next";
import cloudinary from "@/utils/cloudinary";
import type { ImageProps } from "@/utils/types";
import { Divider, Image } from "@nextui-org/react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { CSSTransition } from "react-transition-group";

import Box from "@/components/Box";
import Recommendation from "@/components/Recommendation";
import Script from "next/script";
import Gallery from "@/components/Gallery";
import { JackeyLoveIcon } from "@/components/icon";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import Intro from "@/components/Intro";
import AppleMusic from "@/components/AppleMusic";
import Typedbar from "@/components/Typedbar";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const SmileySans = localFont({
  src: [
    {
      path: "../public/fonts/smiley/SmileySans-Oblique.otf.woff2",
    },
    {
      path: "../public/fonts/smiley/SmileySans-Oblique.ttf.woff2",
    },
  ],
  variable: "--font-smiley",
});

const PixelMono = localFont({
  src: [
    {
      path: "../public/fonts/pixel/fusion-pixel-12px-monospaced-latin.woff2",
    },
    {
      path: "../public/fonts/pixel/fusion-pixel-12px-monospaced-zh_hans.woff2",
    },
  ],
  variable: "--font-pixel",
});

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const [loaded, setStatus] = useState(false);
  const nodeRef = useRef(null);

  if (typeof document === "undefined") {
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
        <main className={`${PixelMono.variable} font-mono `}>
          <div
            className="bg-page md:bg-transparent absolute w-full h-dvh z-10 md:place-content-center grid 
            md:shadow-[inset_0_0_360px_10px_rgba(0,0,0,0.6)]"
          >
            <div
              className="md:bg-content mx-auto max-w-2xl min-w-[320px] md:min-h-fit 
              md:p-2 flex flex-col md:backdrop-blur-2xl rounded-xl safe-area md:gap-y-2"
            >
              <Typedbar />
              <div
                className="grid mobile:p-2 gap-y-2 h-full overflow-y-auto no-scrollbar
                md:max-h-[50rem] rounded-xl"
              >
                <section>
                  <Image
                    rel="preload"
                    classNames={{
                      wrapper:
                        "hidden h-full md:flex relative float-right md:w-[45%] bg-white dark:bg-card z-[99] rounded-xl",
                    }}
                    className={
                      "h-[378px] w-full m-auto dark:invert-[.89] rounded-xl hover:scale-[1.5] origin-top-right transform-gpu duration-200 ease-in-out"
                    }
                    radius="none"
                    shadow="none"
                    src="/img/handwrite.jpeg"
                    loading="eager"
                    alt={"JackeyLove, 喻文波, Yu-WenBo, 阿水, 水子哥, 哥哥"}
                  />
                  <EmblaCarousel />
                  <Intro />
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
                  <AppleMusic className="h-[450px]" />
                </section>
              </div>
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
            className="dark:brightness-150 w-[50%] md:w-[35%] lg:w-[20%] m-auto"
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
