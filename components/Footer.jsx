import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.primary}>
        <Link href="/">

          <h1 className={styles.title}>VS-Gajnoj</h1>

        </Link>
      </div>
      <div className={styles.secondary}>
        <div className={styles.contact}>
          <Link href="/contact">Send inquiries and feedback</Link>
        </div>
        <div className={styles.item}>
          <div className={styles.info}>
            <Link href="https://www.linkedin.com/in/akronborn/">
              Linkedin 
            </Link> | <Link href="https://github.com/akronborn"> Github </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
