import Link from "next/link";

const BlogPost = () => {
  return (
    <Link href="/blog" passHref>
      <a className="w-full my-7 hover:-translate-x-1.5">
        <div className="font-medium text-xs text-gray-400">2023.06.08</div>
        <div className={`font-extrabold text-2xl mt-2`}>
          게시물 제목 쓰는 공가아아안
        </div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>
          게시물의 간단한 설명
        </div>
      </a>
    </Link>
  );
};

export default BlogPost;
