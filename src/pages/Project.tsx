import { AiFillGithub } from "react-icons/ai";
import { project } from "../utils/constants";
import { RiShareCircleFill } from "react-icons/ri";
export default function Project({ showMenuBar, setShowMenuBar }: any) {
  return (
    <div
      id="project"
      className={`flex items-center justify-center h-auto lg:h-auto flex-wrap ${
        showMenuBar ? "blur-sm" : ""
      }`}
    >
      <div>
        <h1 className="font-extrabold mb-4 lg:text-5xl text-3xl mt-20 xl:mt-24 lg:mt-10 text-center">
          Project.
        </h1>
        <div className="flex items-center justify-between flex-wrap gap-6">
          {project.map((item) => (
            <div
              key={item.id}
              className=" rounded my-3 lg:w-[350px] w-[335px] mx-auto md:mx-0 project"
            >
              <a href={item.url} className=" cursor-pointer" target="_blank">
                <img src={item.image} className="w-[450px] lg:w-96" />
              </a>
              <div className="flex items-center justify-between px-3 py-4">
                <h1 className="text-xl font-medium">{item.project_name}</h1>
                <div className="flex items-center justify-between gap-5">
                  <a href={item.code_url} target="_blank">
                    <AiFillGithub size={25} />
                  </a>
                  <a href={item.url} target="_blank">
                    <RiShareCircleFill size={25} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
