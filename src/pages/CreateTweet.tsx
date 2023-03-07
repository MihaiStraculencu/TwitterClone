import Cardtextarea from "../components/CardItem/TweetComponents/Cardtextarea";

const CreateTweet = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white text-black text-2xl h-[400px] w-[560px] flex rounded-xl justify-center hover:bg-gray-100 transition duration-200 border border-gray-300">
        <div className="px-4 py-2 ">
          <Cardtextarea />
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
