"use client"

import { motion } from "framer-motion"
import {
  FaPython,
  FaAngular,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaGithub,
  FaReact,
  FaLaravel,
  FaDatabase,
} from "react-icons/fa"
import { SiSpringboot } from "react-icons/si"

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython />, color: "bg-blue-500" },
    { name: "Angular", icon: <FaAngular />, color: "bg-red-600" },
    { name: "Figma", icon: <FaFigma />, color: "bg-purple-600" },
    { name: "HTML", icon: <FaHtml5 />, color: "bg-orange-600" },
    { name: "CSS", icon: <FaCss3Alt />, color: "bg-blue-600" },
    { name: "JavaScript", icon: <FaJs />, color: "bg-yellow-500" },
    { name: "Java", icon: <FaJava />, color: "bg-red-500" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "bg-green-600" },
    { name: "Git & GitHub", icon: <FaGithub />, color: "bg-gray-800" },
    { name: "React", icon: <FaReact />, color: "bg-blue-400" },
    { name: "Laravel", icon: <FaLaravel />, color: "bg-red-700" },
    { name: "MySQL", icon: <FaDatabase />, color: "bg-blue-700" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 inline-block relative">
            Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent"></span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
            Here are the technologies and tools I'm proficient with
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} className="flex flex-col items-center" variants={item} whileHover={{ scale: 1.05 }}>
              <div
                className={`w-20 h-20 ${skill.color} rounded-full flex items-center justify-center text-white text-4xl shadow-lg mb-4`}
              >
                {skill.icon}
              </div>
              <h3 className="text-gray-800 font-medium text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'm always learning and expanding my skill set to stay current with industry trends and best practices.
          </p>
          <motion.button
            className="mt-8 bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-accent/80 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects">View My Projects</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
