import Layout from "../components/Layout";
import "../styles/globals.css";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
