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
        <NextThemesProvider attribute="class" defaultTheme="system">
          <Component {...pageProps} />
        </NextThemesProvider>
      </HeroUIProvider>
    </>
  );
}
