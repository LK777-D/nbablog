import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const Teams = (props) => {
  const [teams, setTeams] = useState([]);

  const easternScrollContainerRef = useRef(null);
  const westernScrollContainerRef = useRef(null);

  const [scrollingEast, setScrollingEast] = useState(false);
  const [startXEast, setStartXEast] = useState(null);
  const [scrollLeftEast, setScrollLeftEast] = useState(0);

  const [scrollingWest, setScrollingWest] = useState(false);
  const [startXWest, setStartXWest] = useState(null);
  const [scrollLeftWest, setScrollLeftWest] = useState(0);

  const url =
    "https://api.sportsdata.io/v3/nba/scores/json/teams?key=cd61399be6684457bb4c48cf96634597";

  const fetchTeams = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const teamsData = await response.json();
      if (teamsData) {
        setTeams(teamsData);
        props.setTeamImg(teamsData);
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleMouseDownEast = (e) => {
    setScrollingEast(true);
    setStartXEast(e.pageX - easternScrollContainerRef.current.offsetLeft);
    setScrollLeftEast(easternScrollContainerRef.current.scrollLeft);
  };

  const handleMouseMoveEast = (e) => {
    if (!scrollingEast) return;
    e.preventDefault();
    const x = e.pageX - easternScrollContainerRef.current.offsetLeft;
    const walk = (x - startXEast) * 2;
    easternScrollContainerRef.current.scrollLeft = scrollLeftEast - walk;
  };

  const handleMouseUpEast = () => {
    setScrollingEast(false);
  };

  const handleMouseDownWest = (e) => {
    setScrollingWest(true);
    setStartXWest(e.pageX - westernScrollContainerRef.current.offsetLeft);
    setScrollLeftWest(westernScrollContainerRef.current.scrollLeft);
  };

  const handleMouseMoveWest = (e) => {
    if (!scrollingWest) return;
    e.preventDefault();
    const x = e.pageX - westernScrollContainerRef.current.offsetLeft;
    const walk = (x - startXWest) * 2;
    westernScrollContainerRef.current.scrollLeft = scrollLeftWest - walk;
  };

  const handleMouseUpWest = () => {
    setScrollingWest(false);
  };

  const easternTeams = teams.filter((team) => team.Conference === "Eastern");
  const westernTeams = teams.filter((team) => team.Conference === "Western");

  return (
    <section className="text-white m-h-96 py-5 flex flex-col justify-center gap-6 ">
      <h2 className="ml-5 text-xl text-zinc-200 ">Eastern Conference</h2>
      <div
        id="slide1"
        className="flex items-center gap-7  w-11/12 autox p-1 rounded-lg overflow-x-scroll scroll-smooth relative"
        ref={easternScrollContainerRef}
        onMouseDown={handleMouseDownEast}
        onMouseMove={handleMouseMoveEast}
        onMouseUp={handleMouseUpEast}
        onMouseLeave={handleMouseUpEast}
      >
        {easternTeams.map((eastTeam) => (
          <Link
            to={`/teams/${eastTeam.Key}`}
            key={eastTeam.TeamID}
            className="hover-scale flex flex-col items-center justify-center text-center"
          >
            <img
              src={eastTeam.WikipediaLogoUrl}
              className="w-16 h-16"
              alt={eastTeam.Name}
            />
            <span>
              {eastTeam.City} {eastTeam.Name}
            </span>
          </Link>
        ))}
      </div>
      <h2 className="ml-5 text-zinc-200 text-xl ">Western Conference</h2>
      <div
        id="slide2"
        className="flex items-center gap-7  w-11/12 autox p-1 rounded-lg overflow-x-scroll scroll-smooth relative"
        ref={westernScrollContainerRef}
        onMouseDown={handleMouseDownWest}
        onMouseMove={handleMouseMoveWest}
        onMouseUp={handleMouseUpWest}
        onMouseLeave={handleMouseUpWest}
      >
        {westernTeams.map((westTeam) => (
          <Link
            to={`/teams/${westTeam.Key}`}
            key={westTeam.TeamID}
            className=" hover-scale flex flex-col items-center justify-center text-center"
          >
            <img
              src={westTeam.WikipediaLogoUrl}
              className="w-16 h-16"
              alt={westTeam.Name}
            />
            <span>
              {westTeam.City} {westTeam.Name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Teams;
