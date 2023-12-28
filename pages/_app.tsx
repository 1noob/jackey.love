import type { AppProps } from 'next/app'
import '../styles/index.css'
import Head from "next/head";
import {NextUIProvider} from "@nextui-org/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
      <>
          <NextUIProvider>
              <Head>
                <title>JackeyLove</title>
              </Head>
            <Component {...pageProps} />
          </NextUIProvider>
      </>
  )
}
