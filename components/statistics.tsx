import React from "react";
import { Divider } from "@nextui-org/react";
import Box from "./Box";

interface Props {
  title: string;
  data: any;
}

const Stat: React.FC<Props> = ({ title, data }) => {
  return (
    <Box>
      <h1>Stats[{title}]</h1>
      <Divider className={"my-4 md:h-0.5"} />
      <div className="grid gap-2 w-full">
        <div className="flex justify-between gap-2">
          <div className="bg-blue-50 dark:bg-blue-900 place-content-center p-2 rounded-md">
            Wins:{data[0]["wins"]}
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 place-content-center p-2 rounded-md grow text-center">
            K/D/A:[{data[0]["kills"]}/{data[0]["deaths"]}/{data[0]["assists"]}]
          </div>
          <div className="bg-blue-50 dark:bg-blue-900 place-content-center p-2 rounded-md">
            Games:{data[0]["total"]}
          </div>
        </div>
        <div
          className={
            "grid gap-2 whitespace-nowrap bg-blue-50 dark:bg-gray-900 rounded-md p-2"
          }
        >
          <div className="grid grid-cols-6 text-xs">
            <p className="col-span-2">Champion</p>
            <p className="col-span-2">K/D/A</p>
            <p>Games</p>
            <p>WinRate</p>
          </div>
          <Divider className="mt-1"/>
          <div className="grid divide-y-2 divide-gray-300 dark:divide-gray-800 divide-dotted">
            {data[1].slice(0, 10).map((item, index) => {
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
          <Divider className="mt-2.5"/>
          <span className="text-[10px]/4 leading-4 text-gray-500 md:text-gray-600 md:dark:text-gray-400 text-center">
            {title === "LPL"
              ? 'Exclude "Regional Finals" and "Demacia Cup"'
              : 'Include "World Finals", "MSI", "RR" and "EWC"'}
          </span>
        </div>
      </div>
    </Box>
  );
};

export default Stat;
