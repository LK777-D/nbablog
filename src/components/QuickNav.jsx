import { Link } from "react-router-dom";

const QuickNav = () => {
  return (
    <aside className="text-white p-4 rounded-lg bg-zinc-900 min-w-[18rem] ">
      <h1 className="text-xl">Quick Navigation</h1>
      <div className=" bg-zinc-600 w-full h-[2px] mb-6 mt-2 "></div>
      <div className="my-5">
        <h1 className="text-[1.2rem]">Our Website</h1>
        <div className=" bg-zinc-600 w-full h-[2px] my-2 "></div>
        <div className="flex flex-col gap-1 ">
          <Link className=" px-2 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out">
            Home
          </Link>
          <Link className=" px-2 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out">
            {" "}
            Quiz{" "}
          </Link>
          <Link className=" px-2 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out">
            LineUp Builder
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-[1.2rem]">Official Links</h1>
        <div className=" bg-zinc-600 w-full h-[2px] my-2 "></div>
        <div className="flex flex-col gap-1">
          <Link className=" px-2 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out">
            NBA
          </Link>
          <Link className=" px-2 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out">
            FIBA
          </Link>
          <Link className=" px-2 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out">
            EuroLeague
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default QuickNav;
