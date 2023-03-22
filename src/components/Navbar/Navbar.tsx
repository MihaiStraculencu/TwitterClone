import cookie from "cookiejs";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../../firebase";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import {
  About,
  Home,
  Login,
  Logout,
  NewTweet,
  Profile,
  Signup,
} from "./components";

export default function Navbar() {
  const user = useGetCurrentUser();

  return (
    <div className="bg-indigo-700 fixed sm:space-y-4  sm:items-center justify-end shadow-2xl font-montserrat w-full z-50 py-4 px-5 md:flex flex-col hidden">
      <div className="hidden sm:flex space-x-4">
        <Home />
        <NewTweet user={user} />
        <About />
        <Profile user={user} />
        <Login user={user} />
        <Logout user={user} />
        <Signup user={user} />
      </div>
      {user ? (
        <span className="text-white hidden sm:flex">
          Logged in as: {user.email}
        </span>
      ) : null}
    </div>
  );
}
