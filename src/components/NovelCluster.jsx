import { useRef, useState } from "react";
import NovelCard from "./NovelCard";

export default function NovelCluster({ title, items }) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  const [novelCards, setNovelCards] = useState([
    {
      card: (
        <NovelCard
          title={"my novel"}
          img={"https://th.bing.com/th?id=OIF.CDKaJ3GVbHq%2b0mYd1z8bEA&pid=ImgDet&rs=1"}
        />
      ),
    },
    {
      card: (
        <NovelCard
          title={"my novel2"}
          img={"https://th.bing.com/th/id/OIP.J2CLtLdio4J7WQ8wEZnTsAAAAA?pid=ImgDet&w=236&h=316&rs=1"}
        />
      ),
    },
    {
      card: (
        <NovelCard
          title={"my novel3"}
          img={"https://th.bing.com/th/id/OIP.10k-XUdPHsS6VvdxZk05RgHaJ5?pid=ImgDet&w=602&h=805&rs=1"}
        />
      ),
    },
    {
      card: (
        <NovelCard
          title={"my novel4"}
          img={"https://i.pinimg.com/736x/a6/6e/b8/a66eb8aa0bf3dea1589edce1b2074c6c.jpg"}
        />
      ),
    },
    {
      card: (
        <NovelCard
          title={"my novel5"}
          img={"https://librarynovel.com/wp-content/uploads/2021/06/post_1651008_image.jpg"}
        />
      ),
    },
    {
      card: (
        <NovelCard
          title={"my novel6"}
          img={"https://th.bing.com/th/id/OIP.mICfQi094FRiMAQuVlkc4QHaKw?pid=ImgDet&w=720&h=1046&rs=1"}
        />
      ),
    },
    {
      card: (
        <NovelCard
          title={"my novel7"}
          img={"https://th.bing.com/th/id/OIP.vgLTCu5kgTT8ERsGLt3kPwAAAA?pid=ImgDet&rs=1"}
        />
      ),
    },
    {
      card: (
        <NovelCard
          title={"my novel8"}
          img={"https://pm1.narvii.com/8017/5cfcf41aeb1e3ea9f216b866f4b8cb79ba7b62b3r5-600-899_00.jpg"}
        />
      ),
    },
  ]);

  const handleNextClick = () => {
    if (startIndex === (novelCards.length - 5)) {
      setStartIndex(0);
      setEndIndex(5);
    } else {
      setStartIndex(startIndex + 1);
      setEndIndex(endIndex + 1);
    }
  };
  const handlePrevClick = () => {
    if (startIndex === 0) {
      setStartIndex(novelCards.length - 5);
      setEndIndex(novelCards.length);
    } else {
      setStartIndex(startIndex - 1);
      setEndIndex(endIndex - 1);
    }
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
            <button
              onClick={handlePrevClick}
              class="inline-flex items-center uppercase font-bold bg-sky-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-sky-700 rounded text-base mt-4 md:mt-0"
            >
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
        <div class="flex mt-4 gap-4">
          {novelCards.slice(startIndex, endIndex).map((novelCard) => {
            return (
              <div className="">
                {novelCard.card}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
