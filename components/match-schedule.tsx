import React from "react";
import { Divider, Image } from "@nextui-org/react";
import useSWR from "swr";
import Box from "./Box";
import { EDG, FPX, JDG, LGD, LNG, LPL, NIP, OMG, RA, RNG, TES, TT, WBG, WE, UP, BLG, IG, AL } from "@/public/img/team/team-icon";

interface Props {
  url: string;
}

const MatchSchedule: React.FC<Props> = ({ url }) => {
  const fetcher = (arg: string) => fetch(arg).then((res) => res.json());
  const { data } = useSWR(url, fetcher);

  const Icon = {
    "Royal Never Give Up" : <RNG size={40} className="w-full py-1.5"/>,
    "FunPlus Phoenix" : <FPX size={40} className="w-full py-2"/>,
    "Top Esports" : <TES size={40} className="w-full py-0.5"/>,
    "JD Gaming": <JDG size={40} className="w-full py-1"/>,
    "TBD": <LPL size={40} className="w-full py-1"/>,
    "EDward Gaming": <EDG size={40} className="w-full"/>,
    "LNG Gaming": <LNG size={40} className="w-full"/>,
    "Weibo Gaming": <WBG size={40} className="w-full"/>,
    "Team WE": <WE size={40} className="w-full"/>,
    "Ninjas in Pyjamas.CN": <NIP size={40} className="w-full py-0.5"/>,
    "Rare Atom": <RA size={40} className="w-full"/>,
    "ThunderTalk Gaming": <TT size={40} className="w-full"/>,
    "LGD Gaming": <LGD size={40} className="w-full"/>,
    "Oh My God": <OMG size={40} className="w-full"/>,
    "Ultra Prime": <UP size={40} className="w-full"/>,
    "Bilibili Gaming": <BLG size={40} className="w-full py-2"/>,
    "Invictus Gaming": <IG size={40} className="w-full"/>,
    "Anyone's Legend": <AL size={40} className="w-full py-1"/>,
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
                className="text-center grid gap-2 bg-blue-50 dark:bg-gray-900 rounded-[12px] p-3"
              >
                <span>{item["StandardName"]}</span>
                <div className="grid grid-cols-3">
                  <div className="grid grid-cols-1 justify-center w-full">
                    {Icon[item["Team1"]]}
                    <span className="uppercase">{item["Team1"]}</span>
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
                  <div className="grid grid-cols-1 justify-center w-full">
                    {Icon[item["Team2"]]}
                    <span className="uppercase">{item["Team2"]}</span>
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
