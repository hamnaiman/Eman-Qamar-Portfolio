import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F1A2B] text-[#BDC4D4] border-t border-[#FDF6E3]/40 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side - Name + CopyRight */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#FDF6E3]">
            © {new Date().getFullYear()} Eman Qamar
          </h3>
          <p className="text-sm text-gray-400">
            All Rights Reserved.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-[#FDF6E3] transition">
            Home
          </a>
          <a href="#education" className="hover:text-[#FDF6E3] transition">
            Education
          </a>
          <a href="#projects" className="hover:text-[#FDF6E3] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#FDF6E3] transition">
            Contact
          </a>
        </div>

        {/* Right Side - Socials */}
        <div className="flex gap-6">
          <a
            href="mailto:emanqamar.17@gmail.com"
            className="hover:text-[#FDF6E3] transition"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://github.com/emanqamar17"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FDF6E3] transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/emanqamar31"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FDF6E3] transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
