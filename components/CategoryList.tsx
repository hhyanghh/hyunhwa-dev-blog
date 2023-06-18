import { categorys } from "@/data/categories";
import { Dispatch, SetStateAction } from "react";

interface CategoryListProps {
  setSellect: Dispatch<SetStateAction<string>>;
  sellect: string;
}

const sellectedStyle = "bg-orange px-2 py-1 bg-orange rounded-xl sm:text-lg";
const defaultStyle =
  "bg-gray-300 px-2 py-1 sm:text-lg rounded-xl transition-transform duration-300 hover:bg-orange";

export default function CategoryList({
  setSellect,
  sellect,
}: CategoryListProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-10">
      {categorys.map((category) => {
        if (sellect === category.keyword)
          return (
            <button
              type="button"
              onClick={() =>
                setSellect(category.keyword === "All" ? "" : category.keyword)
              }
              key={category.keyword}
              className={sellectedStyle}
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
              setSellect(category.keyword === "All" ? "" : category.keyword)
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
