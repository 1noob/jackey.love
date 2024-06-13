import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface TiktokProps {
  className?: string;
}
const Tiktok: React.FC<TiktokProps> = ({ className }) => {
  const { systemTheme } = useTheme();

  return (
    <div className="bg-card w-full h-full rounded-2xl">
      <iframe
        className={cn("w-full h-full rounded-2xl", className)}
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={
          `https://open.douyin.com/player/video?vid=7332411145384381731&autoplay=0`
        }
        referrerPolicy="unsafe-url"
        width={2160}
        height={3840}
      />
    </div>
  );
};

export default Tiktok;
