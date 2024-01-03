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
        </Head>
        <NextThemesProvider attribute="class" defaultTheme="system">
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}
