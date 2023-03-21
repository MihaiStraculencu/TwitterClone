import cookie from "cookiejs";
import { useNavigate } from "react-router";
import { auth } from "../../firebase";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";

export default function Navbar() {
  const user = useGetCurrentUser();

  return (
    <div className="flex justify-center sticky top-0 z-50 pb-16">
      <div
        className={
          "border-black items-center bg-indigo-700  opacity-95 fixed w-full shadow-2xl  flex justify-center font-montserrat py-4"
        }
      >
        <div className="flex flex-col space-y-4  items-center">
          <div className="flex space-x-4">
            <Home />
            <NewTweet user={user} />
            <About />
            <Profile user={user} />
            <Login user={user} />
            <Logout user={user} />
            <Signup user={user} />
          </div>
          {user ? (
            <span className="text-white">Logged in as: {user.email}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const Home = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="px-4 h-[30px] border-2 rounded-2xl text-slate-200"
    >
      Home
    </button>
  );
};

const Login = ({ user }: { user: string | null }) => {
  const navigate = useNavigate();

  return (
    <>
      {!user ? (
        <button
          onClick={() => navigate("/login")}
          className="px-4 h-[30px] border-2 rounded-2xl text-slate-200"
        >
          Login
        </button>
      ) : null}
    </>
  );
};

const Logout = ({ user }: { user: string | null }) => {
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <button
          onClick={() => {
            auth.signOut();
            cookie.remove("user");
            window.location.reload();
          }}
          className="px-4 h-[30px] border-2 rounded-2xl text-slate-200"
        >
          Logout
        </button>
      ) : null}
    </>
  );
};

const Signup = ({ user }: { user: string | null }) => {
  const navigate = useNavigate();

  return (
    <>
      {!user ? (
        <button
          onClick={() => navigate("/signup")}
          className="px-4 h-[30px] border-2 rounded-2xl text-slate-200"
        >
          Sign up
        </button>
      ) : null}
    </>
  );
};
const NewTweet = ({ user }: { user: string | null }) => {
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <button
          onClick={() => navigate("/create")}
          className="px-4 h-[30px] border-2 rounded-2xl text-slate-200"
        >
          New Twutt
        </button>
      ) : null}
    </>
  );
};

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate("/about")}
        className="px-4 h-[30px] border-2 rounded-2xl text-slate-200"
      >
        About
      </button>
    </>
  );
};

const Profile = ({ user }: { user: string | null }) => {
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <button
          onClick={() => navigate("/profile")}
          className="px-4 h-[30px] border-2 rounded-2xl text-slate-200"
        >
          Profile
        </button>
      ) : null}
    </>
  );
};
