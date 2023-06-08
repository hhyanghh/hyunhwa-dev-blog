import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Container from "@/components/Container";
import RecentPosts from "@/components/RecentPosts";
import HomeProfile from "@/components/HomeProfile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomeProfile />
      <RecentPosts />
    </>
  );
}
