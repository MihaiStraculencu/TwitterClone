import { deleteDoc, doc } from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { UserContext } from "../contexts/UserProvider";
import { useGetUser } from "../hooks/useGetUser";

export function Tweet({
  tweet,
  isDetails = false,
}: {
  tweet: any;
  isDetails?: boolean;
}) {
  const currentUser = useContext(UserContext);

  const author = useGetUser(tweet.author);

  const nickName = author ? author.nickname : "";

  const authorIsCurrentUser = currentUser
    ? currentUser.email === tweet.author
    : false;

  return (
    <div className="min-h-[400px] px-4 py-2 border rounded-2xl bg-white flex flex-col w-full hover:bg-slate-100 justify-between">
      <div className="">
        <div className="flex space-x-1 text-black justify-between items-center">
          <div className="flex justify-center items-center space-x-4 w-full">
            <div>
              <img
                src={author?.photoURL || "/images/placeholder-avatar.jpeg"}
                alt="avatar"
                className="inline-block h-12 w-14 rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div className="text-base text-black font-semibold md:block hidden">
                  {tweet.author}
                </div>

                <div>
                  {new Date(
                    tweet.createdAt.seconds * 1000
                  ).toLocaleDateString()}
                </div>
              </div>

              <div className="text-xs text-black ">{nickName}</div>
            </div>
          </div>

          {authorIsCurrentUser && !isDetails ? (
            <CardMenu id={tweet.id} />
          ) : null}
        </div>

        <div className="p-4 font-montserrat text-lg break-words resize-none select-text">
          {tweet.body}
        </div>
      </div>

      {!isDetails ? (
        <Link
          to={!isDetails ? `/tweet/details/${tweet.id}` : "#"}
          className={`w-full ${!isDetails ? "" : "cursor-auto"}`}
        >
          <button className="bg-indigo-600 text-white text-lg rounded-lg p-3 w-full">
            View Comments
          </button>
        </Link>
      ) : null}
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
            onClick={() => navigate(`/tweet/edit/${id}`)}
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
      ) : null}
    </div>
  );
}
