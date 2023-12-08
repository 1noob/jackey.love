import type { AppProps } from 'next/app'
import '../styles/index.css'
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return(
      <>
        <Head>
          <title>JackeyLove</title>
        </Head>
        <Component {...pageProps} />
      </>
  )
}
