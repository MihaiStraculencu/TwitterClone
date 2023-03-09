export default function Tweets() {
  return (
    <div className="space-y-8 pt-32">
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

function Tweet() {
  return (
    <div className="text-black text-2xl h-[400px] w-full flex justify-center">
      <div className="px-4 py-2 border rounded-2xl hover:to-blue-200 transition duration-200">
        <div className="flex space-x-1 justify-between items-center w-[570px]">
          <div className="flex justify-center items-center space-x-1">
            <button className="hover:bg-opacity-50 transition-all duration-1000 bg-opacity-0">
              <img
                src="images/profile.jpg"
                alt="avatar"
                className="inline-block h-12 w-12 rounded-full object-cover transition duration-100 hover:grayscale-[50%]"
              />
            </button>

            <div className="flex flex-col">
              <button className="text-base text-slate-300 font-semibold hover:underline">
                Straculencu Mihai
              </button>
              <div className="text-xs text-slate-300 ">@straculencumihai</div>
            </div>
          </div>
          <button>
            <img
              src="images/Vitejs.png"
              alt="logo"
              className="h-9 w-9 rounded-full object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

const Cardtd = () => {
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
};

const Cardlogo = () => {
  return (
    <div>
      <button>
        <img
          src="images/Vitejs.png"
          alt="logo"
          className="h-9 w-9 rounded-full object-contain"
        />
      </button>
    </div>
  );
};

function Likereplyshare() {
  return (
    <div>
      {" "}
      <div className="flex justify-between w-[240px] py-2 ">
        <button className="flex items-center justify-center hover:underline space-x-1 underline-offset-2 hover:bg-slate-200 hover:rounded-2xl rounded-2xl transition duration-100 h-[30px] w-[60px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <div className="text-sm font-bold text-slate-600">34</div>
        </button>
        <button className="flex items-center justify-center hover:underline space-x-1 underline-offset-2 hover:bg-slate-200 hover:rounded-2xl rounded-2xl transition duration-100 h-[30px] w-[70px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="blue"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
          <div className="text-sm font-bold text-slate-600">Reply</div>
        </button>
        <button className="flex items-center justify-center hover:underline space-x-1 underline-offset-2 hover:bg-slate-200 hover:rounded-2xl rounded-2xl transition duration-100 h-[30px] w-[100px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>

          <div className="text-sm font-bold text-slate-600">Copy link</div>
        </button>
      </div>
    </div>
  );
}
