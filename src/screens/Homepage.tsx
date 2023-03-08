import Tweets from "../pages/Tweets";

export const Home = () => {
  return (
    <div className="min-h-1080 flex justify-center space-x-4 space-y-16">
      <div className="flex w-[720px] h-fit flex-col rounded px-15 space-y-5 justify-center py-20 ">
        <Tweets />
      </div>
      <div></div>
    </div>
  );
};
