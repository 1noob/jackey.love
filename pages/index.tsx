import type { NextPage } from "next";
import cloudinary from "../utils/cloudinary";
import type { ImageProps } from "../utils/types";
import {
  Badge,
  Divider,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@nextui-org/react";
import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { ScrollShadow } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const slice_len = 1;
const image_len = 160;

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const [viewAllRecs, setViewAllRecs] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <main className={`justify-center ${jetbrainsMono.variable} font-mono`}>
        <div className="absolute w-full z-10 h-dvh place-content-center grid">
          <div
            className={"backdrop-blur-2xl rounded-none lg:rounded-lg content"}
          >
            <ScrollShadow
              hideScrollBar
              size={0}
              className="grid gap-7 scroll-smooth md:max-h-[52rem] mobile:h-dvh"
            >
              <section>
                <div className="relative float-right w-[50%] mobile:w-full mobile:mb-12 rounded-lg overflow-hidden">
                  <Image radius={"none"} src="/img/handwrite.jpeg" />
                </div>
                <div className="grid w-[50%] mobile:w-full gap-y-8">
                  <div>
                    <h1> JackeyLove </h1>
                    <div
                        className={
                          "grid align-middle px-3 gap-y-4 tracking-tighter"
                        }
                    >
                      <div className={"grid grid-cols-2"}>
                        <div>Team</div>
                        <div>
                          <div className={"region-icon text-danger"}>TES</div> Top
                          E-Sport
                        </div>
                      </div>
                      <div className={"grid grid-cols-2"}>
                        <div>Nationality</div>
                        <div>
                          <div className={"region-icon text-danger"}>CN</div>{" "}
                          CHINA
                        </div>
                      </div>
                      <div className={"grid grid-cols-2"}>
                        <div>Role</div>
                        <div>
                          <div className={"region-icon text-blue-600"}>ADC</div>{" "}
                          Bot Laner
                        </div>
                      </div>
                      <div className={"grid grid-cols-2"}>
                        <div>Birthday</div>
                        <div>Nov,18,2000</div>
                      </div>
                      <div className={"grid grid-cols-2"}>
                        <div>Status</div>
                        <div>
                          <Chip color="success" variant="shadow" size="sm">
                            Active
                          </Chip>
                        </div>
                      </div>
                      <div className={"grid grid-cols-2"}>
                        <div>Total Winnings</div>
                        <div>$768,479</div>
                      </div>
                    </div>
                  </div>
                  <Divider className="my-4 md:hidden" />
                  <div>
                    <h1> Team History </h1>
                    <div
                        className={
                          "grid gap-y-4 px-3 align-middle tracking-tighter"
                        }
                    >
                      {pageData.career.map((item, index) => {
                        return (
                            <div className={"grid grid-cols-2"}>
                              <div>{item.team}</div>
                              <div>{item.time}</div>
                            </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
              <Divider className="my-4" />
              <section>
                <h1 className={"md:hidden"}>Awards</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-x-16 px-3">
                  {pageData.awards.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </div>
              </section>
              <Divider className="my-4" />
              <section>
                <h1 className={"md:hidden"}>Recommendations</h1>
                <div className="flex flex-col gap-y-8">
                  <AnimatePresence initial={false}>
                    {pageData.recommendations
                        .slice(
                            0,
                            viewAllRecs ? pageData.recommendations.length : slice_len
                        )
                        .map((item, index) => {
                          return (
                              <motion.div
                                  key={index}
                                  className="flex flex-col md:flex-row"
                                  initial={{ opacity: 0, y: 100, scale: 0.9 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  transition={{
                                    duration: shouldReduceMotion ? 0 : 0.2,
                                  }}
                              >
                                <div className="w-28 flex-shrink-0">
                                  <div className="mb-4">
                                    <Image
                                        src={item.thumbnail}
                                        width={48}
                                        height={48}
                                        className="rounded-md w-full block"
                                    />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className={"md:indent-[-0.65rem]"}>
                                    “{item.text}”
                                  </div>
                                  <div className={"mt-4"}>
                                    &mdash; {item.name}, {item.title}, {item.company}
                                  </div>
                                </div>
                              </motion.div>
                          );
                        })}
                  </AnimatePresence>
                  {!viewAllRecs && (
                      <div className={"my-[1.15rem] mx-auto text-white"}>
                        <Badge
                            content={pageData.recommendations.length - slice_len}
                            color="danger"
                            variant="solid"
                            showOutline={false}
                        >
                          <Button
                              radius="full"
                              className="bg-black/20 dark:bg-white/10 shadow-lg"
                              onClick={() => setViewAllRecs(true)}
                              size="sm"
                          >
                            &bull;&bull;&bull;
                          </Button>
                        </Badge>
                      </div>
                  )}
                </div>
              </section>
            </ScrollShadow>
          </div>
        </div>
        <div className="mobile:hidden my-auto overflow-hidden w-full h-dvh z-0 grid content-center">
          <div className="animate-[scy_60s_linear_infinite] w-max grayscale-[50%]">
            <div className="float-left grid grid-rows-8 grid-flow-col">
              {images.map(({ public_id, format }) => (
                <Image
                  radius="none"
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto,q_50/${public_id}.${format}`}
                  width={200}
                />
              ))}
            </div>
            <div className="grid grid-rows-8 grid-flow-col">
              {images.map(({ public_id, format }) => (
                <Image
                  radius="none"
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto,q_50/${public_id}.${format}`}
                  width={200}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(image_len)
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

  for (let i = reducedResults.length; i < image_len; i++) {
    let rand_id = Math.floor(Math.random() * i);
    reducedResults.push(reducedResults.at(rand_id));
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
      team: "Top E-Sport",
    },
  ],
  awards: [
    "2016NEST全国冠军",
    "2017NEST全国冠军",
    "2018LPL春季赛二阵",
    "2018LPL夏季赛三阵",
    "2018亚洲对抗赛冠军",
    "2018全球总决赛冠军",
    "2018德玛西亚杯冠军",
    "2018LPL年度最佳新秀",
    "2019LPL春季赛冠军",
    "2020MSC季中杯冠军",
    "2020LPL夏季赛冠军",
    "2020LPL夏季赛一阵",
    "2020LPL年度最佳ADC",
    "2020德玛西亚杯冠军",
    "2021德玛西亚杯冠军",
    "2022LPL夏季赛一阵",
    "LPL10周年十大选手",
    "2023LPL夏季赛三阵",
  ],
  recommendations: [
    {
      text: "我总是告诉我们的队员，我们的队伍有 JackeyLove 是件好事，因为他有很棒的性格和天赋，他是一个非常成熟的人，总是乐于接受反馈。JackeyLove 是一名令我有很高期待的选手。",
      name: "Kim",
      title: "Coach",
      company: "IG",
      thumbnail: "/img/kim.jpeg",
    },
    {
      text: "Nobody wants to be flashing forward to make the mistake in the Game five, but Jackey says I will flashing forward. I will be the hero.",
      name: "CaptainFlowers",
      title: "Comment",
      company: "LEC",
      thumbnail: "/img/captainflowers.jpeg",
    },
    {
      text: "我对他最突出的印象是冷静，而且判断也颇为准确。尽管有些时候他会有些奇怪的被击杀，但是他的操作和对线都很棒。另外就是他本身似乎眉宇之间透着一股和年龄不符的英气，身高不算高的他却给人一种器宇轩昂的感觉，我觉得他是一名很有魅力的选手。据我暗中观察，他在选手中似乎也挺有威望哟。",
      name: "MintyBlue藏马",
      title: "Ceo",
      company: "IG",
      thumbnail: "/img/mintyblue.jpeg",
    },
    {
      text: "我个人觉得我自己的风格这个赛季会变得很多，因为我们来了个新选手 JackeyLove。他是一个打法很凶的 ADC，我就没必要一直在对线的情况下打出优势了，我也可以慢慢发育，我也觉得自己的打团能力也不是很差的，所以打到后期也有 JackeyLove，就觉得线上不要很急，就慢慢打。",
      name: "Rookie",
      title: "Mid",
      company: "IG",
      thumbnail: "/img/rookie.jpeg",
    },
  ],
};
