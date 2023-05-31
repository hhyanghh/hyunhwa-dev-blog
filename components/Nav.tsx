import React from "react";
import navlinks from "@/data/nav";
import Link from "next/link";
import { CgSun } from "react-icons/cg";

const Nav = () => {
  return (
    <nav className="flex">
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          {nav.title}
        </Link>
      ))}
      <CgSun />
    </nav>
  );
};

export default Nav;
