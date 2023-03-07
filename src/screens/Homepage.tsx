import CreateTweet from "../pages/CreateTweet";
import Tweets from "../pages/Tweets";
import { useNavigate } from "react-router";

export const Home = () => {
  let navigate = useNavigate();
  const redirectClick = () => {
    let path = `/create`;
    navigate(path);
  };
  return (
    <div className="min-h-1080 flex justify-center space-x-4">
      <div className="flex w-[720px] h-fit flex-col border border-gray-300 rounded px-15 space-y-5 py-20 ">
        <Tweets />
      </div>
      <div>
        <button
          onClick={redirectClick}
          className="w-[80px] bg-blue-500 hover:bg-blue-700 hover:border-blue-700 text-sm text-slate-100 py-2 px-2 rounded-2xl font-semibold duration-200"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
