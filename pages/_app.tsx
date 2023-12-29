import type { AppProps } from 'next/app'
import '../styles/index.css'
import Head from "next/head";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
      <>
          <NextUIProvider>
              <Head>
                  <meta property="og:title" content="JackeyLove"/>
                  <meta property="og:site_name" content="JackeyLove"/>
                  <meta property="og:description" content="AD Carry"/>
                  <meta property="og:url" content="https://jackey.love/"/>
                  <meta property="og:image" content="https://jackey.love/opengraph-image.jpg"/>
                  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.jpg"/>
                  <link rel="icon" type="image/x-icon" href="favicon.ico" />
                  <meta name="apple-mobile-web-app-capable" content="yes" />
                  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
                  <title>JackeyLove</title>
              </Head>
              <NextThemesProvider attribute="class" defaultTheme="dark">
                  <Component {...pageProps}/>
              </NextThemesProvider>
          </NextUIProvider>
      </>
  )
}
