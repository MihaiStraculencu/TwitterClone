import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../../firebase";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../hooks/useGetUser";

export default function Tweets() {
  const [tweets, setTweets] = useState<any[]>([]);
  const [loader, setLoader] = useState(true);

  const navigate = useNavigate();
  const user = useGetCurrentUser();

  useEffect(() => {
    const tweetsRef = collection(db, "tweets");
    const q = query(tweetsRef, where("deleted", "==", false));

    getDocs(q)
      .then((querySnapshot) => {
        const docsArray: any[] = [];

        querySnapshot.forEach((doc) => {
          docsArray.push({ ...doc.data(), id: doc.id });
        });

        setTweets(
          docsArray.sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
        );
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loader)
    return (
      <div className="flex justify-center items-center pt-32 text-white">
        Loading...
      </div>
    );

  return (
    <div className="space-y-8 w-[640px] flex flex-col justify-center items-center">
      {user ? (
        <button
          onClick={() => navigate("/create")}
          className="transition ease-in-out delay-100 bg-indigo-500  hover:scale-110 duration-150 text-white rounded-lg p-3"
        >
          New Tweet
        </button>
      ) : null}
      {tweets.length ? (
        tweets.map((tweet: any) => <Tweet key={tweet.body} tweet={tweet} />)
      ) : (
        <div className="flex justify-center items-center">
          <span className="text-white">No tweets</span>
        </div>
      )}
    </div>
  );
}

function Tweet({ tweet }: { tweet: any }) {
  const currentUser = useGetCurrentUser();

  const author = useGetUser(tweet.author);

  const authorIsCurrentUser = currentUser
    ? currentUser.email === tweet.author
    : false;
  const atName =
    author && author.firstName && author.lastName
      ? `@${author.firstName} ${author.lastName}`.replace(" ", "")
      : `@${tweet.author.split("@")[0]}`;

  return (
    <div className="min-h-[400px] px-4 py-2 border rounded-2xl bg-white flex flex-col w-full hover:bg-slate-100">
      <div className="flex space-x-1 text-black justify-between items-center">
        <div className="flex justify-center items-center space-x-4">
          <div>
            <img
              src={
                author?.profilePicture
                  ? author?.profilePicture
                  : "images/placeholder-avatar.jpeg"
              }
              alt="avatar"
              className="inline-block h-12 w-12 rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="text-base text-black font-semibold md:block hidden">
              {tweet.author}
            </div>
            <div className="text-xs text-black ">{atName}</div>
          </div>
        </div>

        {authorIsCurrentUser ? <CardMenu id={tweet.id} /> : null}
      </div>

      <div className="p-4 font-montserrat text-lg break-words resize-none">
        {tweet.body}
      </div>
    </div>
  );
}

function CardMenu({ id }: { id: string }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className=" rounded-xl flex items-center h-[40px] transition ease-out duration-150"
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
        <div className="absolute flex flex-col right-0 w-40 rounded-md shadow-lg border-2 border-slate-100 bg-white">
          <button
            onClick={() => navigate(`/edit/${id}`)}
            className="text-gray-700 px-4 py-2 text-sm hover:bg-slate-100"
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteDoc(doc(db, "tweets", id)).then(() => {
                window.location.reload();
              });
            }}
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
