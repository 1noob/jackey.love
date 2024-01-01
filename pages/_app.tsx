import type { AppProps } from "next/app";
import "../styles/index.css";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <Head>
          <title>JackeyLove</title>
          <meta name="description" content="League of Legends esports player" />

          <meta property="og:url" content="https://www.jackey.love" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="JackeyLove" />
          <meta
            property="og:description"
            content="League of Legends esports player"
          />
          <meta
            property="og:image"
            content="https://jackey.love/opengraph-image.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="jackey.love" />
          <meta property="twitter:url" content="https://www.jackey.love" />
          <meta name="twitter:title" content="JackeyLove" />
          <meta
            name="twitter:description"
            content="League of Legends esports player"
          />
          <meta
            name="twitter:image"
            content="https://jackey.love/opengraph-image.png"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
          />
          <title>JackeyLove</title>
        </Head>
        <NextThemesProvider attribute="class" defaultTheme="system">
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}
