import React from "react";
import Divider from "@/components/divider";
import Box from "./Box";

interface Props {
  title: string;
  data: any;
}

const Stat: React.FC<Props> = ({ title, data }) => {
  const tips = {
    LPL: '*Exclude "Regional Finals" and "Demacia Cup"',
    Worlds: '*Include "World Finals", "MSI", "RR" and "EWC"',
    All: '"All For JackeyLove"',
  };
  return (
    <Box>
      <div className="flex justify-between">
        <h1>Stats</h1>
        <h1>"{title}"</h1>
      </div>
      <Divider />
      {data && (<div className="grid gap-2 w-full text-nowrap">
        <div className="flex justify-between gap-2 text-[10px]/4 sm:text-[12px]/4 md:text-[12px]/5">
          <div className="bg-blue-50/50 dark:bg-gray-900/50 place-content-center p-1.5 rounded-md text-center">
            胜场 [{data[0]["wins"]}]
          </div>
          <div className="bg-blue-50/50 dark:bg-gray-900/50 place-content-center p-1.5 rounded-md grow text-center">
            <span>KDA</span> [{data[0]["kills"]}/
            {data[0]["deaths"]}/{data[0]["assists"]}]
          </div>
          <div className="bg-blue-50/50 dark:bg-gray-900/50 place-content-center p-1.5 rounded-md text-center">
            场次 [{data[0]["total"]}]
          </div>
        </div>
        <div
          className={"grid gap-2 bg-blue-50/50 dark:bg-gray-900/50 rounded-md p-2"}
        >
          <div className="grid grid-cols-6 text-xs">
            <p className="col-span-2">英雄</p>
            <p className="col-span-2">KDA</p>
            <p>场次</p>
            <p>胜率</p>
          </div>
          <Divider className="border-dashed m-0"/>
          <div className="grid divide-y divide-gray-400/50 dark:divide-gray-800/50 divide-dotted">
            {data[1].slice(0, 11).map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-6 text-gray-600 dark:text-gray-300 text-xs py-1.5"
                >
                  <p className="col-span-2">{item["name"]}</p>
                  <p className="col-span-2">
                    {item["kills"]}/{item["deaths"]}/{item["assists"]}
                  </p>
                  <p>{item["games"]}</p>
                  <p>{item["win_rate"]}</p>
                </div>
              );
            })}
          </div>
          <Divider className="border-dashed m-0" />
          <span className="text-[10px]/4 text-gray-500 md:text-gray-600 md:dark:text-gray-400 text-center">
            {tips[title]}
          </span>
        </div>
      </div>)}
    </Box>
  );
};

export default Stat;
