import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi"; 
import dpImage from "../assets/dp.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 bg-[#0F1A2B] text-[#BDC4D4] pt-20 overflow-hidden">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center md:text-left relative z-10"
      >
        <p className="text-lg font-semibold text-[#D1CFC9] tracking-widest uppercase">
          Welcome to my zone
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-[#BDC4D4]">
          Hi, I'm{" "}
          <span className="text-[#FDF6E3]">
            <Typewriter
              words={["Eman Qamar", "a Front-End Developer", "UI/UX Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-xl leading-relaxed text-[#D1CFC9]">
          A passionate{" "}
          <span className="font-semibold text-[#FDF6E3]">Front-End Developer</span> skilled in{" "}
          <span className="text-[#FDF6E3] font-semibold">React, JavaScript, and UI/UX design</span>. 
          I build engaging, responsive, and modern web experiences.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:emanqamar.17@gmail.com"
            className="bg-[#1C2E4A] text-[#BDC4D4] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#52677D] hover:shadow-[#52677D]/50 transition backdrop-blur-sm"
          >
            Contact Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="/Eman-QamarResume.pdf"
            download="Eman_Qamar_Resume.pdf"
            className="flex items-center gap-2 bg-[#D1CFC9] text-[#0F1A2B] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#BDC4D4] hover:shadow-[#1C2E4A]/50 transition backdrop-blur-sm"
          >
            <FiDownload className="text-lg" />
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Right Content (Profile Image with Neon Effect) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex-1 flex justify-center mt-10 md:mt-0 relative z-10"
      >
        <div className="relative">
          <img
            src={dpImage}
            alt="Eman Qamar"
            className="w-72 h-72 object-cover rounded-full border-4 border-[#52677D] shadow-[0_0_40px_#52677D] hover:scale-105 transition"
          />
          <div className="absolute inset-0 rounded-full border-4 border-[#1C2E4A] blur-lg opacity-60 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
