import Image from "next/image";
import styles from "../styles/Footer.module.css";
import button from "../public/button.png";
import contact from "../public/emailphoneblack.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.primary}>
        <h1 className={styles.title}>Verda Stelo Gaming</h1>
        <h1 className={styles.link}>
          <a href="/contact" passHref>
            <span className={styles.reach}>
              Post an event or just reach out
            </span>
            <Image src={button} alt="link button" width="40px" height="40px" />
          </a>
        </h1>
      </div>
      <div className={styles.secondary}>
        <div className={styles.item}>
          Links: <br />
          <Link href="https://www.linkedin.com/in/akronborn/">
            Linkedin
          </Link> | <Link href="https://github.com/akronborn"> Git </Link>
        </div>
        <div className={styles.item}>2022 AkrnBrn</div>
      </div>
      <div className={styles.secondary}>
        <Image src={contact} alt="contact button" width="40px" height="40px" />
        <div className={styles.item}>
          FreewillandJustice@gmail.com <br /> (586)209-8832
        </div>
      </div>
    </div>
  );
};

export default Footer;
