"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* About Section */}
      <section className="py-24 bg-white mt-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl mb-16 text-[color:var(--color-text-dark)]"
          >
            About
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-[color:var(--color-text-dark)] leading-relaxed mb-20 max-w-4xl"
          >
            M. Lopez brings unparalleled expertise in real estate consulting, focusing on market analysis, property
            valuation, and investment strategies. With a successful track record, we guide clients through informed
            decisions.
          </motion.p>

          {/* Content with Image and Text */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/test.png"
                  alt="Modern office interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <p className="text-lg text-[color:var(--color-text-light)] leading-relaxed">
                With a deep understanding of the real estate market, M. Lopez assists individuals and businesses in
                identifying prime investment properties tailored to their specific needs and financial goals. Trust us
                to make your real estate journey a success.
              </p>
              <Link href="/#info"><Button className="bg-black text-white hover:bg-gray-800 px-10 py-7 text-lg">Learn More</Button></Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}