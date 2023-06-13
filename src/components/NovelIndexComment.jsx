import { useState } from "react";
import ChapterIndexComp from "./ChapterIndexComp";
export default function NovelIndexComment() {
  const [tab, setTab] = useState("about");
  return (
    <>
      <div className="px-4 mt-8">
        <div className="flex justify-start items-center gap-12 mb-8">
          <button
            onClick={() => setTab("about")}
            className={`text-3xl  font-bold transition-all duration-500 ease-in-out ${
              tab === "about"
                ? "border-b-4 border-green-500 text-slate-800"
                : " border-b-4 border-white text-slate-300"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setTab("index")}
            className={`text-3xl   font-bold transition-all duration-500 ease-in-out ${
              tab === "index"
                ? "border-b-4 border-green-500 text-slate-800"
                : " border-b-4 border-white text-slate-300"
            }`}
          >
            Table of Contents
          </button>
        </div>
        <div>
          {tab === "about"
            ? (
              <div>
                accusantium odio debitis veritatis, corporis adipisci aliquid
                porro eos est suscipit libero placeat id ab doloribus dolore
                deserunt numquam natus repellendus saepe! Porro, ratione! Harum
                eveniet dolores molestiae ea. Deleniti omnis, praesentium facere
                officiis impedit quam facilis, recusandae possimus dolore
                aspernatur aliquam cumque modi porro adipisci cupiditate!
                Exercitationem repellendus fuga culpa laboriosam vel! Totam
                ducimus, beatae corporis unde aut temporibus nostrum. Aperiam
                facilis, sed quia officia ad eaque consequatur voluptatum
                possimus nulla asperiores rerum tenetur et magni voluptate
                incidunt vero ducimus est quisquam sequi corporis dignissimos
                odit excepturi. Libero aliquid dolores neque iure totam
                exercitationem, atque optio laboriosam blanditiis vel eum culpa
                labore ut sunt facilis consequuntur? Nobis, corrupti cumque
                facere aliquid, non nostrum qui libero totam praesentium alias
                reprehenderit repellat. Culpa quibusdam sequi vitae, sint ab
                architecto doloribus, tempore minima sed illum hic eum a!
                Repudiandae exercitationem atque mollitia corporis, nobis
                reprehenderit cumque quos modi minus sequi quasi minima eaque
                numquam aliquid amet ratione similique perspiciatis perferendis
                ipsum veritatis nulla voluptatum! Ex quod numquam pariatur
                culpa. Exercitationem ad quo reiciendis deleniti sit ex
                accusantium, id odio expedita accusamus quibusdam eveniet ab
                temporibus ea corrupti doloribus, reprehenderit voluptate
                molestias. Obcaecati facilis voluptates beatae, qui sunt a quos
                similique nihil officia commodi harum voluptas eum hic et eos
                doloribus, deleniti nam neque quod necessitatibus praesentium
                quas? Perferendis laborum voluptatibus magnam obcaecati quia
                placeat. Excepturi explicabo ea quae.
              </div>
            )
            : <ChapterIndexComp />}
        </div>
      </div>
    </>
  );
}
