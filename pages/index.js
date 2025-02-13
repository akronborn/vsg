import Head from "next/head";
import FirstLook from "../components/FirstLook";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Verdaj Stelaj Gajnoj Home Page</title>
        <meta
          name="description"
          content=" VSG is a gathering place for Esperanto speakers and learners."
        />
        <meta
          name="keywords"
          content="html, css, next.js, javascript, Esperanto, Gaming"
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <FirstLook />
    </div>
  );
}
