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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur vitae quam amet? Ea accusantium vel ex dolore aliquam
              laboriosam necessitatibus quis tempore ut ipsa voluptatem, iusto
              architecto saepe in quo quae placeat quibusdam consectetur
              molestiae nulla? Sequi aspernatur omnis cumque perferendis
              consequatur voluptatem voluptates consectetur, cupiditate dolorem
              enim repudiandae eum saepe nulla atque, dolore corporis impedit
              vel provident quo, officia ea nostrum. Est soluta expedita,
              reiciendis necessitatibus explicabo quaerat. Mollitia minus
              accusamus illo aliquid magnam esse, quibusdam dolorem ratione
              quasi ullam ducimus, beatae optio facilis qui quo provident
              inventore earum, voluptatum totam unde quis illum adipisci rem
              recusandae. Aut laboriosam minus accusamus laborum in ducimus
              tempore tempora officiis, quod necessitatibus excepturi porro
              laudantium amet hic! Tempora recusandae distinctio dicta, est
              accusantium natus dolorem blanditiis libero aperiam ad odit dolor
              tempore fuga adipisci, repudiandae nam! Corporis hic saepe
              asperiores? Porro recusandae tempora deleniti, expedita, soluta,
              voluptates beatae accusamus alias excepturi in voluptatibus iusto
              ab atque quibusdam neque provident veritatis. Doloremque, quo
              provident. Voluptatibus, ut quo! Accusamus consectetur ullam sint,
              animi maiores dolor, illo pariatur commodi saepe a, quisquam
              quibusdam repellendus. Omnis id totam, ratione libero debitis,
              dolorum perferendis molestiae sed ab earum in odit molestias
              similique ea cumque distinctio fugit quod rerum, sit architecto
              quis mollitia? Nostrum corporis, illum omnis ea ratione iusto iste
              non laudantium aliquam, culpa, nobis vitae accusantium! Quo nemo
              autem, quae repellat explicabo earum exercitationem assumenda
              numquam fugiat obcaecati dolorem eos voluptatibus saepe aliquid
              nostrum accusantium tempora sed, iure itaque fuga. Veniam, ratione
              dignissimos provident fugit illo, blanditiis cupiditate explicabo
              quas quisquam ullam cum commodi ut! Perspiciatis fugiat laboriosam
              corporis quisquam nemo ad sed, ea deleniti saepe ipsum nesciunt
              quia similique fugit rerum expedita nihil dolor nam ducimus eos?
              Magni est asperiores harum! Error sequi in enim nesciunt
              recusandae provident! Beatae non voluptates fugit eveniet
              repudiandae eaque ipsa ad tempore nihil aspernatur consequatur
              fugiat, commodi, laudantium alias facere quibusdam ducimus
              corrupti! Sapiente sequi veritatis, voluptatem in repellendus sint
              maxime magnam impedit inventore consequatur necessitatibus quasi
              quod, odit totam placeat amet quaerat eos ut officia. Iusto
              commodi necessitatibus, dicta iure expedita vel accusantium
              consequatur illo exercitationem accusamus laudantium distinctio
              saepe facilis ipsam quibusdam impedit blanditiis doloribus ex,
              nihil reiciendis libero? Iusto dicta in architecto odit quisquam
              ad. Obcaecati ipsam impedit possimus modi dolore minus suscipit.
              Explicabo nulla quis pariatur accusamus itaque totam nisi fuga
              iusto ratione voluptatem in, consectetur quibusdam? Quisquam,
              porro! Modi repellat accusamus ratione architecto impedit.

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
