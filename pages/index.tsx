import type { NextPage } from "next";
import cloudinary from "../utils/cloudinary";
import type { ImageProps } from "@/utils/types";
import { Divider, Image } from "@nextui-org/react";
import React from "react";
import { JetBrains_Mono } from "next/font/google";
import { ScrollShadow } from "@nextui-org/react";
import Box from "@/components/Box";
import List from "@/components/List";
import Recommendation from "@/components/Recommendation";
import Script from "next/script";
import TypedBios from "@/components/typed-bios";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const image_len = 160;

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <Script async src="https://us.umami.is/script.js" data-website-id="61824479-8621-45cf-981c-867d2ac2066d"/>
      <main className={`${jetbrainsMono.variable}`}>
        <div className="page">
          <div className={"content"}>
            <ScrollShadow
              hideScrollBar
              visibility="bottom"
              size={30}
              className="grid gap-y-4 scroll-smooth h-dvh md:max-h-[55.5rem]"
            >
              <section>
                <Image
                    classNames={{
                      wrapper: "md:h-full relative float-right w-full md:w-[40%] mobile:mb-4 dark:invert-[.9] z-[99]"
                    }}
                    className={"md:min-h-full md:hover:scale-[1.5] origin-top-right transform-gpu"}
                    radius="sm" shadow="none" src="/img/handwrite.jpeg"
                />
                <div className={"flex grid gap-y-4 w-full md:w-[58%]"}>
                  <Box>
                    <h1>
                      JackeyLove
                    </h1>
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
                    <h1> Team History </h1>
                    <Divider className={"my-4"} />
                    <div
                      className={
                        "grid gap-y-[0.97rem] px-3 align-middle tracking-tighter"
                      }
                    >
                      {pageData.career.map((item, index) => {
                        return (
                          <List>
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
            </ScrollShadow>
            <TypedBios/>
          </div>
        </div>
        <div className="gallery">
          <div className="animate-[scy_60s_linear_infinite] transform-gpu w-max grayscale-[50%]">
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
      team: "TOP E-SPORT",
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
};
