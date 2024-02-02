import type { AppProps } from "next/app";
import "../styles/index.css";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JackeyLove</title>
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
          />
          <script async src="https://us.umami.is/script.js" data-website-id="61824479-8621-45cf-981c-867d2ac2066d"/>
      </Head>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="system">
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}
