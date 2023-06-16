import React from "react";
import BlogPost from "@/components/BlogPost";
import { InferGetStaticPropsType } from "next";
import { allPosts } from "../../.contentlayer/generated";

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col">
      <div>검색영역 SearchBar</div>
      <div>카테고리들 영역</div>
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
  );
}

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
