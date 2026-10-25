import { cn } from "@/lib/utils";

interface AppleMusicProps {
  className?: string;
  id: string;
}

// jackeylove-live/pl.u-gxbll0JC5vEGkPj
const AppleMusic: React.FC<AppleMusicProps> = ({ className, id }) => {
  return (
    <div className={cn("h-full w-full rounded-[12px] bg-box", className)}>
      <iframe
        id="embedPlayer"
        className={"w-full h-[450px] rounded-[12px]"}
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={
          // `theme` is hardcoded, not derived from the theme provider.
          //
          // It used to be `systemTheme` from next-themes, but the provider in
          // _app.tsx sets `enableSystem={false}` (the whole site is locked to
          // dark), and with system detection switched off next-themes never
          // resolves `systemTheme` - it stays undefined. The iframe therefore
          // requested `?theme=undefined`, Apple discarded the unknown value and
          // served its LIGHT player: a white rectangle sitting on a site whose
          // every other surface is black.
          //
          // Measured on the embed URL directly, mean luminance of the rendered
          // player: theme=dark 110.1, theme=light 236.0, theme=undefined 236.0.
          // `undefined` is byte-for-byte the light player, which is what the
          // live page was showing.
          //
          // Hardcoding dark matches the locked design and cannot produce
          // `undefined` on the first render (resolvedTheme would, briefly). If
          // the theme lock is ever lifted, this needs to become the resolved
          // theme again - and the light branch will then be reachable.
          `https://embed.music.apple.com/cn/playlist/${id}?theme=dark`
        }
      />
    </div>
  );
};

export default AppleMusic;
