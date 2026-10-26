import type { AppProps } from "next/app";
import "@/styles/index.css";
import Head from "next/head";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JackeyLove</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <HeroUIProvider>
        {/*
          Locked to dark on purpose. The whole design is black-and-white - the
          wall is grayscale, the chrome is pure black - so following the system
          meant a light-mode visitor saw white cards and a white browser bar
          against a dark backdrop, which is not the intended look.
        */}
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <Component {...pageProps} />
        </NextThemesProvider>
      </HeroUIProvider>
    </>
  );
}
