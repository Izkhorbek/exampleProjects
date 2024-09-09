import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";
import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";

function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="bg-[#171d32]">
      {/* Title Upper Navbar  */}
      <div className="container flex text-white md:justify-between justify-center pt-4 gap-10">
        {/* Image section */}
        <div>Portfolio --Image</div>
        {/* Dark Switch */}
        <DarkMode />
        {showMenu ? (
          <RiCloseLine
            size={30}
            className="md:hidden absolute right-6 top-4 transition-all duration-300"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="md:hidden absolute right-6 top-4 transition-all duration-300"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        )}
      </div>
      <nav
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-wrap justify-center items-center text-white px-10 pt-2 md:px-20`}
      >
        <ul
          className=" mx-24 py-2 font-semibold px-2 rounded-xl bg-opacity-30 md:border-none 
      text-center md:bg-transparent md:static md:mx-0 md:flex gap-10"
        >
          <Link to={"/about"}>
            <li className="text-md transition-all duration-300 md:mx-0 md:flex gap-6">
              About
            </li>
          </Link>
          <Link to={"/experience"}>
            <li className="text-md transition-all duration-300 md:mx-0 md:flex gap-6">
              Experience
            </li>
          </Link>
          <Link to={"/projects"}>
            <li className="text-md transition-all duration-300 md:mx-0 md:flex gap-6">
              Projects
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="text-md transition-all duration-300 md:mx-0 md:flex gap-6">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;