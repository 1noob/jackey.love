import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Tweet } from "./embed-tweet";

interface TweetProps {
  className?: string;
}

const X: React.FC<TweetProps> = ({ className }) => {
  const { systemTheme } = useTheme();
  const id = "1788487122485166261";

  return (
    <div data-theme={systemTheme} className={cn("w-full h-full", className)}>
      {Tweet({ id: id })}
    </div>
  );
};

export default X;
