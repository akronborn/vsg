import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import icon3 from "../public/icon3.png";
import icon1 from "../public/icon1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <Image src={icon3} alt="green star photo" className={styles.image} />
          <Link href="/">
            <span className={styles.title}>Verda Stelo Gaming</span>
          </Link>
        </a>
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/about">About VSK</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/esperanto">Esperanto</Link>
        </li>
        <li className={styles.chat}>
          <a href="https://vsg-chat.onrender.com/">Chat</a>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>

      <ul
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className={styles.menuItem}>
          <Link href="/about">About VSK</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/esperanto">Esperanto</Link>
        </li>

        <li className={styles.menuItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
