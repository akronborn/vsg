import styles from "../styles/FirstLook.module.css";
import Image from "next/image";
import icon3 from "../public/icon3.png";
import icon1 from "../public/icon1.png";
import Link from "next/link";

const FirstLook = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span>
            <Image src={icon3} alt="green star photo" />
            VSG
            <Image src={icon1} alt="green star photo" />
          </span>
        </h1>
        <p className={styles.blurb}>
          Verdaj Stelaj Gajnoj (Green Star Gains) is an online platform that
          brings together Esperanto speaking gamers, who play a variety of
          games. Events are hosted and posted, there's a chat, information on
          Esperanto and how to learn it, and, soon, direct messaging between
          users.
        </p>
        <Link href="/about">
          <button className={styles.button}>Learn more..</button>
        </Link>
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>Schedule</h1>
        <p className={styles.blurb}>
          No events scheduled at this time.
          <h4>Non-VSG event:</h4>
          108th World Esperanto Congress, 7/29-8/5/2023,Turin, Italy.
        </p>
        <Link href="/schedule">
          <button className={styles.button}>Current events..</button>
        </Link>
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>Esperanto</h1>
        <p className={styles.blurb}>
          Esperanto is a constructed language created by L.L. Zamenhof. It's
          many times easier to learn than any 'natural' language and acts as a
          bridge of communication between individuals who speak two different
          native tongues.
        </p>
        <Link href="/esperanto">
          <button className={styles.button}>More on Esperanto</button>
        </Link>
      </div>
    </div>
  );
};

export default FirstLook;
