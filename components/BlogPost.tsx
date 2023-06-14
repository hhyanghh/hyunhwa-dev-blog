import Link from "next/link";

const BlogPost = () => {
  return (
    <Link href="/" passHref className="mt-5">
      <div className="text-xs font-light">08 June, 2023</div>
      <div className="font-medium text-xl">제목이 표시되는 공간 블라블라</div>
      <div className="font-light">설명이 표시되는 공간 블라블라블라</div>
    </Link>
  );
};

export default BlogPost;
