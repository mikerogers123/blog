import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <main>
      <div className="container">
        <Navbar></Navbar>
      </div>
      <div className="container">{children}</div>
      <div className="container">
        <Footer></Footer>
      </div>
    </main>
  );
}
