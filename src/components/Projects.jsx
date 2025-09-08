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
      className="min-h-screen bg-[#0F1A2B] text-[#BDC4D4] px-6 py-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        {/* Hook line instead of "Projects" */}
        <h2 className="text-4xl font-extrabold text-[#FDF6E3] mb-6">
          Crafted with Code
        </h2>
        <div className="w-24 h-1 mx-auto mb-6 bg-[#FDF6E3] rounded"></div>
        <p className="text-lg text-gray-300">
          A showcase of creativity, skills, and problem-solving.
        </p>
      </motion.div>

      {/* Featured Project - Centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-16 bg-[#1C2E4A]/80 backdrop-blur-md border border-[#FDF6E3]/60 rounded-xl p-8 shadow-xl hover:shadow-[0_0_30px_#FDF6E3] hover:border-[#FDF6E3] transition text-center"
      >
        <h3 className="text-3xl font-bold text-[#FDF6E3] mb-4">
          {featuredProject.title}
        </h3>
        <div className="text-gray-300">{featuredProject.description}</div>
      </motion.div>

      {/* Other Projects - Horizontal Connected Boxes */}
      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#FDF6E3]/40"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-[97%] mx-auto bg-[#1C2E4A]/80 backdrop-blur-md border border-[#FDF6E3]/60 rounded-xl px-6 py-5 shadow-lg hover:shadow-[0_0_20px_#FDF6E3] hover:border-[#FDF6E3] transition text-center"
            >
              <h3 className="text-lg font-bold text-[#FDF6E3] mb-2">
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
