import { JetBrains_Mono, Ma_Shan_Zheng, Noto_Sans_SC } from "next/font/google";
import localFont from "next/font/local";

const ChillReunion = localFont({ src: [{ path: '../public/fonts/ChillReunion_Round.woff2' }], variable: '--font-chill' })
const Smiley = localFont({ src: [{ path: '../public/fonts/SmileySans-Oblique.otf.woff2' }], variable: '--font-smiley' })
const Pixel = localFont({ src: [{ path: '../public/fonts/Uranus_Pixel_11Px.woff2' }], variable: '--font-pixel' })


const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const handWrite = Ma_Shan_Zheng({
  weight: "400",
  variable: "--font-handwrite",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['cyrillic'],
  variable: '--font-zh',
  display: 'swap'
})


export { jetbrainsMono, handWrite, ChillReunion, Smiley, notoSansSC, Pixel };
