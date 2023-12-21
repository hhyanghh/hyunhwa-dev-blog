//@ts-nocheck
import React, { useState } from "react";
import BlogPost from "@/components/BlogPost";
import { InferGetStaticPropsType } from "next";
import { Post, allPosts } from "contentlayer/generated";
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
  const [select, setSelect] = useState<string>("");

  return (
    <div className="flex flex-col">
      <CategoryList select={select} setSelect={setSelect} />
      {select === "" ? (
        <PostList posts={posts} />
      ) : (posts as Post[]).filter((post) => post.category === select)
          .length === 0 ? (
        <Empty />
      ) : (
        <PostList
          posts={(posts as Post[]).filter((post) => post.category === select)}
        />
      )}
    </div>
  );
};

export default Blog;
