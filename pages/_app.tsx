import type { AppProps } from "next/app";
import "@/styles/index.css";
import Head from "next/head";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  /*
   * TEMPORARY. Diagnostic switches for the Safari fast-scroll lag.
   *
   * The lag only reproduces on Safari, which cannot be driven from here, so the
   * candidate layers have to be switchable on the real device instead of by
   * pasting rules into Web Inspector. Add `?diag=<name>` to the URL - several
   * can be comma-separated - and the matching `html.diag-no-<name>` class turns
   * off one candidate. The rules live at the bottom of styles/index.css.
   *
   * Delete this effect and those rules once the culprit is identified.
   */
  useEffect(() => {
    const diag = new URLSearchParams(window.location.search).get("diag");
    if (!diag) return;
    diag
      .split(",")
      .filter(Boolean)
      .forEach((key) => document.documentElement.classList.add("diag-no-" + key));
  }, []);

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
