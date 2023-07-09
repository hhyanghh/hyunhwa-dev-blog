//@ts-nocheck
import React from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import Head from "next/head";
import { categorys } from "@/data/categories";

const PostDetailPage: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  const router = useRouter();

  const MDXComponent = useMDXComponent(post?.body.code);

  const matchingCategory = categorys.find(
    (category) => category.keyword === post.category
  );
  const categoryTitle = matchingCategory
    ? matchingCategory.title
    : "Uncategorized";

  const handleClick = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>{post?.title} - 현화로그</title>
        <meta name="description" content={post?.description} />
      </Head>
      <div className="flex flex-col items-center pt-8 pb-12">
        <div className="text-base font-semibold text-navy dark:text-orange">
          #{categoryTitle}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white pt-4">
          {post?.title}
        </h1>
        <div className="text-xs text-gray-600 dark:text-white pt-2">
          {post?.date}
        </div>
      </div>
      <div className="prose dark:prose-invert">
        <MDXComponent />
      </div>
      <IoMdArrowRoundBack
        size={24}
        onClick={handleClick}
        className="cursor-pointer inline-block"
      />
    </>
  );
};

export default PostDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(({ _raw }) => ({
      params: {
        slug: _raw.flattenedPath
          .split("/")
          .map((segment) => encodeURIComponent(segment)),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = String((params?.slug as string[])?.join("/"));

  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });

  return {
    props: {
      post,
    },
  };
};
