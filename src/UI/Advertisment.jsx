import { Link } from "react-router-dom";
import img from "../assets/gamead2.png";
import "./Advertisment.css";

const Ad = () => {
  return (
    <div className=" w-[22rem] h-[15rem]  mt-5 relative ">
      <img src={img} className="w-full h-full rounded-xl" />
      <div className=" flex rounded-lg flex-col adtext absolute top-[55%] left-[5%]  object-contain text-xl p-4 text-zinc-300 ">
        <span>Build Your Dream Lineup</span>
        <Link className="border text-center w-1/2 bg-zinc-800 ">Play</Link>
      </div>
    </div>
  );
};

export default Ad;
