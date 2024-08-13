import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
const Bilibili: React.FC<Props> = ({ className }) => {
  return (
    <iframe
      className={cn("w-full grayscale-[30%] rounded-[12px]", className)}
      src="https://www.bilibili.com/blackboard/live/live-activity-player.html?cid=7734200&quality=1"
      allow="autoplay; encrypted-media"
      allowFullScreen={true}
    />
  );
};

export default Bilibili;
