"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { TrendingUp, Building2, Target, Users } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description:
        "Our detailed market analysis provides clients with a comprehensive understanding of current real estate trends and opportunities, empowering them to make strategic decisions.",
    },
    {
      icon: Building2,
      title: "Property Valuation",
      description:
        "We offer precise property valuation services to determine the true worth of real estate assets, enabling clients to assess investments accurately and maximize returns.",
    },
    {
      icon: Target,
      title: "Investment Strategies",
      description:
        "Tailored investment strategies are crafted to align with each client's unique needs and financial goals, ensuring optimal returns and long-term growth.",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Discover how our expert guidance helped clients identify prime investment properties that met their specific requirements and financial objectives, leading to successful transactions.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Services Section */}
      <section className="py-24 bg-white mt-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl mb-12 text-[color:var(--color-text-dark)]"
          >
            Real Estate
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-[color:var(--color-text-dark)] leading-relaxed mb-20 max-w-4xl"
          >
            With a focus on market analysis, property valuation, and investment strategies, our consultancy services
            ensure informed decisions and successful transactions.
          </motion.p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                className="space-y-4"
              >
                <service.icon className="w-8 h-8 text-[color:var(--color-text-light)]" strokeWidth={1.5} />
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[color:var(--color-text-dark)]">
                  {service.title}
                </h3>
                <p className="text-base text-[color:var(--color-text-light)] leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center pt-8"
          >
            <Link href="/recruitment#info"><Button className="bg-black text-white hover:bg-gray-800 px-10 py-7 text-lg">Learn More</Button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}