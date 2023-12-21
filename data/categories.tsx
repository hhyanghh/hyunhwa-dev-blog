import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaBook, FaDisease } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";
import { AiFillCamera } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";

export const categorys: { title: string; keyword: string; icon?: any }[] = [
  { title: "All", keyword: "", icon: <FaDisease /> },
  { title: "JS", keyword: "js", icon: <LuWaves /> },
  { title: "React", keyword: "react", icon: <LuWaves /> },
  { title: "TypeScript", keyword: "typescript", icon: <LuWaves /> },
  { title: "NextJS", keyword: "nextjs", icon: <LuWaves /> },
  { title: "코드/프로젝트 분석", keyword: "analyze", icon: <FaLaptopCode /> },
  {
    title: "회고",
    keyword: "retrospection",
    icon: <BsFillBookmarkCheckFill />,
  },
  { title: "IT", keyword: "it", icon: <LuWaves /> },
  { title: "BOOK", keyword: "book", icon: <FaBook /> },
  { title: "일상", keyword: "diary", icon: <AiFillCamera /> },
];
