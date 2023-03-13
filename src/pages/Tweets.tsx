import {
  collection,
  doc,
  getDoc,
  getDocs,
  Firestore,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, deleteTweet } from "../../firebase";
import { IoShareOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { uuid } from "uuidv4";

export default function Tweets() {
  const [tweets, setTweets] = useState<any[]>([]);

  useEffect(() => {
    const tweetsRef = collection(db, "tweets");
    const q = query(tweetsRef, where("deleted", "==", false));

    getDocs(q)
      .then((querySnapshot) => {
        const docsArray: any[] = [];

        querySnapshot.forEach((doc) => {
          docsArray.push(doc.data());
        });

        setTweets(docsArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="space-y-8 pt-32">
      {tweets.length ? (
        tweets.map((doc: any) => <Tweet doc={doc} />)
      ) : (
        <text className="flex justify-center items-center">
          <h1 className="text-white">No tweets</h1>
        </text>
      )}
    </div>
  );
}

function Tweet({ doc }: { doc: any }) {
  console.log(doc);

  return (
    <div className="h-[400px] flex justify-center">
      <div className="px-4 py-2 border rounded-2xl bg-white flex flex-col justify-between">
        <div className="flex space-x-1 text-black justify-between items-center w-[520px]">
          <div className="flex justify-center items-center space-x-1">
            <button className="hover:bg-opacity-50 transition-all duration-1000 bg-opacity-0">
              <img
                src="images/profile.jpg"
                alt="avatar"
                className="inline-block h-12 w-12 rounded-full object-cover transition duration-100 hover:grayscale-[50%]"
              />
            </button>
            <div className="flex flex-col">
              <button className="text-base text-black font-semibold hover:underline">
                Straculencu Mihai
              </button>
              <div className="text-xs text-black ">@straculencumihai</div>
            </div>
          </div>
          <CardMenu />
        </div>
        <div className="p-4 font-montserrat text-lg break-words resize-none w-[500px] h-[300px]">
          {doc.body}
        </div>
        <div className="flex justify-center py-4">
          <Likereplyshare />
        </div>
      </div>
    </div>
  );
}

function Cardtd() {
  return (
    <div>
      <button className="pb-2 ">
        <div className="flex space-x-2 text-sm text-slate-600 hover:underline underline-offset-2">
          <div>14:30</div>
          <div>Feb 28, 2023</div>
        </div>
      </button>
    </div>
  );
}

function Likereplyshare() {
  return (
    <div className="flex justify-center py-2 space-x-5 items-end">
      <button className="flex items-center justify-center space-x-1 underline-offset-2 rounded-xl hover:border-2 hover:bg-red-200 h-[30px] w-[60px]">
        <IoHeartOutline />
        <div className="text-sm font-bold text-slate-600">34</div>
      </button>
      <button className="flex items-center justify-center space-x-1 underline-offset-2 rounded-xl hover:border-2 hover:bg-cyan-100 h-[30px] w-[80px]">
        <IoChatboxEllipsesOutline />
        <div className="text-sm font-bold text-slate-600">Reply</div>
      </button>
      <button className="flex items-center justify-center space-x-1 underline-offset-2 rounded-xl hover:border-2 hover:bg-green-200 h-[30px] w-[110px]">
        <IoShareOutline />

        <div className="text-sm font-bold text-slate-600">Share link</div>
      </button>
    </div>
  );
}

function CardMenu() {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {};

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpen}
        className="hover:bg-slate-100 rounded-xl flex items-center h-[40px] transition ease-out duration-150"
      >
        <IconContext.Provider
          value={{
            color: "black",
            size: "25",
          }}
        >
          <BiDotsVerticalRounded />
        </IconContext.Provider>
      </button>
      {open ? (
        <div className="absolute flex flex-col right-0 w-40 rounded-md shadow-lg border-2 border-slate-100">
          <button className="text-gray-700 px-4 py-2 text-sm hover:bg-slate-100">
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-gray-700 px-4 py-2 text-sm hover:bg-slate-100"
          >
            Delete Tweet
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
