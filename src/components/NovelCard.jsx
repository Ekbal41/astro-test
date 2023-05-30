export default function NovelCard() {
  return (
    <div className="
        bg-white
        shadow
        rounded-md
        p-4
        relative

    ">
      <img
        src={"https://qph.cf2.quoracdn.net/main-qimg-e9e9891ad8c113351909e23d587301ed-lq"}
        alt="novel cover"
        className="
        rounded-md
        hover:opacity-75
        transition
        hover:scale-105
        "
      />
      <span className="
       absolute
       top-0
         right-0
         bg-red-500
         text-white
         px-2
         rounded

        ">
        New
      </span>
      <div className="
        text-gray-800
        absolute
        bottom-4
        right-4
        bg-sky-200
        pl-2
        pr-1
        height-8
        ml-2
        rounded-md        
        "
        
        >
        <p>Status : Completed</p>
        <p>
          Chapter : 240 Total Views : 12k
        </p>
      </div>
    </div>
  );
}
