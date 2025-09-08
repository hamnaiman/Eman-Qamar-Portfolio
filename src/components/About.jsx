import { motion } from "framer-motion";
import { FaCode, FaReact, FaPaintBrush } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#0F1A2B] text-[#BDC4D4] px-6 py-20"
    >
      <div className="max-w-5xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold">
          <span className="text-[#F5DEB3]">Who is</span>{" "}
          <span className="text-[#FFFFF0]">Eman Qamar</span>
          <span className="text-[#F5DEB3]">?</span>
        </h2>

        {/* Neon Underline */}
        <div className="w-24 h-1 mx-auto mt-3 mb-10 bg-[#FDF6E3] shadow-[0_0_10px_#FDF6E3,0_0_20px_#FDF6E3] rounded"></div>

        {/* Buttons (tags with icons) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="flex items-center gap-2 px-4 py-2 bg-[#1C2E4A] text-[#FDF6E3] font-semibold rounded-full text-sm shadow-md hover:shadow-[0_0_15px_#FDF6E3] transition">
            <FaCode className="text-[#FDF6E3]" /> Front-End Developer
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-[#1C2E4A] text-[#FDF6E3] font-semibold rounded-full text-sm shadow-md hover:shadow-[0_0_15px_#FDF6E3] transition">
            <FaReact className="text-[#61DAFB]" /> React Enthusiast
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-[#1C2E4A] text-[#FDF6E3] font-semibold rounded-full text-sm shadow-md hover:shadow-[0_0_15px_#FDF6E3] transition">
            <FaPaintBrush className="text-[#FDF6E3]" /> UI/UX Designer
          </span>
        </div>

        {/* Card with left neon border */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1C2E4A]/60 backdrop-blur-lg shadow-xl rounded-2xl p-8 md:p-12 text-left border-l-8 border-[#FDF6E3] shadow-[0_0_20px_#1C2E4A] max-w-3xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-justify text-[#D1CFC9]">
            I am a passionate{" "}
            <span className="font-semibold text-[#FDF6E3]">
              Front-End Developer
            </span>{" "}
            skilled in React, JavaScript, and modern UI/UX design. My goal is to
            bring ideas to life by building{" "}
            <span className="font-semibold text-[#FDF6E3]">responsive</span>,{" "}
            <span className="font-semibold text-[#FDF6E3]">user-friendly</span>, and{" "}
            <span className="font-semibold text-[#FDF6E3]">
              aesthetically pleasing
            </span>{" "}
            web applications. I believe in writing clean, maintainable code and
            constantly improving my skills to stay updated with the latest
            technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
