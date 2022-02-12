import Image from "next/image";
import styles from "../styles/Footer.module.css";
import button from "../public/button.png";
import contact from "../public/emailphoneblack.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.primary}>
        <Link href="/">
          <a>
            <h1 className={styles.title}>Verda Stelo Gaming</h1>
          </a>
        </Link>
      </div>

      <div className={styles.secondary}>
        <div className={styles.contact}>
          <Link href="/contact">Send inquiries and feedback</Link>
        </div>
        <div className={styles.item}>
          <div className={styles.info}>
            <Image src={button} alt="link icon" width="40px" height="40px" />
            <Link href="https://www.linkedin.com/in/akronborn/">
              Linkedin
            </Link>| <Link href="https://github.com/akronborn"> Github </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
