import Head from "next/head";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Info about  VSG" />
      </Head>
      <div className={styles.image}>
        <div className={styles.p}>
          <h1>About VSG </h1>
          <span>Under Construction!</span>
        </div>
      </div>
    </div>
  );
};

export default About;
