import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Tweet } from "./embed-tweet";

interface TweetProps {
  id: string;
  className?: string;
}

const X: React.FC<TweetProps> = ({ className, id }) => {
  const { systemTheme } = useTheme();
  return (
    <div data-theme={systemTheme} className={cn("w-full h-full rounded-[12px] bg-transparent", className)}>
      {Tweet({ id: id })}
    </div>
  );
};

export default X;
