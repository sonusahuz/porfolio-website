import { IoMenu, IoClose } from "react-icons/io5";
import { navbarLink } from "../utils/constants";
export default function Header({ showMenuBar, setShowMenuBar, onClose }: any) {
  return (
    <>
      {/* desktop navbar  */}
      <header
        className={`sm:px-4 lg:px-12 xl:px-40 header flex ${
          showMenuBar ? "blur-md" : ""
        } w-full fixed items-center justify-between lg:py-8 py-6 px-3`}
      >
        <div>
          <h1 className=" text-2xl font-extrabold">Sonu Sahu</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center justify-center gap-10">
            {navbarLink.map((nav) => (
              <li key={nav?.id}>
                <a href={nav?.url} className="active">
                  {nav?.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden xl:block">
          <a
            href={"https://github.com/sonusahuz"}
            className="profile border border-white py-2 px-4"
          >
            Github Profile
          </a>
        </div>
        <div className="lg:hidden flex items-center justify-center gap-3">
          <IoMenu
            size={30}
            className="cursor-pointer"
            onClick={() => setShowMenuBar(!showMenuBar)}
          />
        </div>
      </header>

      {/* mobile navbar menu  */}
      {showMenuBar && (
        <div className="flex w-[220px] items-start flex-col justify-start z-20 gap-10 px-4  fixed text-white pt-0 h-screen navbar">
          <IoClose
            className=" absolute ml-36 mt-10 cursor-pointer"
            onClick={onClose}
            size={30}
          />
          <ul className="pt-20 flex flex-col gap-6 text-xl tracking-wide font-medium">
            {navbarLink.map((item) => (
              <li key={item.url}>
                <a href={item.url} onClick={onClose}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
