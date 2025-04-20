"use client"

import HeroImg from "../Assests/hero.png"
import { BsLinkedin, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"

export default function Hero() {
  const config = {
    subtitle: "I'm a full-stack Developer",
    social: {
      linkedin: "https://www.linkedin.com/in/manoharan-dharnishan/",
      instagram: "https://www.instagram.com/dharnish_0410?igsh=MXExMmM1NnZhcjNxNQ%3D%3D&utm_source=qr",
      facebook: "",
      github: "https://github.com/Dharnishan",
    },
  }

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center px-5 py-32 bg-gradient-to-b from-secondary to-secondary/90">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-black text-5xl md:text-6xl font-bold mb-4">
            Hi, <br />
            I'm <span className="text-accent">Dharnishan</span>
          </h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {config.subtitle}
          </motion.p>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[
              { icon: <BsLinkedin size={28} />, url: config.social.linkedin },
              { icon: <BsGithub size={28} />, url: config.social.github },
              { icon: <BsFacebook size={28} />, url: config.social.facebook },
              { icon: <BsInstagram size={28} />, url: config.social.instagram },
            ].map(
              (social, index) =>
                social.url && (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-accent transform hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ),
            )}
          </motion.div>

          <motion.button
            className="mt-10 bg-accent text-white px-8 py-3 rounded-full font-semibold w-fit hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact">Get In Touch</a>
          </motion.button>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent to-blue-500 opacity-75 blur"></div>
            <img
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl"
              src={HeroImg || "/placeholder.svg"}
              alt="Dharnishan"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
