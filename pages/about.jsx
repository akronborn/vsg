import Head from "next/head";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <Head>
        <title>Verda Stelo Gaming About Page</title>
        <meta
          name="description"
          content="Information about Verda Stelo Gaming"
        />
      </Head>
      <div className={styles.image}>
        <div className={styles.p}>
          <h3 className={styles.title}>About VSG </h3>
          <div>
            Verda Stelo Gaming (Green Star Gaming) is an online platform that
            brings together Esperanto speaking gamers, who play a variety of
            games. Events are hosted and posted, there's a chat, information on
            Esperanto and how to learn it, and, soon, a forum and game specific
            content (Steam API). I'm partial to driving simulators like American
            Truck Simulator, myself!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
