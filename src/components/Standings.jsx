import { useEffect, useState } from "react";
/* eslint-disable react/prop-types */
const Standings = (props) => {
  const [eastIsOpen, setEastIsOpen] = useState(true);
  const [westIsOpen, setWestIsOpen] = useState(false);

  const url =
    "https://api.sportsdata.io/v3/nba/scores/json/Standings/2023?key=cd61399be6684457bb4c48cf96634597";

  const fetchSeasonData = async () => {
    const response = await fetch(url);
    const SeasonData = await response.json();
    if (SeasonData) {
      props.setSeason(SeasonData);
    }
  };
  useEffect(() => {
    fetchSeasonData();
  }, []);

  const changeToEast = () => {
    setEastIsOpen(true);
    setWestIsOpen(false);
  };
  const changeToWest = () => {
    setEastIsOpen(false);
    setWestIsOpen(true);
  };
  return (
    <div className="  text-white min-h-[15rem] autox md:m-0  flex flex-col gap-7 items-center mt-5 w-[25rem] ">
      <h1 className="text-white text-xl">2023-2024 Season Standings</h1>
      <div className="flex ">
        <button
          onClick={changeToEast}
          className=" w-[150px] h-[40px] border-l-2 border-t-2 border-b-2 hover:bg-gray-300 hover:text-black transition-colors duration-300 ease-out "
        >
          East
        </button>
        <button
          onClick={changeToWest}
          className=" w-[150px] h-[40px] border-2 hover:bg-gray-300 hover:text-black transition-colors duration-300 ease-out "
        >
          West
        </button>
      </div>
      <div className="flex justify-around w-full gap-10 ">
        <span>Team</span>
        <div className="flex gap-9">
          <span className=" text-green-500 ">W</span>
          <span className="text-red-500">L</span>
          <span className="text-yellow-500">%</span>
        </div>
      </div>
      <div className="w-full">
        {eastIsOpen &&
          props.east.map((team) => (
            <div
              key={team.Name}
              className=" p-3 flex w-10/12 autox justify-around borderup  "
            >
              <div className="flex items-center gap-1 w-full">
                <img
                  src={team.WikipediaLogoUrl}
                  className=" h-[30px] w-[30px]  "
                />
                <span>{team.Key}</span>
              </div>
              <div className="flex gap-5 ml-14">
                <span>{team.Wins}</span>
                <span>{team.Losses}</span>
                <span>{team.Percentage}</span>
              </div>
            </div>
          ))}
        {westIsOpen &&
          props.west.map((team) => (
            <div
              key={team.Name}
              className=" p-3 flex w-10/12 autox justify-around borderup  "
            >
              <div className="flex items-center gap-1 w-full">
                <img
                  src={team.WikipediaLogoUrl}
                  className=" h-[30px] w-[30px]  "
                />
                <span>{team.Key}</span>
              </div>
              <div className="flex gap-5 ml-14">
                <span>{team.Wins}</span>
                <span>{team.Losses}</span>
                <span>{team.Percentage}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Standings;
