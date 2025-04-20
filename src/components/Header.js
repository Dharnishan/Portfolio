"use client"

import { Bars3Icon } from "@heroicons/react/24/solid"
import { useState, useEffect } from "react"

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary shadow-lg py-2" : "bg-primary/90 py-4"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-5">
        <a className="font-bold text-white text-xl hover:text-accent transition-colors duration-300" href="#">
          <span className="text-accent">D</span>harnishan
        </a>

        <nav className="hidden md:block">
          <ul className="flex text-white">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item} className="group">
                <a
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="px-4 py-2 block relative overflow-hidden group-hover:text-accent transition-colors duration-300"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {toggleMenu && (
          <nav className="block md:hidden fixed inset-0 bg-primary/95 z-50">
            <ul className="flex flex-col items-center justify-center h-full text-white space-y-8">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item} className="text-2xl">
                  <a
                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                    onClick={() => setToggleMenu(false)}
                    className="hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setToggleMenu(false)}
              className="absolute top-5 right-5 text-white hover:text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </nav>
        )}

        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden text-white hover:text-accent transition-colors duration-300"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
