export default function NovelCard() {
  return (
    <div className=" flex justify-start items-center flex-col mb-8">
      <img
        className="h-64 w-52 rounded-md shadow-md object-cover hover:opacity-75 transition duration-500 ease-in-out transform hover:border-2 hover:border-gray-300 border-2 border-white"
        src="/novelimg.JPEG"
        alt="placeholder"
      />
      <div className="mt-3 ">
        <div className="cursor-pointer hover:underline transition-all ease-in-out">
          <a href="/novel-details" className="">Nine Star Hegemon Body Art</a>
        </div>
        <div className="flex gap-2 text-yellow-500">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          (4.5)
        </div>
        <h4 className="capitalize">
          <i class="bi bi-stickies mr-2"></i>chapter 1124{" "}
        </h4>

        <p className="text-gray-400 text-sm">
          <i class="bi bi-clock text-slate-800 mr-2 text-sm"></i> 2 days ago
        </p>
      </div>
    </div>
  );
}
