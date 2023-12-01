import { IoMenu } from "react-icons/io5";
import MenuBar from "./MenuBar";
import { navbarLink } from "../utils/constants";
export default function Header({ showMenuBar, setShowMenuBar }: any) {
  const handlerClose = () => {
    setShowMenuBar(false);
  };
  const closeNavbar = () => {
    setShowMenuBar(false);
  };
  return (
    <>
      <header
        className={`sm:px-4 md:px-12 lg:px-40 header flex ${
          showMenuBar ? "blur-md" : ""
        } w-full fixed items-center justify-between lg:py-8 py-6 px-3`}
      >
        <div>
          <h1 className=" text-2xl font-extrabold">Sonu Sahu</h1>
        </div>
        <div className="hidden md:block">
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
        <div className=" hidden lg:block">
          <a
            href={"https://github.com/sonusahuz"}
            className="profile border border-white py-2 px-4"
          >
            Github Profile
          </a>
        </div>
        <div className="md:hidden flex items-center justify-center gap-3">
          <IoMenu
            size={30}
            className="cursor-pointer"
            onClick={() => setShowMenuBar(!showMenuBar)}
          />
        </div>
      </header>
      {showMenuBar && (
        <MenuBar onClose={handlerClose} onMenuClose={closeNavbar} />
      )}
    </>
  );
}
