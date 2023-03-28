import { FaHtml5, FaCss3Alt, FaWpforms, FaReact } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import { AiOutlineUser } from 'react-icons/ai'
import { BiCube } from 'react-icons/bi'
import { VscSourceControl } from 'react-icons/vsc'

export default function About() {
  return (
    <div className="flex flex-col items-center h-full rounded-xl bg-opacity-20 text-white px-10 font-montserrat pb-12 gap-14">
      <h1 className="font-bold text-3xl text-center">Welcome to TwitterClone</h1>

      <p className="font-bold">
        TwitterClone is built using a range of powerful tools, including:
      </p>

      <div className="flex md:flex-row flex-wrap border-2 rounded-lg border-slate-300 p-5 gap-8 shadow-2xl items-center justify-center">
        <img src="images/html.png" className="w-16" />
        <img src="images/css.png" className="w-16" />
        <img src="images/typescript.png" className="w-16" />

        <img src="images/react.png" className="w-16" />

        <img src="images/tailwind.png" className="w-16" />

        <img src="images/firebase.png" className="w-10" />
        <img src="images/reactforms.png" className="w-16 rounded-xl" />
        <img src="images/github.png" className="w-16" />
      </div>

      <ul className=" md:grid md:grid-cols-2 flex flex-col gap-14">
        <li className="w-72">
          <FaReact size={35} className="float-left mr-2 text-blue-200 mt-1" />
          <strong className="text-[#fcca3f]">React</strong> - main framework to build the{' '}
          <strong className="text-[#fcca3f]">single-page application</strong>.
        </li>

        <li className="w-72">
          <FaHtml5 size={35} className="float-left mr-2 text-blue-200 mt-1" />
          <strong className="text-[#fcca3f]">HTML</strong> ({' '}
          <strong className="text-[#fcca3f]">tsx</strong> ) to structure the content and
          layout of the website.
        </li>

        <li className="w-72">
          <FaCss3Alt size={35} className="float-left  mr-2 text-blue-200 mt-1" />
          <strong className="text-[#fcca3f]">CSS</strong> and{' '}
          <strong className="text-[#fcca3f]">Tailwind</strong> to style the website for
          making it <strong className="text-[#fcca3f]">responsive </strong>on both desktop
          and mobile ( <strong className="text-[#fcca3f]">CSS box model</strong> &{' '}
          <strong className="text-[#fcca3f]">CSS Flexbox</strong> ).
        </li>

        <li className="w-72">
          <SiFirebase size={35} className="float-left mr-2 text-blue-200 mt-1" />
          <strong className="text-[#fcca3f]">Firebase</strong> and{' '}
          <strong className="text-[#fcca3f]">firestore </strong> (
          <strong className="text-[#fcca3f]">NoSQL</strong>) to store retrieve data for
          the website's features such as{' '}
          <strong className="text-[#fcca3f]">
            user authentication, user profiles, posts,
          </strong>{' '}
          and <strong className="text-[#fcca3f]">file uploads</strong>.
        </li>

        <li className="w-72">
          <BiCube size={35} className="float-left mr-2 text-blue-200 mt-1" />
          <strong className="text-[#fcca3f]">Modularity</strong>, designing components as
          atoms, molecules, cells and organisms.{' '}
          <strong className="text-[#fcca3f]">Local namespacing</strong> (less modules) to
          group related components and variables under a single file.
        </li>

        <li className="w-72">
          <FaWpforms size={35} className="float-left mr-2 text-blue-200 mt-1" />
          <strong className="text-[#fcca3f]">React-hook-form </strong>
          to handle <strong className="text-[#fcca3f]">form inputs</strong>,{' '}
          <strong className="text-[#fcca3f]">validations</strong>
          {''} and <strong className="text-[#fcca3f]">submission</strong> for features
          such as <strong className="text-[#fcca3f]">login</strong>,{' '}
          <strong className="text-[#fcca3f]">registration</strong>,{' '}
          <strong className="text-[#fcca3f]">password reset</strong> and{' '}
          <strong className="text-[#fcca3f]">profile update</strong>.
        </li>

        <li className="w-72">
          <AiOutlineUser size={35} className="float-left mr-2 text-blue-200 mt-1" />
          <strong className="text-[#fcca3f]">Firebase authentication</strong>, user roles,
          user profiles, profile photos, posts and comments.
        </li>

        <li className="w-72">
          <VscSourceControl size={35} className="float-left mr-2 text-blue-200 mt-1" />
          <strong className="text-[#fcca3f]">Git</strong> as{' '}
          <strong className="text-[#fcca3f]">distributed version control system</strong>.
          Focused on <strong className="text-[#fcca3f]">atomic commits</strong>,
          <strong className="text-[#fcca3f]"> pull requests</strong>,
          <strong className="text-[#fcca3f]"> human readable history</strong>.
        </li>
      </ul>

      <h1 className="font-bold text-xl">
        If you would like to test the app, contact me at:
      </h1>

      <div className="flex md:flex-row flex-col border-b-4  border-slate-300 pb-8 gap-8 w-fit">
        <a
          className="flex items-center space-x-2 hover:underline"
          target="_blank"
          href="https://www.linkedin.com/in/straculencu-mihai/"
        >
          <img src="images/linkedin.png" className="w-12 bg-white p-1 rounded-lg" />

          <div>Linked in</div>
        </a>

        <a
          className="flex items-center space-x-2 hover:underline"
          target="_blank"
          href="https://github.com/MihaiStraculencu"
        >
          <img src="images/github.png" className="w-12 bg-white p-1 rounded-lg" />
          <div>Github</div>
        </a>

        <span className="flex items-center space-x-2">
          <img src="images/gmail.png" className="w-12 bg-white p-1 rounded-lg" />
          <div className="text-sm">mihaistraculencu83@gmail.com</div>
        </span>
      </div>
    </div>
  )
}
