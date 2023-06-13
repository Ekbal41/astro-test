import { useState } from "react";
import NovelCard from "./NovelCard";
export default function ExploreFilter() {
  const [filter, setFilter] = useState({
    category: "",
    genre: "All",
    status: "All",
    shortBy: "Populer",
  });
  return (
    <>
      <div className="mx-4 bg-slate-50 p-8 md:px-26 lg:px-40">
        <p className="text-lg font-bold text-slate-500">Filter By</p>
        <div className="flex  flex-wrap justify-start gap-4 items-center mb-6">
          <p className="text-gray-400 font-thin">Categor:</p>
          <div className="flex  flex-wrap justify-start items-center gap-2">
            <button
              onClick={() => setFilter({ ...filter, category: "All" })}
              className={` rounded-full text-sm px-2 py-1
                ${filter.category === "All" && "bg-green-500 text-white"}
                `}
            >
              All
            </button>
            <button
              onClick={() => setFilter({ ...filter, category: "Female Lead" })}
              className={` rounded-full text-sm px-2 py-1
                ${
                filter.category === "Female Lead" && "bg-green-500 text-white"
              }
                `}
            >
              Female Lead
            </button>
            <button
              onClick={() => setFilter({ ...filter, category: "Male Lead" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.category === "Male Lead" && "bg-green-500 text-white"}
                `}
            >
              Male Lead
            </button>
          </div>
        </div>
        <div className="flex  flex-wrap  justify-start gap-4 items-center mb-6">
          <p className="text-gray-400 font-thin">Genre:</p>
          <div className="flex  flex-wrap justify-start items-center gap-2">
            <button
              onClick={() => setFilter({ ...filter, genre: "All" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.genre === "All" && "bg-green-500 text-white"}
                `}
            >
              All
            </button>
            <button
              onClick={() => setFilter({ ...filter, genre: "Fantasy" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.genre === "Fantasy" && "bg-green-500 text-white"}
                `}
            >
              Fantasy
            </button>
            <button
              onClick={() => setFilter({ ...filter, genre: "Modern&Urban" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${
                filter.genre === "Modern&Urban" &&
                "bg-green-500 text-white"
              }
                `}
            >
              Modern&Urban
            </button>
            <button
              onClick={() => setFilter({ ...filter, genre: "Game" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.genre === "Game" && "bg-green-500 text-white"}
                `}
            >
              Game
            </button>
            <button
              onClick={() => setFilter({ ...filter, genre: "Wuxia" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.genre === "Wuxia" && "bg-green-500 text-white"}
                `}
            >
              Wuxia
            </button>
            <button
              onClick={() => setFilter({ ...filter, genre: "Xianxia" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.genre === "Xianxia" && "bg-green-500 text-white"}
                `}
            >
              Xianxia
            </button>
          </div>
        </div>
        <div className="flex  flex-wrap justify-start gap-4 items-center mb-6">
          <p className="text-gray-400 font-thin">Status:</p>
          <div className="flex  flex-wrap justify-start items-center gap-2">
            <button
              onClick={() => setFilter({ ...filter, status: "All" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.status === "All" && "bg-green-500 text-white"}
                `}
            >
              All
            </button>
            <button
              onClick={() => setFilter({ ...filter, status: "Ongoing" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.status === "Ongoing" && "bg-green-500 text-white"}
                `}
            >
              Ongoing
            </button>
            <button
              onClick={() => setFilter({ ...filter, status: "Complete" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.status === "Complete" && "bg-green-500 text-white"}
                `}
            >
              Complete
            </button>
          </div>
        </div>
        <div className="flex  flex-wrap justify-start gap-4 items-center mb-6">
          <p className="text-gray-400 font-thin">Short By:</p>
          <div className="flex  flex-wrap justify-start items-center gap-2">
            <button
              onClick={() => setFilter({ ...filter, shortBy: "Populer" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.shortBy === "Populer" && "bg-green-500 text-white"}
                `}
            >
              Populer
            </button>
            <button
              onClick={() => setFilter({ ...filter, shortBy: "Update" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.shortBy === "Update" && "bg-green-500 text-white"}
                `}
            >
              Update
            </button>
            <button
              onClick={() => setFilter({ ...filter, shortBy: "New" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${
                filter.shortBy === "New" &&
                "bg-green-500 text-white"
              }
                `}
            >
              New
            </button>
            <button
              onClick={() => setFilter({ ...filter, shortBy: "Chapter" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.shortBy === "Chapter" && "bg-green-500 text-white"}
                `}
            >
              Chapter
            </button>
            <button
              onClick={() => setFilter({ ...filter, shortBy: "Ratings" })}
              className={` rounded-full text-sm px-2 py-1 text-slate-800
                ${filter.shortBy === "Ratings" && "bg-green-500 text-white"}
                `}
            >
              Ratings
            </button>
          </div>
        </div>
      </div>
      <div className="pt-4 md:px-26 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 mt-4">
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
          <NovelCard />
        </div>
      </div>
    </>
  );
}
