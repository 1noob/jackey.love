import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import React from "react";
import { cn } from "@/lib/utils";
import Box from "./Box";

interface Props {
  className?: string;
}

const TagCloud3d: React.FC<Props> = ({ className }) => {
  return (
    <Box
      className={cn(
        "w-full h-full grid grid-flow-row justify-stretch overflow-hidden",
        className
      )}
    >
      <div className="flex justify-between text-xs">
        <span>我是天选</span>
        <span>也是唯一</span>
      </div>
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(320, w.innerWidth) / 2,
          initSpeed: "normal",
          keep: false,
          maxSpeed: "fast",
        })}
        className={
          "w-full h-full rounded-[12px] grid place-content-center pointer-events-none transform-gpu"
        }
        onClickOptions={{ passive: true }}
      >
        {[
          "大头",
          "杰阔",
          "伟大",
          "装杯",
          "柴犬",
          "小主播",
          "1557",
          "无需多言",
          "闪现向前",
          "天选唯一",
          "白开水",
          "伤害大王",
          "无效输出",
          "水子哥",
          "冰皇",
          "冰冰",
          "糙哥",
          "哥哥",
          "百分百参团",
          "好好调整",
          "无需多言",
          "AD开团",
          "杰克辣舞",
          "JKL指挥的",
          "每天抗塔",
          "坚毅眼神",
          "明年寄了",
          "那就开摆",
          "越战老兵",
          "年少成名",
          "搏至无韩",
        ]}
      </TagCloud>
      <div className="flex justify-between text-xs">
        <span>ONE</span>
        <span>&nbsp;&nbsp;&</span>
        <span>ONLY</span>
      </div>
    </Box>
  );
};

export default TagCloud3d;