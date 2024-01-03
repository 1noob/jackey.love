import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body className="bg-page">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
