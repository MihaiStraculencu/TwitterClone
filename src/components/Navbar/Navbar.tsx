import { useState } from "react";
import { useNavigate } from "react-router";

export default function Navbar() {
  let navigate = useNavigate();
  const redirectClick = () => {
    let path = `/`;
    navigate(path);
  };

  const createTweet = () => {
    let path = `/create`;
    navigate(path);
  };

  return (
    <div className="flex justify-center ">
      <div className="border-black items-center text-black bg-indigo-400 fixed w-[700px] h-[50px] flex justify-evenly rounded-b-2xl">
        <button
          onClick={redirectClick}
          className="w-[100px] h-[30px] border border-white rounded-2xl text-white"
        >
          Home
        </button>
        <button
          onClick={createTweet}
          className="w-[100px] h-[30px] border border-white rounded-2xl text-white"
        >
          Tweet
        </button>
      </div>
    </div>
  );
}
