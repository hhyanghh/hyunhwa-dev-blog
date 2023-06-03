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
      <main className="bg-slate-600 min-h-screen">{props.children}</main>
      <Footer />
    </>
  );
};

export default Container;
