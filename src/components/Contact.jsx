import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0F1A2B] text-[#BDC4D4] px-6 py-12 md:py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#FDF6E3] mb-6"
        >
          Contact Me
        </motion.h2>
        <div className="w-24 h-1 mx-auto mb-8 md:mb-12 bg-[#FDF6E3] rounded"></div>

        {/* Intro */}
        <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12">
          Let’s connect! Feel free to reach out for collaborations or inquiries.
        </p>

        {/* Contact Details */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
          <p className="text-lg md:text-xl font-semibold text-[#FDF6E3]">
            Eman Qamar
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base">
            <FaEnvelope className="text-[#FDF6E3]" /> emanqamar.17@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base">
            <FaMapMarkerAlt className="text-[#FDF6E3]" /> Sargodha, Pakistan
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/emanqamar17"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1C2E4A]/80 border border-[#FDF6E3]/60 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_#FDF6E3] hover:border-[#FDF6E3] transition text-sm md:text-base"
          >
            <FaGithub className="text-[#FDF6E3]" />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://linkedin.com/in/emanqamar31"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1C2E4A]/80 border border-[#FDF6E3]/60 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_#FDF6E3] hover:border-[#FDF6E3] transition text-sm md:text-base"
          >
            <FaLinkedin className="text-[#FDF6E3]" />
            LinkedIn
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
