import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="https://ih1.redbubble.net/image.1394795339.1413/pp,840x830-pad,1000x1000,f8f8f8.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Bu bot Moderasyon için tam uyumlu bir bottur kullanmazsan pişman olursun bebek😎."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Cookie" />
          <meta name="twitter:creator" content="@Cookie" />
          <meta property="og:url" content="https://cbt-cookie-com.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Cookie" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="How about listening to music without pausing? Create your own playlists with 750+ supported sound platforms and start listening."
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="Cookie" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Kurabiye lazımmı?"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
