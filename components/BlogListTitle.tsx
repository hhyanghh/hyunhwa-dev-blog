import React from "react";
import Link from "next/link";

const BlogListTitle = ({ date, title, slug }) => {
  return (
    <li>
      <Link
        href={`/blog/${slug}`}
        passHref
        className="flex justify-between items-center hover:bg-gray-200 dark:hover:bg-yellow  p-1"
      >
        <div className="font-medium">{title}</div>
        <div className="font-light text-xs p-1 rounded-lg">{date}</div>
      </Link>
    </li>
  );
};

export default BlogListTitle;
