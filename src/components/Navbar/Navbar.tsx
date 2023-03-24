import { useEffect, useState } from "react";
import { useGetCurrentUser } from "../../hooks/useGetCurrentUser";
import {
  About,
  Home,
  Login,
  Logout,
  NewTweet,
  Profile,
  Signup as CreateNewUser,
} from "./components";

export default function Navbar() {
  const currentUser = useGetCurrentUser();

  const [user, setUser] = useState<any>(null);

  console.log(user && user.isAdmin);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <div className="bg-indigo-800 opacity-95 fixed sm:space-y-4  sm:items-center justify-end shadow-2xl font-montserrat w-full z-50 py-4 px-5 md:flex flex-col hidden">
      <div className="hidden sm:flex space-x-4">
        <Home />
        <NewTweet user={user} />
        <About />
        <Profile user={user} />
        <Login user={user} />
        <Logout user={user} />
        {user && user.isAdmin ? <CreateNewUser user={user} /> : null}
      </div>
      {user ? (
        <span className="text-white hidden sm:flex">
          Logged in as: {user.email}
        </span>
      ) : null}
    </div>
  );
}
