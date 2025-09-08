import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "About", "Education", "Projects", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-[#0F1A2B] text-[#BDC4D4] z-50
      border-b-2 border-[#FDF6E3] shadow-[0_0_15px_#FDF6E3]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold tracking-wide text-[#FDF6E3] cursor-pointer transition"
        >
          Eman Qamar
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-bold">
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer relative group transition"
            >
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-80}
              >
                <span className="transition-colors group-hover:text-[#FDF6E3]">
                  {link}
                </span>
              </Link>
              {/* Bottom border hover effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FDF6E3] transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer text-[#FDF6E3]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.ul
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-[#1C2E4A] text-[#BDC4D4] flex flex-col space-y-4 p-6 font-bold"
        >
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="cursor-pointer relative group transition"
            >
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setOpen(false)}
              >
                <span className="transition-colors group-hover:text-[#FDF6E3]">
                  {link}
                </span>
              </Link>
              {/* Bottom border hover effect for mobile */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FDF6E3] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
