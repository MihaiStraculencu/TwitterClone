import { BsFillTelephoneFill } from "react-icons/bs";

export default function About() {
  return (
    <div className="flex  flex-col items-center h-full rounded-xl bg-slate-300 bg-opacity-20 text-white p-6 font-montserrat">
      <h1 className="font-bold pb-16 text-3xl">Welcome to Twutt</h1>

      <div className="space-y-10 items-center flex flex-col">
        <p className="font-bold">
          Twutt is built using a range of powerful tools, including:
        </p>

        <div className="flex md:flex-row flex-wrap border-2 rounded-lg border-black p-5 gap-8 shadow-2xl items-center justify-center">
          <img src="images/javascript.png" className="w-16 rounded-xl" />
          <img src="images/typescript.png" className="w-16" />

          <img src="images/react.png" className="w-16" />

          <img src="images/tailwind.png" className="w-16" />

          <img src="images/firebase.png" className="w-10" />
          <img src="images/reactforms.png" className="w-16 rounded-xl" />
        </div>

        <h1 className="font-bold text-2xl pt-12">Contact:</h1>

        <div className="flex md:flex-row flex-wrap border-2 rounded-lg border-black p-5 gap-8 w-full shadow-2xl">
          <a
            className="flex items-center space-x-2 hover:underline"
            target="_blank"
            href="https://www.linkedin.com/in/straculencu-mihai/"
          >
            <img src="images/linkedin.png" className="w-10" />

            <div>Straculencu Mihai</div>
          </a>

          <a
            className="flex items-center space-x-2 hover:underline"
            target="_blank"
            href="https://github.com/MihaiStraculencu"
          >
            <img src="images/github.png" className="w-10" />
            <div>MihaiStraculencu</div>
          </a>

          <span className="flex items-center space-x-2">
            <img src="images/gmail.png" className="w-10 hidden sm:block" />
            <div className="text-sm">mihaistraculencu83@gmail.com</div>
          </span>
        </div>
      </div>
    </div>
  );
}
