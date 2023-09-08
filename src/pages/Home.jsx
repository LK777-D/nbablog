import { useState } from "react";
import Teams from "../components/Teams";
import Trending from "../components/Trending";
import allstar from "../assets/allstar.jpg";
import finals from "../assets/finals.jpg";
import mvp from "../assets/mvp.jpg";
import Showcase from "../UI/Showcase";
import Standings from "../components/Standings";
import Headlines from "../components/Headlines";
import MVPCard from "../UI/MVPCard";
import tatum from "../assets/tatum.jpg";
import doncic from "../assets/doncic.jpg";
import jokic from "../assets/jokic.jpg";
import morant from "../assets/morant.jpg";
import Header from "../components/Header";

const Home = () => {
  const [teams, setTeamImg] = useState([]);
  const [season, setSeason] = useState([]);

  const wikipediaLogoMap = new Map();

  teams.forEach((team) => {
    wikipediaLogoMap.set(team.Name, team.WikipediaLogoUrl);
  });

  season.forEach((team) => {
    const wikipediaLogoUrl = wikipediaLogoMap.get(team.Name);
    if (wikipediaLogoUrl) {
      team.WikipediaLogoUrl = wikipediaLogoUrl;
    }
  });

  const east = season.slice(0, 15);
  const west = season.slice(15, 30);

  return (
    <>
      <h1 className="text-zinc-300 text-xl text-center my-7 lg:text-3xl">
        Welcome to the Ultimate NBA Fan Hub!
      </h1>
      <Header />
      <h1 className="text-white font1 text-xl text-center lg:text-3xl my-3 underline">
        Discover 30 dynamic NBA teams
      </h1>

      <Teams setTeamImg={setTeamImg} />
      <Trending
        heading="Next Season Blog"
        img1={finals}
        img2={mvp}
        img3={allstar}
        text1="2023-2024 Season Finals Predictions."
        text2="2023-2024 Season MVP Race Odds."
        text3="NBA ALL-STAR 2024 - INDIANA."
        linktext="Read More"
      />
      <section className=" mb-5 w-11/12 h-auto autox flex flex-col gap-5 py-3  rounded-md  ">
        <h1 className="text-white text-xl text-center p-3 ">
          2023-2024 League MVP ? Experts Prediction
        </h1>
        <div className="flex flex-col md:flex-row gap-15 w-full min-h[10rem] ">
          <MVPCard
            player="Luka Doncic"
            img={doncic}
            shadow="doncicshadow"
            color="doncic"
            ppg="32.4"
            rpg="8.6"
            apg="8.0"
          />
          <MVPCard
            player="Jason Tatum"
            img={tatum}
            shadow="tatumshadow"
            color="tatum"
            ppg="30.1"
            rpg="8.8"
            apg="4.6"
          />
          <MVPCard
            player="Nikola Jokic"
            img={jokic}
            shadow="jokicshadow"
            color="jokic"
            ppg="24.5"
            rpg="11.8"
            apg="9.8"
          />
          <MVPCard
            player="Ja Morant"
            color="doncic"
            img={morant}
            shadow="jokicshadow"
            ppg="26.2"
            rpg="5.9"
            apg="8.1"
          />
        </div>
      </section>
      <div className="bg-zinc-500 h-[1px] w-11/12 autox "></div>
      <section className=" w-full my-10 md:flex md:items-center md:justify-around ">
        <Standings setSeason={setSeason} east={east} west={west} />
        <Headlines />
      </section>
      <div className="my-10">
        <Showcase text="Live Stats,News And Scores" bg="showbg1" />
      </div>
    </>
  );
};

export default Home;
