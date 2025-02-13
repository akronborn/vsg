import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import icon3 from "../public/icon3.png";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.logobig}>
        <Link href="/">
          <a>
            <Image src={icon3} width={20} height={20}  alt="green star photo" />
            <Link href="/">
              <span className={styles.title}>Verdaj Stelaj Gajnoj</span>
            </Link>
          </a>
        </Link>
      </div>

      <div className={styles.logosmall}>
        <Link href="/">
          <a>
            <Image src={icon3} alt="green star photo" />
            <Link href="/">
              <span className={styles.title}>VSG</span>
            </Link>
          </a>
        </Link>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/esperanto">Esperanto</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.api}>
          <a href="https://vsg-chat.onrender.com/">Chat</a>
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
          <Link href="/">Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about">About</Link>
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
