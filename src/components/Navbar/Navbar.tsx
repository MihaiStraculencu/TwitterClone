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
    <div className="flex justify-center">
      <div className="border-black items-center text-black bg-gradient-to-r from-blue-700 to-indigo-800 fixed w-full shadow-2xl h-[70px] flex justify-center space-x-20">
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
          Twutt
        </button>
      </div>
    </div>
  );
}
