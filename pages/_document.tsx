import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
        </Head>
        <body className="bg-page">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
