import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="伟大，无需多言。" />

          <meta property="og:url" content="https://www.jackey.love" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="JackeyLove" />
          <meta
            property="og:description"
            content="伟大，无需多言。"
          />
          <meta
            property="og:image"
            content="https://jackey.love/opengraph-image.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="jackey.love" />
          <meta property="twitter:url" content="https://jackey.love" />
          <meta name="twitter:title" content="JackeyLove" />
          <meta
            name="twitter:description"
            content="伟大，无需多言。"
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
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          {/*
            Safari tints its own toolbar / status bar from this. It is set to the
            wall's backing colour (`dot-background` is rgb(20,20,20)) rather than
            the page colour, so on a phone the browser chrome visually continues
            the photo wall instead of banding against it. The same value in both
            schemes on purpose - the wall is dark either way.

            Note Safari's toolbar area cannot be covered by page content. Only an
            installed PWA (apple-mobile-web-app-capable, set above) goes full
            bleed into it.
          */}
          <meta name="theme-color" content="#000000" />
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
