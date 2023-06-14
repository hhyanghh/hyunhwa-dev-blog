import Link from "next/link";
import BlogPost from "./BlogPost";

const RecentPosts = () => {
  // TODO: Links map 돌리기 , Link의 key 값 수정
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-extrabold">👀 Recent Posts</h1>
      <div className="flex flex-col">
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </div>
  );
};

export default RecentPosts;
