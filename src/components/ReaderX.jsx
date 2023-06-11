import { useEffect, useState } from "react";

export default function ReaderX() {
  const [theme, setTheme] = useState("white");
  const [fontSize, setFontSize] = useState(20);
  const [fontFam, setFontFam] = useState("Nunito Sans");

  const outerBg = (theme) => {
    if (theme === "white") {
      return "rgb(243,244,246)";
    } else if (theme === "dark") {
      return "#0e0f0f";
    } else if (theme === "paper") {
      return "#e5dbba";
    }
  };

  const innerBg = (theme) => {
    if (theme === "white") {
      return "#fff";
    } else if (theme === "dark") {
      return "#272727";
    } else if (theme === "paper") {
      return "#F4EAC9";
    }
  };

  const fontFamily = (fontFam) => {
    if (fontFam === "Nunito Sans") {
      return "Nunito Sans";
    } else if (fontFam === "Merriweather") {
      return "'Merriweather', serif";
    }
  };

  useEffect(() => {
    console.log("theme", theme);
    console.log("fontSize", fontSize);
  }, [theme, fontSize]);
  return (
    <>
      <div
        className="xl:p-8 "
        style={{
          backgroundColor: outerBg(theme),
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
                className={`bg-white  p-4 h-6 md:h-10 w-10 rounded-full flex justify-center items-center ${
                  theme === "white" ? "border-2 border-green-500" : "border"
                }`}
              >
                <i
                  className="bi bi-check-lg text-2xl mt-1  font-bold"
                  style={{
                    color: theme === "white" ? "#34D399" : "#fff",
                  }}
                >
                </i>
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`b  p-4 h-6 md:h-10 w-10 rounded-full flex justify-center items-center ${
                  theme === "dark" ? "border-2 border-green-500" : "border"
                }`}
                style={{
                  backgroundColor: "#272727",
                }}
              >
                <i
                  className="bi bi-check-lg text-2xl mt-1  font-bold"
                  style={{
                    color: theme === "dark" ? "#34D399" : "#272727",
                  }}
                >
                </i>
              </button>
              <button
                onClick={() => setTheme("paper")}
                className={`b  p-4 h-6 md:h-10 w-10 rounded-full flex justify-center items-center ${
                  theme === "paper" ? "border-2 border-green-500" : "border"
                }`}
                style={{
                  backgroundColor: "#F4EAC9",
                }}
              >
                <i
                  className="bi bi-check-lg text-2xl mt-1  font-bold"
                  style={{
                    color: theme === "paper" ? "#34D399" : "#F4EAC9",
                  }}
                >
                </i>
              </button>
            </div>
          </div>
          <div
            className="col-span-12 xl:col-span-8  p-4 pb-12 mb-12 rounded-sm"
            style={{
              backgroundColor: innerBg(theme),
              color: theme === "dark" ? "#999999" : "#272727",
              fontSize: fontSize,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            }}
          >
            <div className="xl:mb-20 xl:mt-12 xl:mx-12 mb-8 flex flex-col md:flex-row justify-between items-center ">
              <p className="font-bold">Chapter 4 : The Dragon Prince</p>
              <div className="flex justify-between items-center gap-4">
                <button
                  onClick={() => setFontFam("Nunito Sans")}
                  className={`transition-all duration-500 ease-in-out transform ${
                    fontFam === "Nunito Sans"
                      ? "border-b-2 border-green-500"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  Nunito Sans
                </button>
                <button
                  onClick={() => setFontFam("Merriweather")}
                  className={`transition-all duration-500 ease-in-out transform ${
                    fontFam === "Merriweather"
                      ? "border-b-2 border-green-500"
                      : "border-b-2 border-transparent"
                  }`}
                >
                  Merriweather
                </button>
                <button
                  onClick={() => setFontSize(fontSize - 1)}
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize(fontSize + 1)}
                >
                  A+
                </button>
              </div>
            </div>

            <div
              className="xl:mx-12 font-sans text-xl leading-9 "
              style={{
                fontSize: fontSize,
                lineHeight: "1.8",
                fontFamily: fontFamily(fontFam),
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
              <div className="flex justify-center gap-4 py-12">
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
          </div>
          <div className="col-span-12 xl:col-span-3">
            <div className="p-4 pb-12 mb-12 w-full">
              <h1
                className={`font-bold text-xl`}
                style={{
                  color: theme === "dark" ? "#999999" : "#272727",
                }}
              >
                Peoples thoughts
              </h1>
              <div>
                <input
                  type="text"
                  placeholder="Whats on your mind?"
                  className=" bg-slate-50  text-slate-700 capitalize  text-sm focus:outline-none pl-4 pr-8 py-3 mt-4 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
