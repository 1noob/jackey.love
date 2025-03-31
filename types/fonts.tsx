import { JetBrains_Mono, Ma_Shan_Zheng } from "next/font/google";
import localFont from "next/font/local";

const ChillReunion = localFont({ src: './ChillReunion_Round.woff2', variable:'--font-chill' })

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const handWrite = Ma_Shan_Zheng({
  weight: "400",
  variable: "--font-handwrite",
  subsets: ["latin"],
});

const SmileySans = localFont({
  src: [
    {
      path: "../public/fonts/smiley/SmileySans-Oblique.otf.woff2",
    },
    {
      path: "../public/fonts/smiley/SmileySans-Oblique.ttf.woff2",
    },
  ],
  variable: "--font-smiley",
});

const PixelMono = localFont({
  src: [
    {
      path: "../public/fonts/pixel/fusion-pixel-12px-monospaced-latin.woff2",
    },
    {
      path: "../public/fonts/pixel/fusion-pixel-12px-monospaced-zh_hans.woff2",
    },
  ],
  variable: "--font-pixel",
});


export { SmileySans, PixelMono, jetbrainsMono, handWrite, ChillReunion };
