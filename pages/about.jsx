import Head from "next/head";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <Head>
        <title>Verdaj Stelaj Gajnoj About Page</title>
        <meta
          name="description"
          content="Information about Verdaj Stelaj Gajnoj"
        />
      </Head>
      <div className={styles.image}>
        <div className={styles.p}>
          <h3 className={styles.title}>About VSG </h3>
          <div>
            Verdaj Stelaj Gajnoj (Green Star Gains) is an online platform that
            brings together Esperanto speaking gamers, who play a variety of
            games. Events are hosted and posted, there's a chat, information on
            Esperanto and how to learn it, and, soon, direct messaging between
            users and game specific content via APIs. I'm partial to driving
            simulators like American Truck Simulator, myself!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
