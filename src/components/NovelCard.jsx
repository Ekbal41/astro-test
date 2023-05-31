export default function NovelCard({ title, img, to }) {
  return (
    <a
    href={to}
    >
      <div className="
        bg-white
        shadow
        rounded-md
        p-4
        relative
        hover:shadow-lg
        transition
        hover:scale-105
        cursor-pointer
        

    ">
        <img
          src={img}
          alt="novel cover"
          className="
        rounded-md
        hover:opacity-75
        transition
        hover:scale-105
        "
          style={{
            height: "300px",
            width: "250px",
            border : "1px solid #e5e7eb",
          }}
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
        <div
          className="
        text-white
        absolute
        bottom-4
        right-4
        pl-2
        pr-1
        height-8
        ml-2
        rounded-md  
       
             
        "
          style={{
            fontFamily: "Roboto",
            background: "rgba(255, 255, 255, 0.25)",
            borderadius: 16,
            boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <p>Status : Completed</p>
          <p>
            Chapter : 240 Total Views : 12k
          </p>
          <p>{title}</p>
        </div>
      </div>
    </a>
  );
}
