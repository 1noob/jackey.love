import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AppleMusicProps {
  className?: string;
  id: string;
}

// jackeylove-live/pl.u-gxbll0JC5vEGkPj
const AppleMusic: React.FC<AppleMusicProps> = ({ className, id }) => {
  const [mounted, setMounted] = useState(false);

  /*
   * Apple's player is by far the heaviest thing on the page - on its own it is
   * 246 requests and 1.68 MB - and while that iframe sits in the DOM the
   * window `load` event does not fire until it has finished loading. Same page
   * at 4x CPU throttle: load at 30.22s with this iframe present, 1.48s with it
   * blocked. It was loading straight away too, even though the carousel parks
   * this card off-screen (left=771 against a 390px viewport), so all of that
   * competed with the page's own first paint for nothing.
   *
   * So mount it only after everything else has finished. The carousel does not
   * bring this card into view for another ~20s, which leaves the player plenty
   * of slack to load and be ready by the time anyone swipes to it. Until then
   * the card shows the same bg-box placeholder it always showed while loading.
   */
  useEffect(() => {
    if (document.readyState === "complete") {
      setMounted(true);
      return;
    }
    const onLoad = () => setMounted(true);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className={cn("h-full w-full rounded-[12px] bg-box", className)}>
      {mounted && (
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
      )}
    </div>
  );
};

export default AppleMusic;
