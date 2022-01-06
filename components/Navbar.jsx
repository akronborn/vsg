import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import icon3 from "../public/icon3.png";
import icon1 from "../public/icon1.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <Image src={icon3} alt="green star photo" className={styles.image} />
          <Link href="/">
            <span className={styles.title}>Verda Stelo Gaming</span>
          </Link>
          <Image src={icon1} alt="green star photo" className={styles.image} />
        </a>
      </Link>
      <ul className={styles.navlist}>
        <li className={styles.navitem}>
          <Link href="/about">About VSK</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/esperanto">Esperanto</Link>
        </li>
        <li className={styles.chat}>
          <a href="https://vsg-chat.onrender.com/">Chat</a>
        </li>
        <li className={styles.navitem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
