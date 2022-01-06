import Head from "next/head";
import Image from "next/image";
import eostar from "../public/eostar.png";
import styles from "../styles/Esperanto.module.css";

const Esperanto = () => {
  return (
    <div>
      <Head>
        <title>Esperanto Page</title>
        <meta name="description" content="Esperanto information" />
      </Head>

      <div className={styles.container}>
        <div className={styles.card}>
          <h1>
            <span> EO:</span> La Esperanto Lingvo
          </h1>
          <p className={styles.blurb}>
            Esperanto is a constructed language created by L.L. Zamenhof. It's
            many times easier to learn than any 'natural' language and acts as a
            bridge of communication between individuals who speak two different
            native tongues.
          </p>
          <p> ESPERANTO CONTENT WILL BE ADDED, SOON.</p>
        </div>
        <div className={styles.card}>
          <Image
            src={eostar}
            alt="eo flag"
            width="75%"
            height="75%"
            layout="fill"
            objectFit="contain"
            alt="eo star"
          />
        </div>
      </div>
    </div>
  );
};

export default Esperanto;
