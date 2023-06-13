export default function ChapterIndexComp() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center border-b-2  pb-4">
          <div className="flex gap-4">
            <p className="font-bold">Latest Chapter :</p>
            <p className=" text-blue-500 hover:underline cursor-pointer">Chapter 29 - Oh Heavens</p>
          </div>
          <button>
            <i className="bi bi-sort-down-alt text-2xl font-bold"></i>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-12">
          <div
            className="flex gap-8 py-2 px-4"
            style={{
              borderBottom: "1px solid #e2e8f0",
            }}
          >
            <p className="mt-1">1</p>
            <div>
              <a className="text-md hover:underline cursor-pointer">
                Enemy Attack 
              </a>
              <p className="text-xs text-gray-400">3yr</p>
            </div>
          </div>
          <div
            className="flex gap-8 py-2 -50 px-4 "
            style={{
              borderBottom: "1px solid #e2e8f0",
            }}
          >
            <p className="mt-1">2</p>
            <div>
            <a className="text-md hover:underline cursor-pointer">
               Heavenly Vain
              </a>
              <p className="text-xs text-gray-400">3yr</p>
            </div>
          </div>
          <div
            className="flex gap-8 py-2 px-4 bg-gray-50"
            style={{
              borderBottom: "1px solid #e2e8f0",
            }}
          >
            <p className="mt-1">3</p>
            <div>
            <a className="text-md hover:underline cursor-pointer">
               Paramita of Revelation
              </a>
              <p className="text-xs text-gray-400">3yr</p>
            </div>
          </div>
          <div
            className="flex gap-8 py-2 bg-gray-50 px-4"
            style={{
              borderBottom: "1px solid #e2e8f0",
            }}
          >
            <p className="mt-1">4</p>
            <div>
            <a className="text-md hover:underline cursor-pointer">
                The Great Sage
              </a>
              <p className="text-xs text-gray-400">3yr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
