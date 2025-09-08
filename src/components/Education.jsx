import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      title: "Bachelor of Science in Information Technology",
      institute: "University of Sargodha",
      location: "Sargodha, Pakistan",
      year: "2020 - 2024",
      details: "Fresh Graduate | CGPA: 3.12 / 4.00",
    },
  ];

  const certificates = [
    {
      title: "Introduction to MERN Stack",
      provider: "Simplilearn SkillUp",
      year: "2025",
    },
    {
      title: "Fundamentals of Databases",
      provider: "Simplilearn",
      year: "2025",
    },
    {
      title: "Career Counseling & Placement Skills",
      provider: "CDC, University of Sargodha",
      year: "2023",
    },
    {
      title: "Web Development",
      provider: "e-Rozgar Program, University of Sargodha",
      year: "2023",
    },
    {
      title: "Productivity Bootcamp",
      provider: "Khudmukhtar Institute",
      year: "2023",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-[#0F1A2B] text-[#BDC4D4] px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 text-4xl font-extrabold text-center text-[#FDF6E3] mb-6"
        >
          <FaGraduationCap className="text-[#FDF6E3]" />
          Education So Far
        </motion.h2>
        <div className="w-24 h-1 mx-auto mb-12 bg-[#FDF6E3] rounded"></div>

        {/* Education Card with Timeline */}
        <div className="flex justify-center relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FDF6E3]/40"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-[#1C2E4A]/80 backdrop-blur-md border border-[#FDF6E3]/60 rounded-xl p-6 shadow-lg w-full max-w-lg z-10"
            >
              <h3 className="text-2xl font-bold text-[#FDF6E3]">
                {item.title}
              </h3>
              <p className="italic text-gray-300 mt-1">{item.institute}</p>
              <p className="text-sm text-gray-400">{item.location}</p>
              <p className="text-gray-300 mt-2">{item.details}</p>
              <p className="text-sm text-gray-400 mt-1">{item.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Certificates Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center text-[#FDF6E3] mb-6"
        >
          Certificates
        </motion.h2>
        <div className="w-24 h-1 mx-auto mb-12 bg-[#FDF6E3] rounded"></div>

        {/* Certificates Connected Horizontally */}
        <div className="flex flex-wrap justify-center items-center gap-6 relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-[#FDF6E3]/40 -z-10"></div>

          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1C2E4A]/80 backdrop-blur-md border border-[#FDF6E3]/60 rounded-xl p-4 shadow-md min-w-[200px] text-center"
            >
              <h3 className="text-lg font-bold text-[#FDF6E3]">
                {cert.title}
              </h3>
              <p className="text-gray-300 text-sm">{cert.provider}</p>
              <p className="text-xs text-gray-400 mt-1">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
