import React from "react";
import Box from "./Box";
import List from "./List";
import Divider from "./divider";
import { CNIcon } from "./icon";
import { useWindowSize } from "rooks";

const Intro = () => {
  const { innerWidth } = useWindowSize();
  return (
    <div className={"grid gap-y-2 w-full text-nowrap"}>
      <Box>
        <h1>JackeyLove</h1>
        <Divider />
        <div
          className={
            "grid px-2 divide-y divide-gray-500/50 dark:divide-gray-600/50 divide-dashed"
          }
        >
          {data.info.map((item, index) => {
            return (
              <List key={index}>
                <p className="py-2">{item.one}</p>
                <p className="py-2">{item.two}</p>
              </List>
            );
          })}
        </div>
      </Box>
      <Box>
        <h1> Career </h1>
        <Divider />
        <div
          className={
            "grid px-2 divide-y divide-gray-500/50 dark:divide-gray-600/50 divide-dashed"
          }
        >
          {data.career.map((item, index) => {
            return (
              <List key={index}>
                <p className="py-2">{item.team}</p>
                <p className="py-2">{item.time}</p>
              </List>
            );
          })}
        </div>
      </Box>
    </div>
  );
};

const data = {
  info: [
    {
      one: "Team",
      two: "TOP ESPORTS",
    },
    {
      one: "Role",
      two: "Bot Laner",
    },
    {
      one: "Country",
      two: (
        <span className="flex gap-2">
          <CNIcon className="w-[21px] md:w-[25px]" />
          China
        </span>
      ),
    },
    {
      one: "Birthday",
      two: "Nov, 18, 2000",
    },
  ],
  career: [
    {
      time: "Jun, 2016 - Apr, 2017",
      team: "Invictus Gaming",
    },
    {
      time: "Apr, 2017 - May, 2017",
      team: "Young Glory",
    },
    {
      time: "May, 2017 - Nov, 2019",
      team: "Invictus Gaming",
    },
    {
      time: "Apr, 2020 - Present",
      team: "TOP ESPORTS",
    },
  ],
};

export default Intro;
