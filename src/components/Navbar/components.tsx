import cookie from "cookiejs";
import { useNavigate } from "react-router";
import { auth } from "../../../firebase";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="px-4 h-[30px] border-2 rounded-2xl text-slate-200 hover:bg-white hover:text-black transition  delay-75 duration-100"
    >
      Home
    </button>
  );
};

export const Login = ({ user }: { user: string | null }) => {
  const navigate = useNavigate();

  return (
    <>
      {!user ? (
        <button
          onClick={() => navigate("/login")}
          className="px-4 h-[30px] border-2 rounded-2xl text-slate-200 hover:bg-white hover:text-black transition duration-75"
        >
          Login
        </button>
      ) : null}
    </>
  );
};

export const Logout = ({ user }: { user: string | null }) => {
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
          className="px-4 h-[30px] border-2 rounded-2xl text-slate-200 hover:bg-white hover:text-black transition  duration-75"
        >
          Logout
        </button>
      ) : null}
    </>
  );
};

export const Signup = ({ user }: { user: string | null }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/createNewUser")}
      className="px-4 h-[30px] border-2 rounded-2xl text-slate-200 hover:bg-white hover:text-black transition duration-75"
    >
      Create new user
    </button>
  );
};

export const NewTweet = ({ user }: { user: string | null }) => {
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <button
          onClick={() => navigate("/create")}
          className="px-4 h-[30px] border-2 rounded-2xl text-slate-200 hover:bg-white hover:text-black transition duration-75"
        >
          New Twutt
        </button>
      ) : null}
    </>
  );
};

export const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate("/about")}
        className="px-4 h-[30px] border-2 rounded-2xl text-slate-200 hover:bg-white hover:text-black transition duration-75"
      >
        About
      </button>
    </>
  );
};

export const Profile = ({ user }: { user: string | null }) => {
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <button
          onClick={() => navigate("/profile")}
          className="px-4 h-[30px] border-2 rounded-2xl text-slate-200 hover:bg-white hover:text-black transition duration-75"
        >
          Profile
        </button>
      ) : null}
    </>
  );
};
