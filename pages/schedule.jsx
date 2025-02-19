import Head from "next/head";
import styles from "../styles/Schedule.module.css";
import Link from "next/link";



const Schedule = () => {
  const chicago = "https://esperanto-chicago.org/2025/";
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
              <b> Virtual/Online Events: </b> <br></br>
              <a href="www.eventaservo.org/reta">Online events via Eventa Servo</a>
              <b> U.S. Monata Kunveno</b> <br></br>
              March, 25th, Harold Washing Library, Chicago, IL <br></br>
              <b>World Esperanto Congress </b><br></br>
              110th World Esperanto Congress, Brno, Czech Republic
            </p>
            Link:
            <div className={styles.vsgEvent}>
              <Link href={chicago}>Chicago</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
