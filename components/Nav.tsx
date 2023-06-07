import React from "react";
import navlinks from "@/data/nav";
import Link from "next/link";
import { CgSun } from "react-icons/cg";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  console.log(router.pathname, "router.pathname");

  return (
    <nav className="text-navy max-w-screen-md h-20 flex flex-nowrap items-center justify-between m-auto px-8">
      <Link href="/">Home</Link>
      <div className="flex items-center">
        {navlinks.map((nav) => (
          <Link
            href={nav.link}
            key={nav.title}
            className={`mr-5 ${
              router.pathname === nav.link
                ? "font-bold underline underline-offset-4"
                : ""
            }`}
          >
            {nav.title}
          </Link>
        ))}
        <CgSun />
      </div>
    </nav>
  );
};

export default Nav;
