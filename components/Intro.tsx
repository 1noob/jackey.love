import React from "react";
import Box from "./Box";
import List from "./List";
import { Divider } from "@nextui-org/react";

const Intro = () => {
  return (
    <div className={"grid gap-y-2 w-full"}>
      <Box>
        <h1>JackeyLove</h1>
        <Divider className={"my-4 md:h-0.5"} />
        <div className={"grid px-3 gap-y-3"}>
          <List>
            <p>Team</p>
            <p>TOP ESPORTS</p>
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
        <Divider className={"my-4 md:h-0.5"} />
        <div
          className={"grid gap-y-3 px-3"}
        >
          {data.career.map((item, index) => {
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
  );
};

const data = {
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
