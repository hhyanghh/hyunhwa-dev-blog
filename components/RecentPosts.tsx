import React from "react";
import BlogListTitle from "./BlogListTitle";

const RecentPosts = ({ posts }) => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-extrabold">👀 Recent Posts</h1>
      <ul className="flex flex-col mt-5 ">
        {posts.map((post) => (
          <BlogListTitle
            date={post.date}
            title={post.title}
            category={post.category}
            key={post._id}
            slug={post._raw.flattenedPath}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
