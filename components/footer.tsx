"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <footer className="bg-[color:var(--color-cream)] py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Branding and Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="mb-2">
                <span className="font-[family-name:var(--font-playfair)] text-4xl font-light text-[color:var(--color-brand-cyan)] lowercase">
                  keyes
                </span>
              </div>
              <div className="text-[color:var(--color-brand-cyan)] text-sm tracking-[0.3em] uppercase mb-6">
                Real Estate
              </div>
              <p className="text-base text-[color:var(--color-text-light)] mb-8">Stay Connected with Us</p>
            </div>

            {/* Newsletter Signup Form */}
            <form 
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault()
                setIsSubmitting(true)
                
                const form = e.currentTarget
                const formData = new FormData(form)
                
                const data = {
                  email: formData.get('email'),
                  subscribe: formData.get('subscribe') === 'on'
                }

                try {
                  const response = await fetch('/api/newsletter', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                  })

                  if (response.ok) {
                    alert('✅ Successfully subscribed to newsletter! Thank you for joining us.')
                    form.reset()
                  } else {
                    alert('❌ Failed to subscribe. Please try again.')
                  }
                } catch (error) {
                  console.error('Subscription error:', error)
                  alert('❌ An error occurred. Please try again.')
                } finally {
                  setIsSubmitting(false)
                }
              }}
            >
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  disabled={isSubmitting}
                  className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black text-base disabled:opacity-50"
                />
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="subscribe"
                  required
                  disabled={isSubmitting}
                  className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-black disabled:opacity-50"
                />
                <label htmlFor="newsletter" className="text-sm text-[color:var(--color-text-light)]">
                  Yes, Subscribe me to newsletter*
                </label>
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </motion.div>

          {/* Right Side - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-end justify-end"
          >
            <div className="text-base text-[color:var(--color-text-light)]">
              <p>contact@keyerealestate.com</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-300 text-center text-sm text-[color:var(--color-text-light)]">
          <p>© 2025 Keyes Real Estate. All Rights Reserved.</p>
          <p className="mt-2">Empowering Your Real Estate Journey</p>
        </div>
      </div>
    </footer>
  )
}