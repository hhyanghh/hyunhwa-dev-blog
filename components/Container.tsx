import React from "react";
import Header from "./Header";
import Nav from "./Nav";
const Container = (props) => {
  return (
    <div className="w-full flex flex-col items-center p-3 bg-slate-300">
      <Header className="w-full max-w-3xl flex flex-row justify-between items-center my-1 bg-slate-600">
        <Nav />
      </Header>
      <main>{props.children}</main>
    </div>
  );
};

export default Container;
