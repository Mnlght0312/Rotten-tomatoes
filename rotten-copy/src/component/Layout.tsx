import React, { ReactNode } from "react";
import { Meta } from "./Meta";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
interface MyProps {
  children?: ReactNode;
}

export const Layout = ({ children }: MyProps): JSX.Element => {
  return (
    <>
      <Meta />
      <div className="max-w-5xl mx-auto pt-6">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
