import Head from "next/head";
import styles from "../styles/Schedule.module.css";
import Image from "next/image";
import sched3 from "../public/sched3.jpg";
import Link from "next/link";

const Schedule = () => {
  const congress =
    "https://convention.turismotorino.org/en/news/turin-host-108th-world-esperanto-congress-0";
  return (
    <div>
      <Head>
        <title>Verda Stelo Gaming Schedule Page</title>
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
              108th annual <b>World Esperanto Congress</b> July 29 - August 5,
              2023 Turin (Torino), Italy
            </p>
            Link:
            <div className={styles.vsgEvent}>
              <Link href={congress}>Turin</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
