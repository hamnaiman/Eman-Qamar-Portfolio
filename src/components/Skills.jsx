// Skills.jsx
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiCanva,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { icon: <SiHtml5 className="text-orange-500" />, label: "HTML5" },
        { icon: <SiCss3 className="text-blue-500" />, label: "CSS3" },
        { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
        { icon: <SiReact className="text-cyan-400" />, label: "React.js" },
        { icon: <SiTailwindcss className="text-sky-400" />, label: "Tailwind CSS" },
        { icon: <SiBootstrap className="text-purple-500" />, label: "Bootstrap" },
      ],
    },
    {
      title: "Backend (Learning)",
      skills: [
        { icon: <SiNodedotjs className="text-green-500" />, label: "Node.js" },
        { icon: <SiExpress className="text-gray-300" />, label: "Express.js" },
        { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { icon: <SiGit className="text-red-500" />, label: "Git" },
        { icon: <SiGithub className="text-gray-300" />, label: "GitHub" },
        { icon: <VscVscode className="text-blue-400" />, label: "VS Code" },
        { icon: <FaMicrosoft className="text-blue-600" />, label: "Microsoft Office" },
        { icon: <SiCanva className="text-cyan-500" />, label: "Canva" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0F1A2B] text-[#BDC4D4] px-4 sm:px-6 py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-[#FDF6E3] mb-4 sm:mb-6"
        >
          Skills That Empower
        </motion.h2>
        <div className="w-20 sm:w-24 h-1 mx-auto mb-6 sm:mb-8 bg-[#FDF6E3] rounded"></div>
        <p className="text-base sm:text-lg text-gray-300 mb-10 sm:mb-12">
          A blend of technical expertise, tools, and creative abilities.
        </p>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1C2E4A]/80 border border-[#FDF6E3]/50 rounded-xl p-6 sm:p-8 shadow-lg 
                         hover:shadow-[0_0_20px_#FDF6E3] hover:border-[#FDF6E3] 
                         transition transform hover:scale-105"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#FDF6E3] mb-4 sm:mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 sm:gap-2 text-center group"
                  >
                    <div className="text-4xl sm:text-5xl group-hover:scale-110 transition">
                      {skill.icon}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300">{skill.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 bg-[#1C2E4A]/80 border border-[#FDF6E3]/50 rounded-xl p-6 sm:p-8 shadow-lg 
                     hover:shadow-[0_0_20px_#FDF6E3] hover:border-[#FDF6E3] 
                     transition transform hover:scale-105 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#FDF6E3] mb-3 sm:mb-4">
            Other Skills
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Social Media Management, Research & Internet Analysis
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
