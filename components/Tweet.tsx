import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { XEmbed } from "react-social-media-embed";

interface TweetProps {
  className?: string;
}
const Tweet: React.FC<TweetProps> = ({ className }) => {
  const { systemTheme } = useTheme();

  return (
    <div className="grid w-full rounded-2xl">
      <XEmbed url="https://twitter.com/TESJKL1118/status/1788487122485166261"/>
    </div>
  );
};

export default Tweet;
