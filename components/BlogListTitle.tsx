import React from "react";
import Link from "next/link";

const BlogListTitle = ({ date, title, slug, category }) => {
  return (
    <li>
      <Link
        href={`/blog/${slug}`}
        passHref
        className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-yellow  p-1"
      >
        <div className="font-medium text-left grow">{title}</div>
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-navy ring-1 ring-inset ring-gray-500/10">
          {category}
        </span>
        <div className="font-light text-xs p-1 rounded-lg">{date}</div>
      </Link>
    </li>
  );
};

export default BlogListTitle;
