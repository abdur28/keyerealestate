"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Recruitment", href: "/recruitment" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      } border-b border-gray-200`}
    >
      <div className="container mx-auto md:px-10 px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Link href="/recruitment" className="flex flex-col">
              <span className="mb-1 font-[family-name:var(--font-playfair)] text-3xl font-light text-[color:var(--color-brand-cyan)] lowercase leading-none">
                keyes
              </span>
              <span className="text-[color:var(--color-brand-cyan)] text-[11px] tracking-[0.25em] uppercase leading-none">
                Real Estate
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-base font-medium text-[color:var(--color-text-dark)] hover:text-[color:var(--color-brand-cyan)] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[color:var(--color-brand-cyan)] transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}