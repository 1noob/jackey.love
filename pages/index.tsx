import type { NextPage } from "next";
import cloudinary from "@/lib/cloudinary";
import type { ImageProps } from "@/types";
import { Divider, Image } from "@nextui-org/react";
import React, {
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
import Typedbar from "@/components/Typedbar";
import Stat from "@/components/statistics";
import X from "@/components/tweet/X";
import AppleMusic from "@/components/AppleMusic";
import TagCloud3d from "@/components/TagCloud3d";
import MatchSchedule from "@/components/match-schedule";
import { jetbrainsMono } from "@/types/fonts";
import useSWR from "swr";
import { cn } from "@/lib/utils";
import Douyin from "@/components/Douyin";

const fetcher = (arg: string) => fetch(arg).then((res) => res.json());

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const nodeRef = useRef(null);
  const [opacity, setOpacity] = useState<boolean>(false);

  const getChildOpacity = (val: boolean) => {
    setOpacity(val);
    return val;
  };

  const { data, isLoading } = useSWR(
    "https://stats.jackey.love/JackeyLove",
    fetcher
  );

  return (
    <>
      <Script
        async
        src="https://us.umami.is/script.js"
        data-website-id="61824479-8621-45cf-981c-867d2ac2066d"
      />
      <CSSTransition
        in={!isLoading}
        timeout={500}
        classNames="loading"
        unmountOnExit
      >
        <main className={`${jetbrainsMono.variable} font-jet`}>
          <div className="bg-page md:bg-transparent absolute w-full h-dvh z-10 md:place-content-center grid md:shadow-[inset_0_0_360px_10px_rgba(0,0,0,0.6)]">
            <CSSTransition
              in={opacity}
              timeout={500}
              classNames="loading"
              unmountOnExit
            >
              <button className="w-full h-svh fixed top-0 cursor-dot">
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
                  "md:bg-content mx-auto max-w-md md:max-w-3xl min-w-[324px] md:min-h-full md:p-2 flex flex-col md:backdrop-blur-2xl rounded-[16px] md:gap-y-2 safe-area"
                )}
              >
                <Typedbar
                  getOpacity={getChildOpacity}
                  parentOpacity={opacity}
                />
                <div className="flex flex-col gap-2 mobile:p-2 h-full overflow-y-auto no-scrollbar md:max-h-[55.5rem] rounded-xl">
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
                    <MatchSchedule data={data?.[3]} />
                    <EmblaCarousel
                      components={[
                        <Stat title="LPL" data={data?.[0]} />,
                        <Stat title="Worlds" data={data?.[1]} />,
                        <Stat title="All" data={data?.[2]} />,
                      ]}
                    />
                  </section>
                  <section>
                    <Box>
                      <div className="text-center text-gray-600 dark:text-gray-300 text-xs flex justify-between">
                        <div>SONG (<a className="underline" href="https://x.com/zhousongjie">@zhousongjie</a>)</div>
                        <a className="underline" href="https://github.com/1noob/jackey.love">Source</a>
                      </div>
                    </Box>
                  </section>
                </div>
              </div>
            </CSSTransition>
          </div>
          <Gallery images={images} />
        </main>
      </CSSTransition>
      <CSSTransition
        in={isLoading}
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
          className="bg-blur backdrop-blur-xl fixed top-0 w-full h-lvh z-[999]"
          ref={nodeRef}
        >
          <JackeyLoveIcon
            size={300}
            className="h-svh absolute brightness-125 dark:brightness-150 top-0 left-[30%] md:left-[35%] lg:left-[42%] xl:left-[46%] w-[40%] md:w-[30%] lg:w-[16%] xl:w-[8%] m-auto"
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
