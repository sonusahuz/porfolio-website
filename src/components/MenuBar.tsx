import { IoClose } from "react-icons/io5";
import React from "react";
import { navbarLink } from "../utils/constants";
interface PropsTypes {
  onClose: (e: React.MouseEvent<SVGSVGElement>) => void;
  onMenuClose: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
export default function MenuBar({ onClose, onMenuClose }: PropsTypes) {
  return (
    <div className="flex w-[220px] items-start flex-col justify-start z-20 gap-10 px-4  fixed text-white pt-0 h-screen navbar">
      <IoClose
        className=" absolute ml-36 mt-10 cursor-pointer"
        onClick={onClose}
        size={30}
      />
      <ul className="pt-20 flex flex-col gap-6 text-xl tracking-wide font-medium">
        {navbarLink.map((item) => (
          <li key={item.url}>
            <a href={item.url} onClick={onMenuClose}>
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <a href="https://github.com/sonusahuz" onClick={onMenuClose}>
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
}
