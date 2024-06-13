import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface AppleMusicProps {
  className?: string;
}
const AppleMusic: React.FC<AppleMusicProps> = ({ className }) => {
  const { systemTheme } = useTheme();

  return (
    <div className="h-full bg-card w-full light:border rounded-2xl">
      <iframe
        className={cn("w-full h-[450px] rounded-2xl", className)}
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={
          `https://embed.music.apple.com/cn/playlist/jackeylove-live/pl.u-gxbll0JC5vEGkPj?theme=` +
          systemTheme
        }
      />
    </div>
  );
};

export default AppleMusic;
