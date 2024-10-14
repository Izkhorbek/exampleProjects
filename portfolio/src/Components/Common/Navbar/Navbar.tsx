import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import { NavbarItems } from "../../../assets/data/NavbarItems";
function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <div className="bg-[#171d32] h-[50px] md:h-[70px] w-full fixed z-10">
      {/* Title Upper Navbar  */}
      <div className="container flex text-white md:justify-between justify-center pt-4 gap-10">
        {/* Dark Switch */}
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
      text-center md:bg-transparent md:static md:mx-0 md:flex gap-20 text-xl"
        >
          {NavbarItems.map((navItem, index) => (
            <a
              href={`#${navItem.link}`}
              key={index}
              className="hover:translate-x-1 transition-all duration-300 tracking-tight"
            >
              <li className="text-md transition-all duration-300 md:mx-0 md:flex gap-6">
                {navItem.navName}
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
