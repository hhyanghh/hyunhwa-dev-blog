import { categorys } from "@/data/categories";
import { Dispatch, SetStateAction } from "react";

interface CategoryListProps {
  setSelect: Dispatch<SetStateAction<string>>;
  select: string;
}

const selectedStyle =
  "bg-navy text-white dark:bg-orange px-2 py-1 rounded-xl sm:text-lg ";
const defaultStyle =
  "bg-gray-300 dark:text-black hover:bg-navy hover:text-white hover:dark:bg-orange px-2 py-1 sm:text-lg rounded-xl transition-transform duration-300  ";

export default function CategoryList({ setSelect, select }: CategoryListProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-10">
      {categorys.map((category) => {
        if (select === category.keyword)
          return (
            <button
              type="button"
              onClick={() =>
                setSelect(category.keyword === "All" ? "" : category.keyword)
              }
              key={category.keyword}
              className={selectedStyle}
            >
              <div className="flex items-center">
                {category.icon}
                <span className="ml-2">{category.title}</span>
              </div>
            </button>
          );
        return (
          <button
            type="button"
            onClick={() =>
              setSelect(category.keyword === "All" ? "" : category.keyword)
            }
            key={category.keyword}
            className={defaultStyle}
          >
            <div className="flex items-center">
              {category.icon}
              <span className="ml-2">{category.title}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
