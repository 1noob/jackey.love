import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useWindowSize } from "rooks";

interface Props {
  className?: string;
}

const TagCloud3d: React.FC<Props> = ({ className }) => {
  return (
    <TagCloud
      options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: Math.min(320, w.innerWidth, w.innerHeight) / 2,
        initSpeed: "normal",
        maxSpeed: "fast",
        keep: false,
      })}
      onClickOptions={{ passive: true }}
      className={cn(
        "w-full h-full rounded-[12px] grid place-content-center bg-box pointer-events-none",
        className
      )}
    >
      {[
        "伟大",
        "无需多言",
        "闪现向前",
        "天选唯一",
        "白开水",
        "伤害大王",
        "无效输出",
        "糙哥",
        "哥哥",
        "百分百参团",
        "好好调整",
        "无需多言",
        "AD开团",
        "接Q辣舞",
        "JKL指挥的",
        "每天抗塔",
        "坚毅眼神",
        "明年寄了",
        "那就开摆",
        "越战老兵",
      ]}
    </TagCloud>
  );
};

export default TagCloud3d;
