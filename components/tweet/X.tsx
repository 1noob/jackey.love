import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Tweet } from "./embed-tweet";

interface TweetProps {
  id: string;
  /**
   * Where the tweet JSON is read from. It defaults to a vendored copy under
   * /public - `public/tweet/<id>.json`, saved verbatim from the react-tweet
   * API - so the card never calls react-tweet.vercel.app at runtime. Pass an
   * explicit URL to read somewhere else.
   */
  apiUrl?: string;
  className?: string;
}

const X: React.FC<TweetProps> = ({
  className,
  id,
  apiUrl = `/tweet/${id}.json`,
}) => {
  const { systemTheme } = useTheme();
  return (
    <div data-theme={systemTheme} className={cn("w-full h-full rounded-[12px] bg-transparent", className)}>
      {Tweet({ id, apiUrl })}
    </div>
  );
};

export default X;
