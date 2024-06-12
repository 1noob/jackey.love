import { useTheme } from "next-themes";

const AppleMusic = () => {
  const { systemTheme } = useTheme();

  return (
    <div className="bg-card w-full h-full rounded-2xl shadow-lg">
      <iframe
        className={"w-full h-[450px] rounded-2xl"}
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
