import React from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

const projectsData = [
  {
    title: "AI-Enhanced E-Commerce Store (Final Year Project)",
    description:
      "3D virtual furniture store with AR previews using Three.js, AI-driven recommendations, and full MERN stack integration.",
  },
  {
    title: "Digital Clock Web App",
    description:
      "Responsive digital clock with AM/PM, date, and theme switching. Built with HTML, CSS, and JavaScript.",
  },
  {
    title: "Custom Video Player",
    description:
      "Custom JS video player with play/pause, tooltips, theme switching, and mobile-friendly controls.",
  },
  {
    title: "Calculator Web App",
    description:
      "Interactive calculator with keyboard input, backspace, theme switching, and error handling.",
  },
];

const featuredProject = {
  title: "To-Do List App",
  description: (
    <>
      A responsive task management app built with HTML, CSS, and JavaScript.
      <ul className="list-disc ml-6 mt-2 text-gray-300 text-sm">
        <li>Add, edit, delete, and search tasks</li>
        <li>Light/Dark theme with completed tasks view</li>
        <li>Optimized for mobile responsiveness</li>
      </ul>
      <a
        href="https://emanqamar17.github.io/To--do-app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-[#0F1A2B] bg-[#FDF6E3] px-4 py-2 rounded-lg font-semibold hover:bg-[#e5dfc7] transition"
      >
        <FaLink /> Live Demo
      </a>
    </>
  ),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 md:py-20 bg-[#0F1A2B] text-[#BDC4D4] px-4 sm:px-6"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-10 md:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FDF6E3] mb-4 md:mb-6">
          Crafted with Code
        </h2>
        <div className="w-20 md:w-24 h-1 mx-auto mb-6 bg-[#FDF6E3] rounded"></div>
        <p className="text-base sm:text-lg text-gray-300">
          A showcase of creativity, skills, and problem-solving.
        </p>
      </motion.div>

      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-12 md:mb-16 bg-[#1C2E4A]/80 backdrop-blur-md border border-[#FDF6E3]/60 rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-[0_0_30px_#FDF6E3] hover:border-[#FDF6E3] transition text-center"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FDF6E3] mb-3 md:mb-4">
          {featuredProject.title}
        </h3>
        <div className="text-gray-300 text-sm sm:text-base">
          {featuredProject.description}
        </div>
      </motion.div>

      {/* Other Projects */}
      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal line only on medium+ screens */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#FDF6E3]/40"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-[#1C2E4A]/80 backdrop-blur-md border border-[#FDF6E3]/60 rounded-xl px-5 py-4 sm:px-6 sm:py-5 shadow-lg hover:shadow-[0_0_20px_#FDF6E3] hover:border-[#FDF6E3] transition text-center"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#FDF6E3] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
