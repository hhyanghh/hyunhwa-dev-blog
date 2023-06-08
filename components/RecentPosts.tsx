import Link from "next/link";

const RecentPosts = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-extrabold">👀 Recent Posts</h1>
      <div className="flex flex-col">
        <Link key="your_key" href="/" passHref className="mt-5">
          <div className="text-xs font-light">08 June, 2023</div>
          <div className="font-medium text-xl">
            제목이 표시되는 공간 블라블라
          </div>
          <div className="font-light">설명이 표시되는 공간 블라블라블라</div>
        </Link>
        <Link key="your_key" href="/" passHref className="mt-5">
          <div className="text-xs font-light">08 June, 2023</div>
          <div className="font-medium text-xl">
            제목이 표시되는 공간 블라블라
          </div>
          <div className="font-light">
            설명이 표시되는 공간 블라블라블라 설명이 표시되는 공간 블라블라블라{" "}
            설명이 표시되는 공간 블라블라블라 설명이 표시되는 공간 블라블라블라
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecentPosts;
