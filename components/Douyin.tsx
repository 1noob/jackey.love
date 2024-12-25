import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  vid: string;
}
const Douyin: React.FC<Props> = ({ className, vid }) => {
  // https://open.douyin.com/api/douyin/v1/video/get_iframe_by_video?video_id={vid}

  return (
    <div className={cn("h-full w-full place-content-center rounded-[12px] bg-transparent", className)}>
      <iframe
        className={"h-[720px] w-[324px] md:w-full md:h-[458px] m-auto rounded-[12px]"}
        src={`https://open.douyin.com/player/video?vid=${vid}&autoplay=0`}
      />
    </div>
  );
};

export default Douyin;
