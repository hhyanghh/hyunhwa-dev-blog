import React from "react";
import Link from "next/link";

const BlogListTitle = ({ date, title, slug }) => {
  return (
    <li>
      <Link
        href={`/blog/${slug}`}
        passHref
        className="flex justify-between items-center hover:text-orange"
      >
        <div className="font-medium">{title}</div>
        <div className="font-light bg-navy text-white text-xs p-1 rounded-lg">
          {date}
        </div>
      </Link>
    </li>
  );
};

export default BlogListTitle;
