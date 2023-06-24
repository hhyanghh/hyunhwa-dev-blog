import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="absolute left-0 bottom-3 w-full">
      <div className="flex gap-3 justify-center flex-col items-center pt-4">
        <div className="text-sm text-gray-600 dark:text-white font-md">
          Copyright © 2023 YangHyunHwa
        </div>
        <div className="flex gap-3">
          <Link href="https://github.com/hhyanghh" target="_blank">
            <FaGithub size="24" className="hover:text-orange" />
          </Link>
          <a href="mailto:yanghh711@gmail.com">
            <MdEmail size="24" className="hover:text-orange" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
