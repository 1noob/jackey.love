import type { NextPage } from "next";
import cloudinary from "@/lib/cloudinary";
import type { ImageProps } from "@/types";
import { Divider, Image } from "@nextui-org/react";
import React, { useLayoutEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import Box from "@/components/Box";
import Evaluation from "@/components/evaluation";
import Script from "next/script";
import Gallery from "@/components/Gallery";
import { JackeyLoveIcon } from "@/components/icon";
import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import Intro from "@/components/Intro";
import Typedbar from "@/components/Typedbar";
import Stat from "@/components/statistics";
import X from "@/components/tweet/X";
import AppleMusic from "@/components/AppleMusic";
import TagCloud3d from "@/components/TagCloud3d";
import MatchSchedule from "@/components/match-schedule";
import { jetbrainsMono } from "@/types/fonts";
import useSWR from "swr";

const fetcher = (arg: string) => fetch(arg).then((res) => res.json());

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const [loaded, setStatus] = useState(false);
  const nodeRef = useRef(null);

  const { data: lpl } = useSWR(
    "https://stat.jackey.love/lpl-stat/JackeyLove",
    fetcher
  );
  const { data: world } = useSWR(
    "https://stat.jackey.love/world-stat/JackeyLove",
    fetcher
  );
  const { data: schedule } = useSWR(
    "https://stat.jackey.love/match-schedule/JackeyLove",
    fetcher
  );

  if (typeof document === "undefined") {
    React.useLayoutEffect = React.useEffect;
  }

  // This will run one time after the component mounts
  useLayoutEffect(() => {
    // callback function to call when event triggers
    const onDataLoad = () => {
      setStatus(true);
    };

    // Check if the data has already loaded
    if (
      lpl != "undefined" &&
      world != "undefined" &&
      schedule != "undefined"
    ) {
      onDataLoad();
    } else {
      window.addEventListener("load", onDataLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onDataLoad);
    }
  }, []);

  let components_top = [];
  let components_bot = [];

  components_top.push(
    <Image
      classNames={{
        wrapper:
          "min-w-full h-full grid place-content-center rounded-[12px] bg-box",
      }}
      className={"m-auto h-[450px] dark:invert-[.89] rounded-[12px]"}
      radius="none"
      shadow="none"
      src="/img/handwrite.jpeg"
    />
  );

  components_top.push(<TagCloud3d />);
  components_top.push(<X id="1788487122485166261" />);
  components_top.push(<AppleMusic />);

  components_bot.push(<Stat title="LPL" data={lpl} />);
  components_bot.push(<Stat title="Worlds" data={world} />);

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
        classNames="loading-page"
        unmountOnExit
      >
        <main className={`${jetbrainsMono.variable} font-jet`}>
          <div
            className="bg-page md:bg-transparent absolute w-full h-dvh z-10 md:place-content-center grid 
            md:shadow-[inset_0_0_360px_10px_rgba(0,0,0,0.6)]"
          >
            <div
              className="md:bg-content mx-auto max-w-md md:max-w-3xl min-w-[320px] md:min-h-fit 
              md:p-2 flex flex-col md:backdrop-blur-2xl rounded-[16px] md:gap-y-2 safe-area"
            >
              <Typedbar />
              <div
                className="grid gap-2 mobile:p-2 h-full overflow-y-auto no-scrollbar
                md:max-h-[55rem] rounded-xl"
              >
                <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                  <EmblaCarousel components={components_top} />
                  <Intro />
                </section>
                <section>
                  <Box>
                    <h1>Awards</h1>
                    <Divider className={"my-4 md:h-0.5"} />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-2 text-nowrap">
                      {Awards.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </div>
                  </Box>
                </section>
                <section>
                  <Box>
                    <h1>Evaluations</h1>
                    <Divider className={"my-4 md:h-0.5"} />
                    <Evaluation />
                  </Box>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
                  <MatchSchedule data={schedule} />
                  <EmblaCarousel components={components_bot} />
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
        classNames="loading-page"
        unmountOnExit
        enter={false}
        nodeRef={nodeRef}
      >
        {/* 
          使用 safe-area 进行定位会导致抖动
          使用 lvh 会先出现 svh 再延伸为 lvh
        */}
        <div
          className="bg-blur backdrop-blur-xl fixed top-0 w-full h-lvh z-[999]"
          ref={nodeRef}
        >
          <JackeyLoveIcon
            size={300}
            className="h-svh absolute top-0 left-[30%] md:left-[35%] lg:left-[40%] xl:left-[45%] dark:brightness-150 w-[40%] md:w-[30%] lg:w-[20%] xl:w-[10%] m-auto"
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
];
