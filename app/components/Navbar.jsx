import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Benefits", href: "#benefits" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed w-full bg-transparent flex justify-between items-center z-50 px-6 md:px-12 py-6">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src="" alt="Logo" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-12 border border-white rounded-md px-4 py-2">
        {navLinks.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-[#F97314] font-bold"
                  : "text-black hover:text-[#F97314]"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-black text-2xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full backdrop-blur-md bg-white/80 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } flex flex-col items-center py-6 space-y-4 md:hidden border-t border-gray-300`}
      >
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`${
              pathname === item.href ? "text-[#F97314] font-bold" : "text-black"
            } text-lg`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Contact Button */}
      <Link
        to="/contact"
        className="hidden md:block bg-[#F97314] hover:bg-orange-500 text-white px-4 py-2 rounded-md"
      >
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
