import { BsMusicNoteBeamed, BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";
import { AiFillCamera } from "react-icons/ai";

export const categorys: { title: string; keyword: string; icon?: any }[] = [
  { title: "All", keyword: "", icon: <BsMusicNoteBeamed /> },
  { title: "JS", keyword: "js", icon: <LuWaves /> },
  { title: "React", keyword: "react", icon: <LuWaves /> },
  { title: "TypeScript", keyword: "typescript", icon: <LuWaves /> },
  { title: "NextJS", keyword: "nextjs", icon: <LuWaves /> },
  {
    title: "회고",
    keyword: "retrospection",
    icon: <BsFillBookmarkCheckFill />,
  },
  { title: "IT", keyword: "it", icon: <LuWaves /> },
  { title: "BOOK", keyword: "book", icon: <FaBook /> },
  { title: "일상", keyword: "diary", icon: <AiFillCamera /> },
];
