import { useState } from "react";
import NovelCard from "./NovelCard";

export default function NovelCluster({ title, items }) {
  const [novelCards, setNovelCards] = useState([
    {
      card: <NovelCard />,
    },
    {
      card: <NovelCard />,
    },
    {
      card: <NovelCard />,
    },
    {
      card: <NovelCard />,
    },
    {
      card: <NovelCard />,
    },
  ]);
  const handleNextClick = () => {
    console.log("next clicked");
  };
  return (
    <>
      <div class="mx-8 mt-8 p-8
        ">
        <div class="flex justify-between items-center">
          <h1 class="text-sky-500 font-bold text-2xl capitalize">
            {title}
          </h1>
          <div>
            <button class="inline-flex items-center uppercase font-bold bg-sky-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-sky-700 rounded text-base mt-4 md:mt-0">
              Prev
            </button>
            <button
              onClick={handleNextClick}
              class="inline-flex ml-4 items-center uppercase font-bold bg-sky-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-sky-700 rounded text-base mt-4 md:mt-0"
            >
              Next
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
          {novelCards.map((novelCard) => {
            return novelCard.card;
          })}
        </div>
      </div>
    </>
  );
}
