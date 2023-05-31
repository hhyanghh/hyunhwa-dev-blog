import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <span className="font-bold">HOME</span>
    </Container>
  );
}
