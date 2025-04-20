"use client"

import financeTracking from "../Assests/finance.png"
import ticketManagement from "../Assests/ticket_management.png"
import studentManagement from "../Assests/student-management.jpg"
import { motion } from "framer-motion"

export default function Projects() {
  const config = {
    projects: [
      {
        image: financeTracking,
        title: "Finance Tracker",
        description:
          "Developed a Personal Finance Tracker in Python using Tkinter for a GUI and a command-line interface (CLI) to manage transactions, store data in JSON, and generate financial summaries.",
        link: "https://github.com/Dharnishan/Finance-Tracking-Application",
        tech: ["Python", "Tkinter", "JSON"],
      },
      {
        image: ticketManagement,
        title: "Ticket Management System",
        description:
          "Designed and implemented a full-stack ticket management system using Angular for the front end and Spring Boot for the back end.",
        link: "https://github.com/Dharnishan/Ticket-booking-system",
        tech: ["Angular", "Spring Boot", "MySQL"],
      },
      {
        image: studentManagement,
        title: "Student Management System",
        description:
          "Developed a Java-based Student Management System for university staff, featuring student registration, seat management, academic tracking, and error handling, showcasing my Java programming skills",
        link: "https://github.com/Dharnishan/Student-management-system",
        tech: ["Java", "OOP", "File I/O"],
      },
    ],
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 inline-block relative">
            Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent"></span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
            These are my projects, I have built these with Python, Java, Angular and Spring Boot. Check them out!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {config.projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              variants={item}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-6 py-2 rounded-full font-medium hover:bg-accent/80 transition-colors duration-300 text-center"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
