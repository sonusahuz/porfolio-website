import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaGithub } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";

const skills = [
  {
    id: "1",
    icons: <AiFillHtml5 size={26} className=" text-red-400" />,
    name: "HTML",
  },
  {
    id: "2",
    icons: <DiCss3 size={26} className=" text-blue-600" />,
    name: "CSS",
  },
    {
    id: "3",
    icons: <SiTailwindcss size={26} className="text-[#3b82f680]" />,
    name: "Tailwind CSS",
  },
  {
    id: "4",
    icons: <BiLogoJavascript size={26} className=" text-yellow-600" />,
    name: "JavaScript",
  },
  {
    id: "5",
    icons: <BiLogoTypescript size={26} className=" text-blue-500" />,
    name: "TypeScript",
  },
  {
    id: "6",
    icons: <BiLogoReact size={26} className=" text-blue-500" />,
    name: "React.js",
  },
  {
    id: "7",
    icons: <BiLogoNodejs size={26} className=" text-green-800" />,
    name: "Node.js",
  },
  {
    id: "8",
    icons: <FaGithub size={26} />,
    name: "Git & GitHub",
  },
];
export default function Skills({ showMenuBar, setShowMenuBar }: any) {
  return (
    <div
      id="skills"
      className={`flex  items-center justify-center flex-wrap lg:h-screen h-auto w-full ${
        showMenuBar ? "blur-sm" : ""
      } mb-12`}
    >
      <div className="lg:w-[70%] about py-8 px-2 p-2 lg:p-20  h-auto mt-20 lg:mt-10">
        <div>
          <h1 className="font-extrabold text-3xl mb-4 lg:text-5xl text-center">
            Skills.
          </h1>
          <p className="text-center lg:text-[18px] text-[16px] mb-4">
            Here are a few technologies I've been working with recent.{" "}
          </p>
        </div>
        <ul className="flex items-center justify-center flex-wrap gap-4 lg:gap-8 mt-10">
          {skills.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-start gap-3 font-medium border p-4 rounded-2xl "
            >
              {item.icons}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
