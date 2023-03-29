import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserProvider";
import { useGetUser } from "../../hooks/useGetUser";
import {
  About,
  Home,
  Login,
  Logout,
  NewTweet,
  Profile,
  CreateNewUser as CreateNewUser,
} from "./components";

export default function Navbar() {
  const currentUser = useContext(UserContext);
  console.log(currentUser);

  return (
    <div className="bg-indigo-800 opacity-95 fixed sm:space-y-4  sm:items-center justify-end shadow-2xl font-montserrat w-full z-50 py-4 px-5 md:flex flex-col hidden">
      <div className="hidden sm:flex space-x-4">
        <Home />
        <NewTweet user={currentUser} />
        <About />
        <Profile user={currentUser} />
        <Login user={currentUser} />
        <Logout user={currentUser} />
        {currentUser && currentUser.isAdmin ? (
          <CreateNewUser user={currentUser} />
        ) : null}
      </div>
      {currentUser ? (
        <span className="text-white hidden sm:flex">
          Logged in as: {currentUser.email}
        </span>
      ) : null}
    </div>
  );
}
