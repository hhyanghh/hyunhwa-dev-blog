import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="sticky top-0 left-0 w-full z-10 h-20 transition duration-500 bg-slate-100 dark:bg-navy px-3">
      <Nav />
    </div>
  );
};

export default Header;
