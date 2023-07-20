import React from "react";
import { Children } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutHome = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutHome;
