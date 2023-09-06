import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { useState } from "react";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilDiscord } from "@iconscout/react-unicons";
import { UilYoutube } from "@iconscout/react-unicons";
import { UilSignin } from "@iconscout/react-unicons";

/* eslint-disable react/prop-types */

const Navbar = (props) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const redirectGame = `${props.user ? "/game" : "/auth"}`;
  const redirectQuiz = `${props.user ? "/nbaquiz" : "/auth"}`;

  const smNavClassName = ` $ bg-zinc-900 anim  md:hidden text-center p-5 w-[100vw] h-[calc(100vh-5rem)] absolute left-0 flex flex-col gap-10 top-[5rem] z-10`;

  return (
    <nav className="  sticky z-50 top-0 nav  flex  justify-around items-center h-[5rem]  text-white  bg-neutral-950  ">
      <div
        onClick={() => setNavIsOpen(!navIsOpen)}
        className=" md:hidden cursor-pointer flex flex-col gap-2"
      >
        <div className="bg-white w-[25px] h-[1px] "></div>
        <div className="bg-white w-[25px] h-[1px] "></div>
        <div className="bg-white w-[25px] h-[1px] "></div>
      </div>
      {navIsOpen && (
        <div className={smNavClassName}>
          <div>
            <h1 className="text-2xl  ">Website</h1>
            <div className=" w-10/12 h-[1px] autox mt-2 mb-5 bg-zinc-500 "></div>
            <div className="flex flex-col gap-3 items-center text-lg thin ">
              <NavLink
                onClick={() => setNavIsOpen(false)}
                className="hover:bg-zinc-800 w-full transition-colors duration-300 ease-out  "
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setNavIsOpen(false)}
                className="hover:bg-zinc-800 w-full transition-colors duration-300 ease-out  "
                to="nbaquiz"
              >
                Quiz
              </NavLink>
              <NavLink
                onClick={() => setNavIsOpen(false)}
                className="hover:bg-zinc-800 w-full transition-colors duration-300 ease-out  "
                to="game"
              >
                Game
              </NavLink>
              <NavLink
                onClick={() => setNavIsOpen(false)}
                className="hover:bg-zinc-800 w-full transition-colors duration-300 ease-out  "
                to="blog"
              >
                Blog
              </NavLink>
            </div>
          </div>
          <div>
            <h1 className="text-2xl  ">Official Links</h1>
            <div className=" w-10/12 h-[1px] autox mt-2 mb-5 bg-zinc-500 "></div>
            <div className="flex flex-col gap-3 items-center text-lg thin ">
              <NavLink
                onClick={() => setNavIsOpen(false)}
                className="hover:bg-zinc-800 w-full transition-colors duration-300 ease-out  "
                to="/"
              >
                NBA
              </NavLink>
              <NavLink
                onClick={() => setNavIsOpen(false)}
                className="hover:bg-zinc-800 w-full transition-colors duration-300 ease-out  "
                to="nbaquiz"
              >
                FIBA
              </NavLink>
              <NavLink
                onClick={() => setNavIsOpen(false)}
                className="hover:bg-zinc-800 w-full transition-colors duration-300 ease-out  "
                to="game"
              >
                EuroLeague
              </NavLink>
            </div>
          </div>
          <div className="border-t border-b p-2">
            {props.user ? (
              <button
                onClick={props.logout}
                className="hover:bg-zinc-800 w-full p-3 transition-colors duration-300 ease-out flex items-center justify-center autox text-xl"
              >
                Log Out <UilSignin size="35" />
              </button>
            ) : (
              <Link
                to="/auth"
                className="hover:bg-zinc-800 w-full p-3 transition-colors duration-300 ease-out flex items-center justify-center autox text-xl"
              >
                Log In <UilSignin size="35" />
              </Link>
            )}
          </div>
        </div>
      )}
      <div
        onClick={() => setNavIsOpen(false)}
        to="/"
        className="logo cursor-pointer h-[3rem] max-w-[4rem] items-center flex "
      >
        <img src={logo2} className="w-full h-full" />
        <span className="text-2xl">NBA</span>
      </div>
      <div className="flex gap-5 text-[1.1rem] ">
        <NavLink
          onClick={() => setNavIsOpen(false)}
          className="hover:text-zinc-400 transition-color duration-300 ease"
          to="/"
        >
          Home
        </NavLink>
        <span className="hidden md:inline">
          <NavLink
            onClick={() => setNavIsOpen(false)}
            className="hover:text-zinc-400 transition-color duration-300 ease"
            to={redirectQuiz}
          >
            Quiz
          </NavLink>
        </span>
        <NavLink
          onClick={() => setNavIsOpen(false)}
          className="hover:text-zinc-400 transition-color duration-300 ease"
          to={redirectGame}
        >
          Game
        </NavLink>

        <NavLink
          onClick={() => setNavIsOpen(false)}
          className="hover:text-zinc-400 transition-color duration-300 ease"
          to="blog"
        >
          Blog
        </NavLink>
      </div>
      <div className="hidden md:flex md:gap-2">
        <Link target="_blank" to="https://www.nba.com/">
          <UilFacebook
            size="35"
            className="text-zinc-100 hover:text-blue-500 hover:scale-110 transition-all duration-300 ease  "
          />
        </Link>
        <Link target="_blank" to="https://www.nba.com/">
          <UilInstagram
            size="35"
            className="text-zinc-100 hover:text-red-400 hover:scale-110 transition-all duration-300 ease  "
          />
        </Link>
        <Link target="_blank" to="https://www.nba.com/">
          <UilDiscord
            size="35"
            className="text-zinc-100 hover:text-purple-500 hover:scale-110 transition-all duration-300 ease  "
          />
        </Link>
        <Link target="_blank" to="https://www.nba.com/">
          <UilYoutube
            size="35"
            className="text-zinc-100 hover:text-red-700 hover:scale-110 transition-all duration-300 ease  "
          />
        </Link>
      </div>
      {props.user ? (
        <div className="flex items-center gap-3">
          <span className="hidden md:inline underline text-lg">
            {props.user.email && props.user?.email.split("@")[0]}
          </span>
          <button
            className="underline text-lg hover:text-zinc-400 transition-color duration-300 ease"
            onClick={props.logout}
          >
            Log Out
          </button>
        </div>
      ) : (
        <NavLink
          onClick={() => setNavIsOpen(false)}
          className="underline  px-3 py-1 "
          to="/auth"
        >
          Sign In
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
