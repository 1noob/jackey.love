import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Badge, Button, Image } from "@nextui-org/react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Evaluation: React.FC<Props> = ({ className }) => {
  const slice_len = 2;
  const [viewAllRecs, setViewAllRecs] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("flex flex-col gap-y-8 px-2", className)}>
      <AnimatePresence initial={false}>
        {data
          .slice(0, viewAllRecs ? data.length : slice_len)
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
                <div className="flex-2">
                  <div className={"indent-[-13px] md:indent-[-14px]"}>
                    “{item.text}”
                  </div>
                  <div className={"mt-4 indent-[0.2rem]"}>
                    &mdash; {item.name}.&emsp;{item.title},{item.company}.&emsp;{item.time}
                  </div>
                </div>
              </motion.div>
            );
          })}
      </AnimatePresence>
      {!viewAllRecs && (
        <div className={"mb-2 mx-auto text-white"}>
          <Badge
            content={data.length - slice_len}
            color="danger"
            variant="solid"
            showOutline={false}
          >
            <Button
              radius="full"
              className="bg-black/10 dark:bg-white/10 shadow-md"
              onClick={() => setViewAllRecs(true)}
              size="sm"
            >
              <svg
                width="18"
                height="18"
                fontWeight="bolder"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Badge>
        </div>
      )}
      {viewAllRecs && (
        <div className={"mb-2 mx-auto text-white"}>
          <Button
            radius="full"
            className="bg-black/10 dark:bg-white/10 shadow-md"
            onClick={() => setViewAllRecs(false)}
            size="sm"
          >
            <svg
              width="18"
              height="18"
              fontWeight="bolder"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      )}
    </div>
  );
};

const data = [
  {
    text: "Nobody wants to be flashing forward to make the mistake in the Game five, but Jackey says I will flashing forward. I will be the hero.",
    name: "CaptainFlowers",
    title: "Comment",
    company: "LEC",
    thumbnail: "/img/captainflowers.jpeg",
    time: "2018",
  },
  {
    text: "我总是告诉我们的队员，我们的队伍有 JackeyLove 是件好事，因为他有很棒的性格和天赋，他是一个非常成熟的人，总是乐于接受反馈。JackeyLove 是一名令我有很高期待的选手。",
    name: "Kim",
    title: "Coach",
    company: "IG",
    thumbnail: "/img/kim.jpeg",
    time: "2019",
  },
  {
    text: "我对他最突出的印象是冷静，而且判断也颇为准确。尽管有些时候他会有些奇怪的被击杀，但是他的操作和对线都很棒。另外就是他本身似乎眉宇之间透着一股和年龄不符的英气，身高不算高的他却给人一种器宇轩昂的感觉，我觉得他是一名很有魅力的选手。据我暗中观察，他在选手中似乎也挺有威望哟。",
    name: "MintyBlue藏马",
    title: "Ceo",
    company: "IG",
    thumbnail: "/img/mintyblue.jpeg",
    time: "2018",
  },
  {
    text: "我个人觉得我自己的风格这个赛季会变得很多，因为我们来了个新选手 JackeyLove。他是一个打法很凶的 ADC，我就没必要一直在对线的情况下打出优势了，我也可以慢慢发育，我也觉得自己的打团能力也不是很差的，所以打到后期也有 JackeyLove，就觉得线上不要很急，就慢慢打。",
    name: "Rookie",
    title: "Mid",
    company: "IG",
    thumbnail: "/img/rookie.jpeg",
    time: "2018",
  },
  {
    text: "Most western fans know Jackeylove as the talented but inconsistent choker. Realistically though, Jackeylove is currently the best ADC in the world.",
    name: "RichsWrach",
    title: "Founder",
    company: "H2K",
    thumbnail: "/img/rich.jpeg",
    time: "2024",
  },
];

export default Evaluation;
