import { BsFillTelephoneFill } from "react-icons/bs";

export default function About() {
  return (
    <div className="flex justify-center pt-28">
      <div className="flex flex-col items-center bg-gradient-to-r from-blue-200 to-cyan-200 h-full w-[900px] rounded-xl shadow-2xl p-10 font-montserrat">
        <h1 className="font-bold pb-16 text-3xl">Welcome to Twutt</h1>
        <div className="space-y-10 items-center flex flex-col">
          <p className="font-bold">
            Twutt is built using a range of powerful tools and frameworks,
            including:
          </p>

          <div className="flex justify-between p-5 border-2 space-x-10 border-black rounded-lg shadow-2xl ">
            <img src="images/javascript.png" className="w-16" />
            <img src="images/typescript.png" className="w-16" />

            <img src="images/react.png" className="w-16" />

            <img src="images/tailwind.png" className="w-16" />

            <img src="images/firebase.png" className="w-10" />
          </div>
          <h1 className="font-bold text-2xl pt-12">Contact:</h1>
          <div className="grid border-2 rounded-lg border-black p-5 grid-cols-2 gap-8 pl-36 shadow-2xl">
            <div className="flex items-center space-x-2">
              <a href="https://www.linkedin.com/in/straculencu-mihai/">
                <img src="images/linkedin.png" className="w-10" />
              </a>
              <p>Straculencu Mihai</p>
            </div>
            <div className="flex items-center space-x-2">
              <a href="https://github.com/MihaiStraculencu">
                <img src="images/github.png" className="w-10" />
              </a>
              <p>MihaiStraculencu</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="images/gmail.png" className="w-10" />
              <p>mihaistraculencu83@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <BsFillTelephoneFill size={36} />
              <p>+40-0726688874</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
