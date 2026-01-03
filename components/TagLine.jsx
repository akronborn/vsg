import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

import styles from "../styles/TagLine.module.css";

const TagLine = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.tagline}>
        <h2 className={styles.rip}> Renato Corsetti (1941-2025)</h2>
        </div>

      <ul className={styles.links}>
        {user ? (
          <div>
            <li className={styles.api}>
              <a href="/auth/profile">Profile</a>
            </li>
            <li className={styles.api}>
              <a href="/auth/logout">Logout</a>
            </li>
          </div>
        ) : (
          <li className={styles.api}>
            <a href="/auth/login">Login </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TagLine;
