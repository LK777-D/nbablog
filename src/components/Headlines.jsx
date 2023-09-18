import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const initialHeadlines = 14;
const nextLoad = 4;

const Headlines = () => {
  const [news, setNews] = useState([]);
  const [shownHeadlines, setShownHeadlines] = useState(initialHeadlines);

  const url =
    "https://api.sportsdata.io/v3/nba/scores/json/News?key=057804f08a86405e99d2cd7ad4808994";

  const fetchNews = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const newsData = await response.json();

      if (newsData) {
        setNews(newsData);
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  const showMoreHandler = () => {
    setShownHeadlines((prevHeadlines) => prevHeadlines + nextLoad);
  };

  const showInitial = () => {
    setShownHeadlines(initialHeadlines);
  };

  return (
    <aside className="text-white autox my-5  md:m-0 flex flex-col gap-5 min-h-[15rem] w-[22rem]   bg-zinc-900 rounded-md p-4 ">
      <h1 className=" text-gray-400 text-3xl ">Headlines</h1>
      <div className="text-sm  ">
        {news.slice(0, shownHeadlines).map((news) => (
          <div
            className="border-y p-3 hover:bg-zinc-800 transition-colors duration-300 ease-out  "
            key={news.NewsID}
          >
            <Link target="_blank" to={news.Url}>
              {news.Title}
            </Link>
          </div>
        ))}
      </div>
      <div>
        {shownHeadlines < news.length ? (
          <button className="text-lg text-gray-400" onClick={showMoreHandler}>
            See more
          </button>
        ) : (
          <button onClick={showInitial} className="text-lg text-gray-400">
            See less
          </button>
        )}
      </div>
    </aside>
  );
};

export default Headlines;
