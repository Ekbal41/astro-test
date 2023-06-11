import { useState } from "react";

export default function ReaderX() {
  const [theme, setTheme] = useState("white");
  const [fontSize, setFontSize] = useState(20);
  return (
    <>
      <div
        className="xl:p-8 "
        style={{
          backgroundColor: theme === "dark" ? "#0e0f0f" : "rgb(243,244,246)",
        }}
      >
        <div className="grid grid-cols-12">
          <div
            className="col-span-0 md:col-span-12 xl:col-span-1 p-4"
            style={{
              color: theme === "dark" ? "#999999" : "#272727",
            }}
          >
            <div className="flex flex-row gap-2 xl:flex-col">
              <button
                onClick={() => setTheme("white")}
                className="bg-white border p-4 h-6 md:h-10 w-10 rounded-full"
              >
              </button>
              <button
                className=" p-4 h-6 md:h-10 w-10 rounded-full border"
                onClick={() => setTheme("dark")}
                style={{
                  backgroundColor: "#272727",
                }}
              >
              </button>
              <button className="bg-indigo-200 p-4  h-6 md:h-10 w-10 rounded-full border">
              </button>
              <button className="bg-cyan-200 p-4 h-6 md:h-10 w-10 rounded-full border">
              </button>
              <button
                onClick={() => setFontSize(fontSize + 1)}
                className=" text-2xl md:mt-2  rounded-full flex justify-center item-top font-bold lg:mr-4"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize(fontSize - 1)}
                className="text-2xl md:mt-2 rounded-full flex justify-center item-center font-bold lg:mr-4"
              >
                A-
              </button>
            </div>
          </div>
          <div
            className="col-span-12 xl:col-span-10  p-4 mb-12 "
            style={{
              backgroundColor: theme === "dark" ? "#272727" : "#fff",
              color: theme === "dark" ? "#999999" : "#272727",
              fontSize: fontSize,
            }}
          >
            <div className="xl:mb-20 xl:mt-12 xl:ml-12 mb-8">
              <p className="font-bold">Chapter 4 : The Dragon Prince</p>
            </div>

            <div
              className="xl:ml-12 xl:mr-8 font-sans text-xl leading-9 "
              style={{
                fontSize: fontSize,
                lineHeight: "1.8",
              }}
            >
              The spectacle of many gods appearing in the Sea Realm last time
              might have occurred during the last ominous battle.<br />
              <br />{" "}
              However, today, in the Graveyard of Gods, all the gods gathered at
              the goddess' star tomb.<br />
              <br />
              The majestic divine shadows were extremely solemn.<br />
              <br /> Anyone who saw this scene would be shocked.<br />
              <br />{" "}
              As for Han Fei, he stood up calmly and cupped his hands.<br />
              <br />{" "}
              “Seniors, I didn't expect you to pay so much attention to
              me.<br />
              <br /> In that case, I'll get straight to the point.<br />
              <br />” Han Fei was slightly surprised, but not much
              surprised.<br />
              <br /> The Graveyard of Gods was full of buried gods.<br />
              <br />{" "}
              If their remnant souls were still here, they might pay attention
              to him, or they probably didn't just pay attention to him, but to
              everyone.<br />
              <br /> At this moment, a god couldn't wait.<br />
              <br />{" "}
              “Boy, you said you could help us enter the cycle of reincarnation?
              Are you serious?” Confidently, Han Fei raised his head and looked
              at the god who spoke.<br />
              <br /> “I am the current Human Emperor, Han Fei.<br />
              <br /> I always keep my word.<br />
              <br />{" "}
              If I say I can help you enter the cycle of reincarnation, I
              can.<br />
              <br />” A god said, “Why should I believe you?” Han Fei
              sneered.<br />
              <br />
              “Senior, do you have a choice? How long have you been sleeping
              here? Do you have any hope of reincarnation? If you do, you won't
              be willing to choose a successor and try to pass on all your
              knowledge.<br />
              <br />” Ads by Pubfuture A god said, “Since the Primordial Era,
            </div>
          </div>
          <div className="col-span-0 xl:col-span-1">
          </div>
        </div>
        <div className="flex justify-center gap-4 pb-12">
          <a
            href="/reader"
            className="inline-flex items-center uppercase font-bold bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0"
          >
            <i className="bi bi-caret-left-fill mr-2"></i>Previous{" "}
            <span className="hidden md:block">Chapter</span>
          </a>
          <button className="inline-flex items-center uppercase font-bold bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">
            Next <span className="hidden md:block">Chapter</span>
            <i className="bi bi-caret-right-fill ml-2"></i>
          </button>
        </div>
      </div>
    </>
  );
}
