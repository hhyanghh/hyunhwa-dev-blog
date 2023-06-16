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
      <main className="w-full min-h-screen px-3">
        <div className="max-w-screen-md mx-auto">{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Container;
