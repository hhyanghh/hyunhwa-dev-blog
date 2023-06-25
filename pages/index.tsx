import React from "react";
import { Inter } from "next/font/google";
import RecentPosts from "@/components/RecentPosts";
import HomeProfile from "@/components/HomeProfile";
import { allPosts } from "@/contentlayer/generated";
import { InferGetStaticPropsType } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HomeProfile />
      <RecentPosts posts={posts} />
    </>
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
