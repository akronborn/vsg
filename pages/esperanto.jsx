import Head from "next/head";
import Image from "next/image";
import eostar from "../public/eostar.png";
import styles from "../styles/Esperanto.module.css";
import Link from "next/link";

const Esperanto = () => {
  const links = [
    <Link href="http://lernu.net">Lernu.net</Link>,
    <Link href="https://www.duolingo.com">Duolingo</Link>,
    <Link href="https://www.reddit.com/r/Esperanto/">Esperanto Reddit</Link>,
    <Link href="https://www.youtube.com/watch?v=UU0TCz9DwXs">Evildea</Link>,
  ];

  return (
    <div>
      <Head>
        <title>Esperanto Page</title>
        <meta name="description" content="Esperanto information" />
      </Head>

      <div className={styles.container}>
        <div className={styles.card}>
          <h1>
            <span>
              {" "}
              EO: La Internacia Lingvo <br />
              (The International Language)
            </span>
          </h1>
          <p className={styles.blurb}>
            Esperanto is a constructed language created by L.L. Zamenhof. It's
            many times easier to learn than any 'natural' language and acts as a
            bridge of communication between individuals who speak two different
            native tongues.
            <h2>Links to free learning materials and resources: </h2>
          </p>
          <ul>
            {links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>{" "}
        <p className={styles.blurb}>
          More Esperanto content and links to be added, soon.
        </p>
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
  );
};

export default Esperanto;
