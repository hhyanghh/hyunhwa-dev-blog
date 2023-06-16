import React from "react";
import Link from "next/link";
import BlogPost from "./BlogPost";

const RecentPosts = ({ posts }) => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-extrabold">👀 Recent Posts</h1>
      <div className="flex flex-col">
        {posts.map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            description={post.description}
            key={post._id}
            slug={post._raw.flattenedPath}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
