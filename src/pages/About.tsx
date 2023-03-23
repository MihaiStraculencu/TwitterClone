import { BsFillTelephoneFill } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3Alt, FaWpforms } from "react-icons/fa";
import { SiTypescript, SiFirebase } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";

export default function About() {
  return (
    <div className="flex  flex-col items-center h-full rounded-xl bg-slate-300 bg-opacity-20 text-white p-6 font-montserrat pb-12">
      <h1 className="font-bold pb-16 text-3xl">Welcome to TweetClone</h1>

      <div className="space-y-10 items-center flex flex-col">
        <p className="font-bold">
          TweetClone is built using a range of powerful tools, including:
        </p>

        <div className="flex md:flex-row flex-wrap border-2 rounded-lg border-slate-300 p-5 gap-8 shadow-2xl items-center justify-center">
          <img src="images/html.png" className="w-16" />
          <img src="images/css.png" className="w-16" />
          <img src="images/typescript.png" className="w-16" />

          <img src="images/react.png" className="w-16" />

          <img src="images/tailwind.png" className="w-16" />

          <img src="images/firebase.png" className="w-10" />
          <img src="images/reactforms.png" className="w-16 rounded-xl" />
        </div>

        <ul className="p-10 md:grid md:grid-cols-2 flex flex-col gap-8 place-content-center">
          <li className="w-64">
            <FaReact size={35} className="float-left mr-2 text-blue-200 mt-1" />
            React to create{" "}
            <strong className="text-[#fcca3f]">
              {" "}
              reusable components{" "}
            </strong>{" "}
            that follow the atomic design principles of modularity and{" "}
            <strong className="text-[#fcca3f]">namespacing.</strong>
          </li>
          <li className="w-64">
            <SiTypescript
              size={35}
              className="float-left mr-2 text-blue-200 mt-1"
            />
            TypeScript to write type-safe code and leverage the{" "}
            <strong className="text-[#fcca3f]">VSCode outline</strong> feature
            for better navigation and organization.
          </li>
          <li className="w-64">
            <FaHtml5 size={35} className="float-left mr-2 text-blue-200 mt-1" />
            HTML and tsx to structure the content and{" "}
            <strong className="text-[#fcca3f]">layout of the website</strong>.
          </li>
          <li className="w-64">
            <FaCss3Alt
              size={35}
              className="float-left  mr-2 text-blue-200 mt-1"
            />
            CSS and Tailwind to{" "}
            <strong className="text-[#fcca3f]">style the website</strong> with
            custom properties, classes and utilities custom properties, classes
            and utilities
          </li>
          <li className="w-64">
            <SiFirebase
              size={35}
              className="float-left mr-2 text-blue-200 mt-1"
            />
            Firebase and firestore to store and retrieve data for the website's
            features such as{" "}
            <strong className="text-[#fcca3f]">
              user authentication, user profiles, posts,
            </strong>{" "}
            and <strong className="text-[#fcca3f]">file uploads </strong> .{" "}
          </li>
          <li className="w-64">
            <AiFillDatabase
              size={40}
              className="float-left  mr-2 text-blue-200 mt-1"
            />
            NoSQL principles to design the database schema with{" "}
            <strong className="text-[#fcca3f]">collections</strong> and{" "}
            <strong className="text-[#fcca3f]">documents</strong>.
          </li>
          <li className="w-64">
            <FaWpforms
              size={35}
              className="float-left mr-2 text-blue-200 mt-1"
            />
            React-hook-form to handle form inputs, validations and submission
            for features such as login, registration, password reset and profile
            update.
          </li>
        </ul>

        <h1 className="font-bold text-xl">
          If you would like to test the app, contact me at:
        </h1>

        <div className="flex md:flex-row flex-wrap border-2 rounded-lg border-slate-300 p-5 gap-8 w-full shadow-2xl">
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
