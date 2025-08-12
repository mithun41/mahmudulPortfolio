import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import BackgroundAnimation from "../Components/BgAnimation/BackgroundAnimation";

const RootLayout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
