import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Weibo: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("h-full w-full rounded-[12px] bg-box", className)}>
      <iframe
        className="w-full h-[450px] rounded-[12px]"
        src={
          "https://widget.weibo.com/weiboshow/index.php?fansRow=2&ptype=1&speed=0&skin=2&isTitle=1&noborder=1&isWeibo=1&isFans=0&uid=6215956289&verifier=d4321f74"
        }
      />
    </div>
  );
};

export default Weibo;
