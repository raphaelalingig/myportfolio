import React from "react";
import Navbar from "../components/Navbar";
import Home from "./sections/Home";
import Menu from "../components/Menu";

export default function LandingPage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mt-20">
        <div>
          <Menu />
        </div>
        <div>
          <Home />
        </div>
      </div>
    </>
  );
}
