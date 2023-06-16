import React from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "../../.contentlayer/generated";
import { IoMdArrowRoundBack } from "react-icons/io";

const PostDetailPage: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  const MDXComponent = useMDXComponent(post?.body.code);

  const handleClick = () => {
    console.log("뒤로가기>>>");
  };
  return (
    <>
      <div className="flex flex-col items-center pt-8 pb-12">
        <div className="text-base font-semibold text-navy dark:text-orange">
          #{post?.category}
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white pt-4">
          {post?.title}
        </h1>
        <div className="text-xs text-gray-600 dark:text-white pt-2">
          {post?.date}
        </div>
      </div>
      <MDXComponent />
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
  const postId = String(params?.slug.join("/"));

  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });

  return {
    props: {
      post,
    },
  };
};
