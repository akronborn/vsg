import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

import styles from "../styles/TagLine.module.css";
import Image from "next/image";
import icon1 from "../public/icon1.png";

const TagLine = () => {
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.tagline}>All Platforms </div>

      <ul className={styles.links}>
        {user ? (
          <div>
            <li className={styles.api}>
              <a href="/api/auth/me">Profile</a>
            </li>
            <li className={styles.api}>
              <a href="/api/auth/logout">Logout</a>
            </li>
          </div>
        ) : (
          <li className={styles.api}>
            <a href="/api/auth/login">Login </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TagLine;
