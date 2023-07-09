import React from "react";
import BlogListTitle from "./BlogListTitle";
import { categorys } from "@/data/categories";

const RecentPosts = ({ posts }) => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-extrabold">👀 Recent Posts</h1>
      <ul className="flex flex-col mt-5 ">
        {posts.map((post) => {
          const matchingCategory = categorys.find(
            (category) => category.keyword === post.category
          );
          const categoryTitle = matchingCategory
            ? matchingCategory.title
            : "Uncategorized";

          return (
            <BlogListTitle
              date={post.date}
              title={post.title}
              category={categoryTitle}
              key={post._id}
              slug={post._raw.flattenedPath}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RecentPosts;
