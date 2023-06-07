import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
const Container = (props) => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main className="min-h-screen bg-slate-900">{props.children}</main>
      <Footer />
    </>
  );
};

export default Container;
