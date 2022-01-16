import Head from "next/head";
import styles from "../styles/Schedule.module.css";
import Image from "next/image";
import sched3 from "../public/sched3.jpg";
import Link from "next/link";

const Schedule = () => {
  const congress =
    "https://esperanto2022.ca/en/world-esperanto-congress/#:~:text=From%20August%206th%20to%20August,postponed%20because%20of%20the%20pandemic.";
  return (
    <div>
      <Head>
        <title>Schedule Page</title>
        <meta name="description" content="Schedule information" />
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
              107th annual World Esperanto Congress will take place in Montreal,
              Canada from August 6th-13th 2022
            </p>
            Link:
            <div className={styles.vsgEvent}>
              <Link href={congress}> Montreal</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
