import React, { useState } from "react";
import BlogPost from "@/components/BlogPost";
import { InferGetStaticPropsType } from "next";
import { allPosts, Post } from "@/contentlayer/generated";
import PostList from "@/components/PostList";
import CategoryList from "@/components/CategoryList";
import Empty from "@/components/Empty";

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [sellect, setSellect] = useState<string>("");

  return (
    <div className="flex flex-col">
      <CategoryList sellect={sellect} setSellect={setSellect} />
      {sellect === "" ? (
        <PostList posts={posts} />
      ) : (posts as Post[]).filter((post) => post.category === sellect)
          .length === 0 ? (
        <Empty />
      ) : (
        <PostList
          posts={(posts as Post[]).filter((post) => post.category === sellect)}
        />
      )}
    </div>
  );
};

export default Blog;
