import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
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
              <Link href="/profile">Profile</Link>
            </li>
            <li className={styles.api}>
              <Link href="/api/auth/logout">Logout</Link>
            </li>
          </div>
        ) : (
          <li className={styles.api}>
            <Link href="/api/auth/login">Login </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default TagLine;
