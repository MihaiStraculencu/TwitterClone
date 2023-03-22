import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import { useGetUser } from "../../hooks/useGetUser";
import {
  About,
  Home,
  Login,
  Logout,
  NewTweet,
  Profile,
  Signup,
} from "./components";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const user = useGetCurrentUser();

  return (
    <div className="md:hidden flex flex-col w-[50%] justify-center relative pb-10">
      <div className="fixed flex justify-end top-0 w-full z-50 bg-indigo-700 p-4">
        <div className="w-full flex justify-center text-3xl font-medium text-white pl-8">
          Twutt
        </div>
        <button className="" onClick={() => setOpen(!open)}>
          <BiDotsVerticalRounded color="white" size={35} />
        </button>
      </div>

      {open ? (
        <div className="flex fixed flex-col items-center right-0 w-[35%] rounded-b-md shadow-lg top-[67px] transition ease-in-out delay-150 bg-indigo-600 space-y-5 z-50 pb-4 pt-4">
          <Home />
          <NewTweet user={user} />
          <About />
          <Profile user={user} />
          <Login user={user} />
          <Logout user={user} />
          <Signup user={user} />
        </div>
      ) : null}
    </div>
  );
}
