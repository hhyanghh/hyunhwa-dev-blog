import React from "react";
import navlinks from "@/data/nav";
import Link from "next/link";
import { CgSun } from "react-icons/cg";

const Nav = () => {
  return (
    <nav className="text-navy max-w-screen-md h-20 flex flex-nowrap items-center justify-between m-auto px-8">
      <Link href="/">Home</Link>
      <div className="flex items-center">
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title} className="mr-5">
            {nav.title}
          </Link>
        ))}
        <CgSun />
      </div>
    </nav>
  );
};

export default Nav;
