"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-accent">D</span>harnishan
            </h2>
            <p className="text-gray-400">Full-stack Developer</p>
          </motion.div>

          <motion.div
            className="mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-center md:text-right text-gray-400">
              &copy; {currentYear} Dharnishan. All rights reserved.
            </p>
            <p className="text-center md:text-right text-gray-500 text-sm mt-1">Designed and built with passion</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
