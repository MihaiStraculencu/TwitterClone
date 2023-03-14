import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center sticky top-0 z-50 pb-16">
      <div
        className={
          "border-black items-center bg-gradient-to-r from-blue-700 to-indigo-800 w-full shadow-2xl h-[70px] flex justify-center space-x-20 font-montserrat "
        }
      >
        <button
          onClick={() => navigate("/")}
          className="w-[100px] h-[30px] border-2 rounded-2xl text-slate-200"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/create")}
          className="w-[100px] h-[30px] border-2  rounded-2xl text-slate-200"
        >
          Twutt
        </button>
      </div>
    </div>
  );
}
