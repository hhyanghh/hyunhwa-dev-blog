import React from "react";
import Link from "next/link";

const BlogPost = ({ date, title, description, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref className="mt-5">
      <div className="text-xs font-light">{date}</div>
      <div className="font-medium text-xl">{title}</div>
      <div className="font-light">{description}</div>
    </Link>
  );
};

export default BlogPost;
