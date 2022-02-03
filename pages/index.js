import Head from "next/head";
import Image from "next/image";
import FirstLook from "../components/FirstLook";
import SimpleSlider from "../components/SimpleSlider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Verda Stelo Gaming Home Page</title>
        <meta
          name="description"
          content=" VSG is a gathering place for Esperanto speaking (and learning) gamers"
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
      <SimpleSlider />
      <FirstLook />
    </div>
  );
}
