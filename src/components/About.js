"use client"

import DharnishImg from "../Assests/dharnish.jpg"
import { motion } from "framer-motion"

export default function About() {
  const config = {
    line1:
      "Fast learner with strong problem-solving skills and a collaborative mindset, committed to delivering high-quality work efficiently.",
    line2:
      "I am passionate about staying up-to-date with technological advancements and eager to bring my classroom learning and self-driven research into a real-world setting.",
    line3:
      "Ready to contribute positively to your team, I aim to gain practical experience and make a meaningful impact throughout my internship.",
  }

  return (
    <section className="py-20 bg-primary" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="md:w-1/3 w-full flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-accent to-blue-500 opacity-50 blur-md"></div>
              <img
                src={DharnishImg || "/placeholder.svg"}
                alt="Dharnish"
                className="relative rounded-xl shadow-2xl w-72 h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8 relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-accent"></span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              {[config.line1, config.line2, config.line3].map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.button
              className="mt-8 bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/80 transition-all duration-300 shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#skills">My Skills</a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
