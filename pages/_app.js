import Layout from "../components/Layout";
import "../styles/globals.css";
import React from "react";
import  { Auth0Provider }  from "@auth0/nextjs-auth0/client";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  );
}

export default MyApp;
