import "./BlogCard.css";

import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const BlogCard = (props) => {
  return (
    <Link target="_blank" to={props.link}>
      <div
        id="blogcard"
        className="text-white flex gap-2  max-w-[38rem]  items-start "
      >
        <div className=" w-[14rem] h-[8rem] ">
          <img src={props.image} className="w-full h-full" />
        </div>
        <div className="text-white-400 flex flex-col   text-sm   gap-1  font-extrabold w-full ">
          <h1 className="text-[1.07rem]">{props.heading}</h1>
          <p className="text-[0.85rem] text-zinc-400 ">{props.underText}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
