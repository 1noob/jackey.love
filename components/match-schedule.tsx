import React from "react";
import { Divider, Image } from "@nextui-org/react";
import useSWR from "swr";
import Box from "./Box";
import { EDG, FPX, JDG, LGD, LNG, LPL, NIP, OMG, RA, RNG, TES, TT, WBG, WE, UP } from "@/public/img/team/team-icon";

interface Props {
  url: string;
}

const MatchSchedule: React.FC<Props> = ({ url }) => {
  const fetcher = (arg: string) => fetch(arg).then((res) => res.json());
  const { data } = useSWR(url, fetcher);

  const Icon = {
    "Royal Never Give Up" : <RNG size={35} className="w-full"/>,
    "FunPlus Phoenix" : <FPX size={35} className="w-full"/>,
    "Top Esports" : <TES size={35} className="w-full"/>,
    "JD Gaming": <JDG size={35} className="w-full"/>,
    "TBD": <LPL size={35} className="w-full"/>,
    "EDward Gaming": <EDG size={35} className="w-full"/>,
    "LNG Gaming": <LNG size={35} className="w-full"/>,
    "Weibo Gaming": <WBG size={35} className="w-full"/>,
    "Team WE": <WE size={35} className="w-full"/>,
    "Ninjas in Pyjamas.CN": <NIP size={35} className="w-full"/>,
    "Rare Atom": <RA size={35} className="w-full"/>,
    "ThunderTalk Gaming": <TT size={35} className="w-full"/>,
    "LGD Gaming": <LGD size={35} className="w-full"/>,
    "Oh My God": <OMG size={35} className="w-full"/>,
    "Ultra Prime": <UP size={35} className="w-full"/>,
  }

  if (data != undefined) {
    return (
      <Box>
        <h1>Schedule</h1>
        <Divider className={"my-4 md:h-0.5"} />
        <div className="grid gap-2">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="text-center grid gap-2 bg-gray-100 dark:bg-gray-900 rounded-[12px] p-3"
              >
                <span>{item["StandardName"]}</span>
                <div className="grid grid-cols-3">
                  <div className="grid grid-cols-1 justify-center w-full gap-1">
                    {Icon[item["Team1"]]}
                    <span className="col-span-2">{item["Team1"]}</span>
                  </div>
                  <div className="place-content-center grid grid-cols-1">
                    <div className="text-4xl">
                      <span>
                        {item["Team1Score"] == null ? 0 : item["Team1Score"]}
                      </span>
                      <span>:</span>
                      <span>
                        {item["Team2Score"] == null ? 0 : item["Team2Score"]}
                      </span>
                    </div>
                    <span>BO{item["BestOf"]}</span>
                  </div>
                  <div className="grid grid-cols-1 justify-center w-full gap-1">
                    {Icon[item["Team2"]]}
                    <span>{item["Team2"]}</span>
                  </div>
                </div>
                <span>{item["DateTime CST"]}</span>
              </div>
            );
          })}
        </div>
      </Box>
    );
  }
};

export default MatchSchedule;
