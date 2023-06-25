import React from "react";
import navlinks from "@/data/nav";
import Link from "next/link";
import { RiSunLine, RiMoonClearFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const Nav = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <nav className=" max-w-screen-md h-20 flex flex-nowrap items-center justify-between m-auto text-navy dark:text-white">
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
      </div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <RiSunLine /> : <RiMoonClearFill />}
      </button>
    </nav>
  );
};

export default Nav;
