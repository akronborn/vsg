import Head from "next/head";
import styles from "../styles/Schedule.module.css";
import Image from "next/image";
import sched3 from "../public/sched3.jpg";

const Schedule = () => {
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
              No social or gaming events scheduled at this time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
