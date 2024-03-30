import Head from "next/head";
import styles from "../styles/Schedule.module.css";
import Image from "next/image";
import sched3 from "../public/sched3.jpg";
import Link from "next/link";

const Schedule = () => {
  const retoso = "https://retoso2024.tejo.org/";
  return (
    <div>
      <Head>
        <title>Verdaj Stelaj Gajnoj Schedule Page</title>
        <meta name="description" content="Schedule of Esperanto Events" />
      </Head>

      <div>
        <div className={styles.sched}>
          <div className={styles.card}>
            <h1 className={styles.title}>
              <span className={styles.brandName}>Event Schedule</span>
            </h1>
            <p className={styles.p}>
              No VSG social or gaming events scheduled at this time.
            </p>
            <h2>Non-VSG Events</h2>
            <p className={styles.p}>
              <b> Virtual/Online Events! </b> <b> RETOSO 2024 </b>
              April 26-29 TEJO Event
            </p>
            Link:
            <div className={styles.vsgEvent}>
              <Link href={retoso}>Retoso</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
