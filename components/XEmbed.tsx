import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Tweet } from "react-tweet";

interface TweetProps {
  className?: string;
}

const XEmbed: React.FC<TweetProps> = ({ className }) => {
  const { systemTheme } = useTheme();

  return (
    <div
      data-theme={systemTheme}
      className={cn("w-full h-full border-0", className)}
    >
      <Tweet id="1788487122485166261" />
    </div>
  );
};

export default XEmbed;
