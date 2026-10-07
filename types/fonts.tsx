import localFont from "next/font/local";

const ChillReunion = localFont({ src: [{ path: '../public/fonts/ChillReunion_Round.woff2' }], variable: '--font-chill' })
const Smiley = localFont({ src: [{ path: '../public/fonts/SmileySans-Oblique.otf.woff2' }], variable: '--font-smiley' })
const Pixel = localFont({ src: [{ path: '../public/fonts/Uranus_Pixel_11Px.woff2' }], variable: '--font-pixel' })


// Formerly `next/font/google` fonts. They are self-hosted now so that
// `next build` never reaches out to fonts.googleapis.com / fonts.gstatic.com.
// Each file below is byte-identical to the one next/font used to download.

// JetBrains Mono - variable, wght 100..800, latin subset
const jetbrainsMono = localFont({
  src: [{ path: '../public/fonts/JetBrainsMono-Variable-latin.woff2', weight: '100 800', style: 'normal' }],
  variable: '--font-jetbrains',
  display: 'swap',
})

// Ma Shan Zheng - 400, latin subset
const handWrite = localFont({
  src: [{ path: '../public/fonts/MaShanZheng-Regular-latin.woff2', weight: '400', style: 'normal' }],
  variable: '--font-handwrite',
  display: 'swap',
})

// Noto Sans SC - variable, wght 100..900, cyrillic subset
const notoSansSC = localFont({
  src: [{ path: '../public/fonts/NotoSansSC-Variable-cyrillic.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-zh',
  display: 'swap',
})


export { jetbrainsMono, handWrite, ChillReunion, Smiley, notoSansSC, Pixel };
