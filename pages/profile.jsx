import React from "react";
import Head from "next/head";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";
import styles from "../styles/Profile.module.css";

function Profile() {
  const { user } = useUser();

  return (
    <>
      {user && (
        <>
          <div className={styles.container} data-testid="profile">
            <Head>
              <title>{user.nickname}</title>
            </Head>
            <Image
              src={user.picture}
              alt="Profile"
              decode="async"
              data-testid="profile-picture"
              width={256}
              height={256}
            />

            <h2 data-testid="profile-name">{user.nickname}</h2>
            <p className="lead text-muted" data-testid="profile-email">
              {user.email}
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  Profile,
});
