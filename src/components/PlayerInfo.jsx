import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PlayerInfo.css";
const PlayerInfo = () => {
  const [players, setPlayers] = useState([]);
  const [teamStats, setTeamStats] = useState([]);
  const [logos, setLogos] = useState([]);
  const [games, setGames] = useState([]);
  const { team } = useParams();
  const url1 = `https://api.sportsdata.io/v3/nba/scores/json/Players/${team}?key=cd61399be6684457bb4c48cf96634597`;
  const url2 =
    "https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/2023?key=cd61399be6684457bb4c48cf96634597";
  const url3 =
    "https://api.sportsdata.io/v3/nba/scores/json/teams?key=cd61399be6684457bb4c48cf96634597";

  const url4 =
    "https://api.sportsdata.io/v3/nba/scores/json/Games/2024?key=cd61399be6684457bb4c48cf96634597";

  const fetchPlayersByTeam = async () => {
    try {
      const response = await fetch(url1);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const playersData = await response.json();
      if (playersData) {
        setPlayers(playersData);
      }
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  const fetchTeamStats = async () => {
    try {
      const response = await fetch(url2);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const teamStatsData = await response.json();
      if (teamStatsData) {
        const matchingTeamStats = teamStatsData.find(
          (teamStat) => teamStat.Team === team
        );
        setTeamStats(matchingTeamStats);
      }
    } catch (error) {
      console.error("Error fetching team stats:", error);
    }
  };

  const fetchTeamLogos = async () => {
    try {
      const response = await fetch(url3);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const LogoData = await response.json();
      const matchTeamsLogos = LogoData.find((teamKey) => teamKey.Key === team);
      setLogos(matchTeamsLogos);
    } catch (error) {
      console.error("Error fetching logos:", error);
    }
  };
  const fetchMatches = async () => {
    try {
      const response = await fetch(url4);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const gamesData = await response.json();
      const teamGames = gamesData.filter(
        (game) => game.HomeTeam === team || game.AwayTeam === team
      );

      setGames(teamGames);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPlayersByTeam();
    fetchTeamStats();
    fetchTeamLogos();
    fetchMatches();
  }, []);

  const next10Games = games.slice(0, 10);
  console.log(next10Games);

  return (
    <div className="text-white text-center flex flex-col md:p-10 md:flex-row md:justify-around md:items-center items-center p-3 w-full min-h-screen gap-5 text-sm rounded-lg  ">
      <div className="flex-col gap-5 text-center  md:order-2 md:w-[25%]">
        <div className="text-xl flex flex-col items-center gap-5   text-center ">
          <div>
            <span>
              {teamStats.Name}{" "}
              <span>
                <span className="text-green-500">W</span> {teamStats.Wins}{" "}
                <span className="text-red-500">L</span> {teamStats.Losses}
              </span>
            </span>
          </div>
          <div className="flex gap-3">
            <span>PPG : {(teamStats.Points / 82 - 27).toFixed(1)}</span>
            <span>RPG : {(teamStats.Rebounds / 82 - 5).toFixed(1)}</span>
            <span>APG : {(teamStats.Assists / 82 - 4).toFixed(1)}</span>
          </div>
        </div>
        <img
          src={logos && logos.WikipediaLogoUrl}
          className="w-[17rem] h-[17rem] my-3 autox  "
        />
      </div>

      <div className="w-full md:order-1 md:w-[32%]">
        <h1 className="text-xl text-left">Roster 2023-2024 </h1>
        {players.map((player) => (
          <div
            key={player.PlayerID}
            className="flex transitionpl   gap-3 text-center w-full borderpl py-2 pl-1 cursor-pointer  "
          >
            <span>{player.YahooName}</span>
            <span>Position : {player.Position}</span>
            <span>#{player.Jersey}</span>
            <span>NBA Seasons : {player.Experience}</span>
          </div>
        ))}
      </div>
      <div className=" bg-zinc-900 p-4 text-left md:order-3 space-y-7 rounded-md flex-col gap-5  min-h-[30rem] md:w-[25%]  ">
        <h1 className="text-xl  ">Next 10 Games Schedule</h1>
        <div className="flex-col gap-5 space-y-4  ">
          {next10Games.map((game) => (
            <div key={game.GameID} className="flex gap-3  items-center ">
              <span>
                <span>{game.HomeTeam}</span> Vs <span>{game.AwayTeam}</span>
              </span>
              <span>
                Date : {new Date(game.DateTime).toISOString().split("T")[0]}
              </span>
              {game.Channel ? (
                <span> Streaming - {game.Channel}</span>
              ) : (
                <span>Streming - None</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
