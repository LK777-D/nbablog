import "./Header.css";
import img1 from "../assets/header1.jpg";
import img2 from "../assets/header2.jpg";
import img3 from "../assets/header3.jpg";
import { useState, useEffect } from "react";

const Header = () => {
  const [index, setIndex] = useState(0);

  const header = [
    {
      id: 1,
      img: img1,
      text: "Most Exciting NBA Platform You Can Find",
      className: `rounded-lg image scaled1 w-full h-full object-cover  `,
    },
    {
      id: 2,
      img: img2,
      text: "Team Rosters,Stats,Scores And News",
      className: `rounded-lg image scaled2 w-full h-full object-cover  `,
    },
    {
      id: 3,
      img: img3,
      text: "Ultimate NBA LineUp Game,Quiz And Blog About Our Favorite League",
      className: `rounded-lg image scaled3 w-full h-full object-cover  `,
    },
  ];

  useEffect(() => {
    // setScaleTrigger(true);
    const timerId = setTimeout(() => {
      if (index < header.length - 1) {
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setIndex(0);
      }
    }, 5000);

    return () => clearTimeout(timerId);
  }, [index]);

  return (
    <header className=" cont text-center relative cont text-white text-xl flex flex-col items-center justify-center  md:w-11/12 h-[15rem] md:h-[23rem] lg:h-[27rem] bgimg my-7 autox ">
      <img src={header[index].img} className={header[index].className} />
      <span className="absolute font-black bottom-[30%] left-[4%] text-[1.3rem] md:text-[1.7rem] lg:text-[2.5rem]  ">
        {header[index].text}
      </span>
    </header>
  );
};

export default Header;
