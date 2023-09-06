import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <aside className="rounded-lg text-white bg-zinc-900 p-4 ">
      <h1>Popular NBA Topics</h1>
      <div className=" bg-zinc-600 w-full h-[2px] mb-6 mt-2 "></div>
      <div className="flex flex-col gap-3">
        <Link
          target="_blank"
          to="https://www.nba.com/"
          className=" px-3 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out"
        >
          Top 10 Plays Of 2023-2024 Season
        </Link>
        <Link
          target="_blank"
          to="https://www.nba.com/"
          className="px-3 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out"
        >
          The Evolution of the NBA Three-Pointer
        </Link>
        <Link
          target="_blank"
          to="https://www.nba.com/"
          className="px-3 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out"
        >
          NBA - Impact on Global Basketball
        </Link>
        <Link
          target="_blank"
          to="https://www.nba.com/"
          className="px-3 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out"
        >
          Player Spotlight: Paul Pierce
        </Link>
        <Link
          target="_blank"
          to="https://www.nba.com/"
          className="px-3 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out"
        >
          Greatest Rivalries
        </Link>
        <Link
          target="_blank"
          to="https://www.nba.com/"
          className="px-3 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out"
        >
          NBA Cares: Community Outreach
        </Link>
        <Link
          target="_blank"
          to="https://www.nba.com/"
          className="px-3 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out"
        >
          Olympic Games
        </Link>
        <Link
          target="_blank"
          to="https://www.nba.com/"
          className="px-3 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out"
        >
          Inside the NBA Bubble
        </Link>
        <Link
          target="_blank"
          to="https://www.nba.com/"
          className="px-3 py-1 hover:bg-zinc-800 transition-colors duration-300 ease-out"
        >
          2023 NBA Playoff Predictions
        </Link>
      </div>
    </aside>
  );
};

export default Popular;
