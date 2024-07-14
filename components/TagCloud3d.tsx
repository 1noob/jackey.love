import React from "react";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { useWindowSize } from "rooks";
import { cn } from "@/lib/utils";
// same as: import TagCloud from "@frank-mayer/react-tag-cloud"

interface Props {
  className?: string;
}

const TagCloud3d: React.FC<Props> = ({ className }) => {
  const { innerWidth, innerHeight } = useWindowSize();
  return (
    <TagCloud
      options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: Math.min(320, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "fast",
      })}
      className={cn(
        "w-full h-full rounded-[12px] grid place-content-center bg-card border-dashed border border-gray-400 dark:border-transparent md:border-transparent",
        className
      )}
    >
      {[
        "伟大性格",
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
        "抗塔",
        "坚毅眼神",
      ]}
    </TagCloud>
  );
};

export default TagCloud3d;
