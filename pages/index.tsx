import type { NextPage } from 'next'
import cloudinary from '../utils/cloudinary'
import type { ImageProps } from '../utils/types'
import {Badge, Image} from "@nextui-org/react";
import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import {Button} from "@nextui-org/react";
import React from "react";
import clsx from 'clsx';
import {JetBrains_Mono} from "next/font/google";
import {ScrollShadow} from "@nextui-org/react";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const Home: NextPage = ({ images }: { images: ImageProps[]}) => {

  const [viewAllRecs, setViewAllRecs] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const slice_len = 1;

  return (
    <>
      <main className={`justify-center ${jetbrainsMono.variable} font-mono`}>
        <div className="absolute w-full z-10 h-dvh place-content-center grid">
          <div className={'backdrop-blur-2xl rounded-none lg:rounded-lg content'}>
            <ScrollShadow hideScrollBar size={0} className="w-full grid gap-12 scroll-smooth md:max-h-[928px] mobile:h-dvh">
              <section>
                <div className="relative float-right w-full md:w-3/5 mb-8 inline-flex rounded-lg overflow-hidden">
                  <Image
                      radius={"none"}
                      src="/img/handwrite.jpeg"
                      width={2080}
                      height={2880}
                  />
                </div>
                <div className="lg:tracking-widest">
                  <div> JackeyLove - 喻文波 </div><br/>
                  <div> 2000/11/18，ADC，TES</div><br/>
                  <div>
                    <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-0 gap-y-2 md:gap-y-4">
                      {pageData.awards.map((item, index) => (
                          <li key={index}>
                            &bull;{" "}{item}
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-y-9">
                <AnimatePresence initial={false}>
                  {pageData.recommendations
                      .slice(0, viewAllRecs ? pageData.recommendations.length : slice_len)
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
                                <div style={{ textIndent: '-.65rem' }}>“{item.text}”</div>
                                <div
                                    className={clsx(
                                        'mt-4',
                                    )}
                                >
                                  &mdash; {item.name}, {item.title}, {item.company}
                                </div>
                              </div>
                            </motion.div>
                        );
                      })}
                </AnimatePresence>
                {!viewAllRecs && (
                    <div className={"mx-auto text-white"}>
                      <Badge
                          content={pageData.recommendations.length-slice_len}
                          color="danger"
                          variant="solid"
                          showOutline={false}
                      >
                        <Button radius="full"
                                className="bg-black/20 dark:bg-white/20 shadow-lg"
                                onClick={() => setViewAllRecs(true)} size="sm">
                          More
                        </Button>
                      </Badge>
                    </div>
                )}
              </section>
            </ScrollShadow>
          </div>
        </div>
        <div className="mobile:hidden my-auto overflow-hidden max-w-full z-0 h-dvh">
          <div className="animate-[scy_120s_linear_infinite] w-max grayscale-[33%]">
            <div className="float-left grid grid-rows-8 grid-flow-col">
              { images.map(({ public_id, format }) => (
                  <Image
                      radius="none"
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto,q_50/${public_id}.${format}`}
                      width={200}
                  />
              ))}
            </div>
            <div className="grid grid-rows-8 grid-flow-col">
              { images.map(({ public_id, format }) => (
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
  )
}

export default Home

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(480)
    .execute()
  let reducedResults: ImageProps[] = []

  for (let result of results.resources) {
    reducedResults.push({
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
  }

  for (let i = reducedResults.length; i < 120; i++) {
    let tmp = reducedResults.at(Math.random()*1118%i)
    reducedResults.push(tmp)
  }

  return {
    props: {
      images: reducedResults,
    },
  }
}

const pageData = {
  "awards": [
    "2016NEST全国冠军",
    "2017NEST全国冠军",
    "2018亚洲对抗赛冠军",
    "2018全球总决赛冠军",
    "2018德玛西亚杯冠军",
    "2018LPL年度最佳新秀",
    "2019LPL春季赛冠军",
    "2020MSC季中杯冠军",
    "2020LPL夏季赛冠军",
    "2020LPL年度最佳ADC",
    "2020德玛西亚杯冠军",
    "2021德玛西亚杯冠军"
  ],
  "recommendations": [
    {
      "text": "我总是告诉我们的队员，我们的队伍有 JackeyLove 是件好事，因为他有很棒的性格和天赋，他是一个非常成熟的人，总是乐于接受反馈。JackeyLove 是一名令我有很高期待的选手。",
      "name": "Kim",
      "title": "Coach",
      "company": "IG",
      "thumbnail": "/img/kim.jpeg"
    },
    {
      "text": "Nobody wants to be flashing forward to make the mistake in the Game five, but Jackey says I will flashing forward. I will be the hero.",
      "name": "CaptainFlowers",
      "title": "Comment",
      "company": "LEC",
      "thumbnail": "/img/captainflowers.jpeg"
    },
    {
      "text": "我对他最突出的印象是冷静，而且判断也颇为准确。尽管有些时候他会有些奇怪的被击杀，但是他的操作和对线都很棒。另外就是他本身似乎眉宇之间透着一股和年龄不符的英气，身高不算高的他却给人一种器宇轩昂的感觉，我觉得他是一名很有魅力的选手。据我暗中观察，他在选手中似乎也挺有威望哟。",
      "name": "MintyBlue藏马",
      "title": "Ceo",
      "company": "IG",
      "thumbnail": "/img/mintyblue.jpeg"
    },
    {
      "text": "我个人觉得我自己的风格这个赛季会变得很多，因为我们来了个新选手 JackeyLove。他是一个打法很凶的 ADC，我就没必要一直在对线的情况下打出优势了，我也可以慢慢发育，我也觉得自己的打团能力也不是很差的，所以打到后期也有 JackeyLove，就觉得线上不要很急，就慢慢打。",
      "name": "Rookie",
      "title": "Mid",
      "company": "IG",
      "thumbnail": "/img/rookie.jpeg"
    }
  ],
}

