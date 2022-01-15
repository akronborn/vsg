import Head from "next/head";
import Image from "next/image";
import eostar from "../public/eostar.png";
import eobook from "../public/eobook.jpg";
import styles from "../styles/Esperanto.module.css";
import Link from "next/link";

const Esperanto = () => {
  const links = [
    <Link href="http://lernu.net">Lernu.net</Link>,
    <Link href="https://www.duolingo.com">Duolingo</Link>,
    <Link href="https://www.reddit.com/r/Esperanto/">Esperanto Reddit</Link>,
    <Link href="https://www.youtube.com/watch?v=UU0TCz9DwXs">
      Evildea's YT. Fluent EO speaker
    </Link>,
  ];

  return (
    <div>
      <Head>
        <title>Esperanto Page</title>
        <meta name="description" content="Esperanto information" />
      </Head>

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.quote}>
            <p className={styles.text}>
              One Chinese Esperanto speaker described Esperanto as a linguistic
              handshake. When two people shake hands they both reach out
              halfway. When two people speak Esperanto they have both made the
              effort to learn a relatively easy, neutral language instead of one
              person making the huge effort to learn the other person’s
              difficult national language and the other person making no effort
              at all except to correct his/her interlocutor’s errors. ~Sylvan
              Zaft
            </p>
          </div>
          <h1>
            <h4 className={styles.title}>
              La Internacia Lingvo <br />
              (The International Language)
            </h4>
          </h1>

          <p className={styles.blurb}>
            Esperanto is a constructed language created by L.L. Zamenhof. It's
            many times easier to learn than any 'natural' language and acts as a
            bridge of communication between individuals who speak two different
            native tongues.
            <h2 className={styles.resources}>
              Links to free learning materials and resources:
            </h2>
          </p>
          <ul className={styles.resources}>
            {links.map((link) => (
              <li key={link} className={styles.li}>
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Esperanto;
