import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Teste GCB" />
          <meta property="og:title" content="Marcos" />
          <meta property="og:description" content="Healthy Food - GCB Front-end Test" />
          <meta property="og:url" content="https://healthy-food-marcos.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://healthy-food-marcos.vercel.app/ogimage.svg" />
          <meta prefix="og: http://ogp.me/ns#" property="og:title" content="healthy" />
          <meta prefix="og: http://ogp.me/ns#" property="og:type" content="Food" />
          <meta prefix="og: http://ogp.me/ns#" property="og:image" content="https://healthy-food-marcos.vercel.app/ogimage.svg" />
          <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://healthy-food-marcos.vercel.app/" />
          <meta name="linkedin:url" content="https://www.linkedin.com/in/marcos-eduardo-7027b6160/" />
          <meta name="author" content="Marcos Eduardo" />
          <meta name="title" content="Marcos Eduardo" />
          <meta name="keywords" content="Marcos, marcos, Marcos Eduardo" />

          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&amp;display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
