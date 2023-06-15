import React from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "../../.contentlayer/generated";

const PostDetailPage: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  const MDXComponent = useMDXComponent(post?.body.code || "");
  return (
    <div>
      <h1>{post?.title}</h1>
      <div>{post?.description}</div>
      <div>{post?.date}</div>
      <MDXComponent />
    </div>
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
