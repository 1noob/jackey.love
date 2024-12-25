import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  vid: string;
}
const Douyin: React.FC<Props> = ({ className, vid }) => {
  const { systemTheme } = useTheme();

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
