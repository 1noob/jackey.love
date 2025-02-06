import React from "react";
import Box from "./Box";
import List from "./List";
import { Divider } from "@nextui-org/react";
import { CNIcon } from "./icon";

const Intro = () => {
  return (
    <div className={"grid gap-y-2 w-full text-nowrap"}>
      <Box>
        <h1>JackeyLove</h1>
        <Divider className={"my-4 md:h-0.5"} />
        <div
          className={
            "grid px-2 divide-y-1 md:divide-y-2 divide-gray-300 dark:divide-gray-800 divide-dashed md:divide-dotted"
          }
        >
          {data.info.map((item, index) => {
            return (
              <List key={index}>
                <p className="py-2 md:py-1.5">{item.one}</p>
                <p className="py-2 md:py-1.5">{item.two}</p>
              </List>
            );
          })}
        </div>
      </Box>
      <Box>
        <h1> Career </h1>
        <Divider className={"my-4 md:h-0.5"} />
        <div
          className={
            "grid px-2 divide-y-1 md:divide-y-2 divide-gray-300 dark:divide-gray-800 divide-dashed md:divide-dotted"
          }
        >
          {data.career.map((item, index) => {
            return (
              <List key={index}>
                <p className="py-2 md:py-1.5">{item.team}</p>
                <p className="py-2 md:py-1.5">{item.time}</p>
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
      two: <span className="flex gap-1"><CNIcon />China</span>,
    },
    {
      one: "Birthday",
      two: "Nov,18,2000",
    },
  ],
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
      team: "TOP ESPORTS",
    },
  ],
};

export default Intro;
