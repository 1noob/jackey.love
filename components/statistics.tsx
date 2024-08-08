import React from "react";
import { Divider } from "@nextui-org/react";
import useSWR from "swr";
import Box from "./Box";
import List from "./List";

interface Props {
  title: string;
  url: string;
}

const Stat: React.FC<Props> = ({ title, url }) => {
  const fetcher = (arg: string) => fetch(arg).then((res) => res.json());
  const { data } = useSWR(url, fetcher);

  if (data != undefined) {
    return (
      <Box>
        <h1 className="ws">Stat / {title}</h1>
        <Divider className={"my-4 md:h-0.5"} />
        <div className="grid gap-4">
          <div className="flex justify-between gap-2">
            <div className="bg-blue-50 dark:bg-blue-950 place-content-center p-2 rounded-md">
              Wins:{data[0]["wins"]}
            </div>
            <div className="bg-blue-50 dark:bg-blue-950 place-content-center p-2 rounded-md grow text-center">
              KDA:{data[0]["kills"]}/{data[0]["deaths"]}/{data[0]["assists"]}
            </div>
            <div className="bg-blue-50 dark:bg-blue-950 place-content-center p-2 rounded-md">
              Games:{data[0]["total"]}
            </div>
          </div>
          <div className={"grid gap-y-3 px-3 whitespace-nowrap"}>
            <div className="grid grid-cols-6 text-xs">
              <p className="col-span-2">Champion</p>
              <p className="col-span-2">KDA</p>
              <p>Games</p>
              <p>WinRate</p>
            </div>
            {data[1].slice(0, 12).map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-6 text-gray-600 dark:text-gray-300 text-[10px] md:text-xs"
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
        </div>
        <span className="pt-3 text-[10px] md:font-light text-gray-400 md:text-gray-600 md:dark:text-gray-400 text-right">
          {title === "LPL"
            ? 'Exclude "Regional Finals" and "Demacia Cup"'
            : 'Include "World Finals", "MSI", "RR" and "EWC"'}
        </span>
      </Box>
    );
  }
};

export default Stat;
