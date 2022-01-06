import React from "react";
import Navbar from "./Navbar";
import TagLine from "./TagLine";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <TagLine />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
