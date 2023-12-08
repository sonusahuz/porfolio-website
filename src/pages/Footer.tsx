import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
export const socialMediaLink = [
  {
    id: "1",
    icons: (
      <a href="https://sonusahu.hashnode.dev/" target="_blank">
        <FaHashnode className="cursor-pointer  hover:text-blue-900" size={20} />
      </a>
    ),
  },
  {
    id: "2",
    icons: (
      <a href="https://github.com/sonusahuz" target="_blank">
        <AiFillGithub className="cursor-pointer hover:text-black" size={22} />
      </a>
    ),
  },
  {
    id: "3",
    icons: (
      <a href="https://www.linkedin.com/in/sonusahuz/" target="_blank">
        <AiFillLinkedin
          className="cursor-pointer  hover:text-blue-600"
          size={22}
        />
      </a>
    ),
  },
  {
    id: "4",
    icons: (
      <a href="https://www.instagram.com/sonusahuz/" target="_blank">
        <AiFillInstagram
          className="cursor-pointer  hover:text-pink-500"
          size={22}
        />
      </a>
    ),
  },
];

export default function Footer() {
  return (
    <div className="flex items-center justify-center footer mt-36 mb-8">
      <div>
        <div>
          <h1 className="sonu text-center text-xl font-bold tracking-wider">
            Sonu Sahu
          </h1>
        </div>
        <div className="flex items-center justify-center gap-6 my-4">
          {socialMediaLink.map((item) => (
            <div key={item.id} className="">
              {item.icons}
            </div>
          ))}
        </div>
        <div className="">
          <h1 className="text-xs tracking-wider">
            Design & Built by{" "}
            <a
              href="https://www.linkedin.com/in/sonusahuz/"
              className=" text-deep-purple-700"
            >
              <span className="sonu"> Sonu Sahu</span>
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
