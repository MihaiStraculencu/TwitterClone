export default function Tweet() {
  return (
    <div>
      <div className=" text-black text-2xl h-[400px] w-full flex justify-center">
        <div
          className="px-4 py-2 border rounded-2xl hover:to-blue-200
         transition duration-200"
        >
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
    </div>
  );
}
