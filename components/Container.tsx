import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
const Container = (props) => {
  return (
    <>
      <Header />
      <main className="w-full px-3">
        <div className="max-w-screen-md mx-auto">{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Container;
