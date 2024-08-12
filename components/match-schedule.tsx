import React from "react";
import { Divider, Image } from "@nextui-org/react";
import Box from "./Box";
import {
  EDG,
  FPX,
  JDG,
  LGD,
  LNG,
  LPL,
  NIP,
  OMG,
  RA,
  RNG,
  TES,
  TT,
  WBG,
  WE,
  UP,
  BLG,
  IG,
  AL,
} from "@/public/img/team/team-icon";
import Link from "next/link";

interface Props {
  data: any;
}

const MatchSchedule: React.FC<Props> = ({ data }) => {
  const Icon = {
    "Royal Never Give Up": <RNG size={40} className="w-full py-1.5" />,
    "FunPlus Phoenix": <FPX size={40} className="w-full py-2" />,
    "Top Esports": <TES size={40} className="w-full py-0.5" />,
    "JD Gaming": <JDG size={40} className="w-full py-1" />,
    TBD: <LPL size={40} className="w-full py-1" />,
    "EDward Gaming": <EDG size={40} className="w-full" />,
    "LNG Gaming": <LNG size={40} className="w-full" />,
    "Weibo Gaming": <WBG size={40} className="w-full" />,
    "Team WE": <WE size={40} className="w-full" />,
    "Ninjas in Pyjamas.CN": <NIP size={40} className="w-full py-0.5" />,
    "Rare Atom": <RA size={40} className="w-full" />,
    "ThunderTalk Gaming": <TT size={40} className="w-full" />,
    "LGD Gaming": <LGD size={40} className="w-full" />,
    "Oh My God": <OMG size={40} className="w-full" />,
    "Ultra Prime": <UP size={40} className="w-full" />,
    "Bilibili Gaming": <BLG size={40} className="w-full py-2" />,
    "Invictus Gaming": <IG size={40} className="w-full" />,
    "Anyone's Legend": <AL size={40} className="w-full py-1" />,
  };

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
                className="text-center grid gap-3 bg-blue-50 dark:bg-gray-900 rounded-md p-2 text-nowrap"
              >
                <span>{item["StandardName"]}</span>
                <div className="grid grid-cols-3">
                  <div className="grid grid-cols-1 justify-center w-full gap-1.5">
                    {Icon[item["Team1"]]}
                    <span className="uppercase text-xs">{item["Team1"]}</span>
                  </div>
                  <div className="place-content-center grid grid-cols-1 gap-1">
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
                  <div className="grid grid-cols-1 justify-center w-full gap-1.5">
                    {Icon[item["Team2"]]}
                    <span className="uppercase text-xs">{item["Team2"]}</span>
                  </div>
                </div>
                <div className="px-2 grid grid-cols-3 text-xs md:text-[12px] text-gray-500 md:text-gray-600 md:dark:text-gray-400 gap-y-2">
                  <span className="text-start">{item["DateTime CST"].slice(5,)}</span>
                  <span className="text-center">{item["Day of Week"]}</span>
                  <Link className="text-end" href={item["Stream"]}>{item["Stream"].slice(12,)}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </Box>
    );
  }
};

export default MatchSchedule;
