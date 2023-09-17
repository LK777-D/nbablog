/* eslint-disable react/prop-types */
import { useState } from "react";
import logo2 from "../assets/logo2.png";

const Auth = (props) => {
  const [signIn, setSignIn] = useState(true);
  return (
    <section className="text-white flex flex-col gap-14 bg-zinc-800 p-12 rounded-lg h-auto w-[24.5rem] ">
      <div>
        <div className="w-[2rem] h-[4rem] flex items-center">
          <img src={logo2} className="w-full h-full" />
          <span className="text-4xl">NBA</span>
        </div>
        <h1 className="text-xl text-zinc-300">Sign In With Your E-mail</h1>
      </div>
      <div>
        {signIn && (
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <label className="text-zinc-300 text-lg ">E-mail</label>
              <input
                placeholder="example@email.com"
                type="text"
                className="bg-zinc-800 p-2 mb-5  outline-none bg- px-7 border-b border-b-zinc-600 "
                onChange={(e) => props.setLogInEmail(e.target.value)}
              />
            </div>
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              className="bg-zinc-800 p-2 mb-5  outline-none bg- px-7 border-b border-b-zinc-600 "
              onChange={(e) => props.setLogInPassword(e.target.value)}
            />
            <button
              onClick={props.login}
              className=" border rounded-md py-2 mt-5 hover:bg-gray-300 hover:text-black transition-colors duration-300 ease-out"
            >
              Sign In
            </button>
          </div>
        )}
        {signIn && (
          <h1 className="  mt-3 text-sm ">
            Dont Have an Account?
            <button
              onClick={() => setSignIn(false)}
              className="text-zinc-400 ml-2"
            >
              sign up
            </button>
          </h1>
        )}
        {!signIn && (
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <label className="text-zinc-300 text-lg ">E-mail</label>
              <input
                placeholder="exapmle@email.com"
                type="text"
                className="bg-zinc-800 p-2 mb-5  outline-none bg- px-7 border-b border-b-zinc-600 "
                onChange={(e) => props.setRegisterEmail(e.target.value)}
              />
            </div>
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              className="bg-zinc-800 p-2 mb-5  outline-none bg- px-7 border-b border-b-zinc-600 "
              onChange={(e) => props.setRegisterPassword(e.target.value)}
            />
            <button
              onClick={props.register}
              className=" border rounded-md py-2 mt-5 hover:bg-gray-300 hover:text-black transition-colors duration-300 ease-out"
            >
              Sign Up
            </button>
          </div>
        )}
        {!signIn && (
          <h1 className="  mt-3 text-sm ">
            Already Have an Account?
            <button
              onClick={() => setSignIn(true)}
              className="text-zinc-400 ml-2"
            >
              sign in
            </button>
          </h1>
        )}
      </div>
    </section>
  );
};

export default Auth;
