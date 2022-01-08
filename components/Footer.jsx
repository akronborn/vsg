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
      </div>

      <div className={styles.secondary}>
        <div className={styles.contact}>
          {" "}
          <Image
            src={contact}
            alt="contact button"
            width="40px"
            height="40px"
          />{" "}
        </div>
        <div className={styles.item}>
          FreewillandJustice@gmail.com <br /> (586)209-8832 <br />
          <Link href="https://www.linkedin.com/in/akronborn/">
            Linkedin
          </Link> | <Link href="https://github.com/akronborn"> Github </Link>|
          <a href="/contact" passHref>
            <Image src={button} alt="link button" width="40px" height="40px" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
