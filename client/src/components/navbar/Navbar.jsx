import { Link, NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `hover:text-[#008AFF] transition-colors duration-300 ease-in-out ${
    isActive ? "text-cyan-600" : "text-[#222D39]"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `w-full text-center py-[18px] hover:text-[#008AFF] hover:bg-blue-200  transition-all duration-300 ease-in-out ${
    isActive ? "text-cyan-600" : "text-[#222D39]"
  }`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between px-5 py-5 relative">
      {/* Logo */}
      <div className="font-Poppins text-[20px] md:font-semibold md:text-[36px] text-[#FFB23E]">
        <Link to="/">Company Logo</Link>
      </div>

      {/* Desktop Nav */}
      <div className="font-HK_medium text-[18px] text-[#222D39] md:flex items-center space-x-15 hidden">
        {navLinks.map(({ to, label }) => (
          <NavLink key={to} to={to} className={linkClass}>
            {label}
          </NavLink>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-2.5">
        <button className="py-3 px-6.75 bg-[#3B71CA] rounded-[160px] font-Roboto font-medium text-[16px] leading-[160%] text-white shadow-[0px_4px_9px_rgba(59,113,202,0.5)]">
          Sign Up
        </button>
        <button className="py-3 px-6.75 border-2 border-[#3B71CA] rounded-[160px] font-Roboto font-medium text-[16px] leading-[160%] text-[#3B71CA] hover:bg-[#3B71CA] hover:text-white transition-colors duration-300">
          Log In
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="text-xl"
        >
          {showMenu ? <FaXmark /> : <FaBars />}
        </button>

        {/* Animated mobile menu */}
        <div
          className={`font-HK_medium text-[18px] absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center z-50 border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out
            ${showMenu ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setShowMenu(false)}
              className={mobileLinkClass}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
