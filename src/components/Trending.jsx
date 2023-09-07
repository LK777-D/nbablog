import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const Trending = (props) => {
  return (
    <section className="text-white   min-h-[20rem]   flex flex-col gap-7 p-3 ">
      <h1 className="text-2xl underline ml-8">{props.heading}</h1>
      <div className=" h-auto w-full  text-center flex justify-center overflow-scroll  ">
        <div className=" min-w-[14rem] h-[10rem] text-sm p-2 md:min-w-[40rem] md:min-h-[40rem]  ">
          <img src={props.img1} className="w-full h-3/4  " />
          <span className="md:text-xl"> {props.text1} </span>
          <Link to="/blog" className="ml-3 text-green-200  ">
            {props.linktext}
          </Link>
        </div>
        <div className="flex md:flex-col md:h-[25rem] ">
          <div className=" min-w-[15rem] h-[10rem] md:min-w-[20rem] md:min-h-[20em] text-sm p-2 md:w-[15rem]  ">
            <img src={props.img2} className="w-full h-3/4  " />
            <span>{props.text2}</span>
            <Link to="/blog" className="ml-3 text-green-200">
              {props.linktext}
            </Link>
          </div>
          <div className=" min-w-[15rem] h-[10rem] md:min-w-[20rem] md:min-h-[20em] text-sm p-2 md:w-[15rem]  ">
            <img src={props.img3} className="w-full h-3/4  " />
            <span>{props.text3}</span>
            <Link to="/blog" className="ml-3 text-green-200">
              {props.linktext}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
