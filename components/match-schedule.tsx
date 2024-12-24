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
} from "@/public/img/team/lpl-icon";
import Link from "next/link";
import { DK, Esports, GENG, HLE, T1 } from "@/public/img/team/lck-icon";
import { FNC, G2 } from "@/public/img/team/lec-icon";

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
    "LNG Esports": <LNG size={40} className="w-full" />,
    "Weibo Gaming": <WBG size={40} className="w-full py-0.5" />,
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
    T1: <T1 size={40} className="w-full py-2.5" />,
    "Dplus KIA": <DK size={40} className="w-full py-2" />,
    Fnatic: <FNC size={40} className="w-full py-1.5" />,
    "Gen.G": <GENG size={40} className="w-full py-1.5" />,
    "G2 Esports": <G2 size={40} className="w-full py-0.5" />,
    "Hanwha Life Esports": <HLE size={40} className="w-full py-1.5" />,
    Esports: <Esports size={40} className="w-full py-1.5" />,
  };

  const Team_Name = {
    "Royal Never Give Up": "RNG",
    "FunPlus Phoenix": "FPX",
    "Top Esports": "TES",
    "JD Gaming": "JDG",
    "EDward Gaming": "EDG",
    "LNG Esports": "LNG",
    "Weibo Gaming": "WBG",
    "Team WE": "WE",
    "Ninjas in Pyjamas.CN": "NIP",
    "Rare Atom": "RA",
    "ThunderTalk Gaming": "TT",
    "LGD Gaming": "LGD",
    "Oh My God": "OMG",
    "Ultra Prime": "UP",
    "Bilibili Gaming": "BLG",
    "Invictus Gaming": "IG",
    "Anyone's Legend": "AL",
    T1: "T1",
    "Dplus KIA": "DK",
    Fnatic: "FNC",
    "Gen.G": "GENG",
    "G2 Esports": "G2",
    "Hanwha Life Esports": "HLE",
  };

  return (
    <Box>
      <h1>Schedule</h1>
      <Divider className={"my-4 md:h-0.5"} />
      <div className="grid gap-2">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="text-center grid bg-blue-50 dark:bg-gray-900 rounded-md p-2 text-nowrap gap-2"
            >
              <span>{item["StandardName"]}</span>
              <div className="grid grid-cols-3">
                <div className="grid grid-cols-1 justify-center w-full gap-1.5">
                  {/* {Icon["Esports"]} */}
                  {Icon[item["Team1"]] ? Icon[item["Team1"]] : Icon["Esports"]}
                  <span className="uppercase text-xs">
                    {Team_Name[item["Team1"]]}
                  </span>
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
                  {Icon[item["Team2"]] ? Icon[item["Team2"]] : Icon["Esports"]}
                  <span className="uppercase text-xs">
                    {Team_Name[item["Team2"]]}
                  </span>
                </div>
              </div>
              <Divider />
              <div className="px-4 grid grid-cols-3 text-[10px]/4 text-gray-500 md:text-gray-600 md:dark:text-gray-400">
                <span className="text-start">
                  {item["DateTime CST"].slice(5)}
                </span>
                <span className="text-center">{item["Day of Week"]}</span>
                {item["Stream"] && (
                  <Link className="text-end" href={item["Stream"]}>
                    {item["Stream"].slice(12)}
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default MatchSchedule;
