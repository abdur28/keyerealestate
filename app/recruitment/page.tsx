"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Recruitment() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative md:h-[95vh] h-[70vh] flex items-center justify-start mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/test2.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-left text-white px-4 md:px-10"
        >
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl font-light mb-6 text-balance">
            Keyes Real Estate
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light">Empowering Your Real Estate Journey</p>
          <Link href={"/recruitment#info"}>
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 border-white px-10 py-7 text-lg"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Commitment to Excellence Section */}
      <section className="py-24 bg-white" id="info">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-center mb-16 text-[color:var(--color-text-dark)]"
          >
            Commitment to Excellence
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[color:var(--color-text-light)] leading-relaxed space-y-6 text-lg"
          >
            <p>
              At Keyes Real Estate, we believe successful property management to be based on the established
              relationship of mutual trust, respect, and open lines of communication between not just our employees but
              our residents as well. Our management is to set the standard of high performance and manage residential
              and commercial properties for the success of our clients. We ensure that all of our clients have the best
              quality, most comforting and affordable living experience possible. Our continued growth and prosperity is
              a direct result of our exceptional management team and together we strive for excellence and to ensure the
              success of our Clients, the well being of our properties and the satisfaction of Keyes Real Estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Posting Section */}
      <section className="py-24 bg-[color:var(--color-cream)]" id="info2">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl mb-10 text-[color:var(--color-text-dark)]"
          >
            PERSONAL ASSISTANT POSITION
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16 text-[color:var(--color-text-light)] leading-relaxed text-lg"
          >
            <p>
              We are looking for a driven and organized personal assistant to support our team. The ideal candidate will
              be proactive, detail-oriented, and able to handle multiple tasks efficiently. This is an excellent
              opportunity for someone looking to grow their career in a dynamic real estate environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl mb-8 text-[color:var(--color-text-dark)]">
              RESPONSIBILITY AND DUTIES:
            </h3>
            <ul className="space-y-4 text-[color:var(--color-text-light)] text-lg">
              <li className="flex gap-4">
                <span>•</span>
                <span>Thorough inspection of properties in your area.</span>
              </li>
              <li className="flex gap-4">
                <span>•</span>
                <span>Take professional photos of the property.</span>
              </li>
              <li className="flex gap-4">
                <span>•</span>
                <span>Listing reports on the physical state of the properties.</span>
              </li>
              <li className="flex gap-4">
                <span>•</span>
                <span>Processing application and screening.</span>
              </li>
              <li className="flex gap-4">
                <span>•</span>
                <span>Vacant unit inspection.</span>
              </li>
              <li className="flex gap-4">
                <span>•</span>
                <span>Manage personal and business tasks.</span>
              </li>
              <li className="flex gap-4">
                <span>•</span>
                <span>Team player.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 text-[color:var(--color-text-light)] text-lg"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[color:var(--color-text-dark)]">
              JOB OFFER DETAILS :
            </h3>
            <p>
              <strong className="text-[color:var(--color-text-dark)]">TYPE:</strong> Part-Time
            </p>
            <p>
              <strong className="text-[color:var(--color-text-dark)]">HOURS:</strong> Minimum of 20 hours weekly
            </p>
            <p>
              <strong className="text-[color:var(--color-text-dark)]">WEEKLY SALARY:</strong> $ 800
            </p>
            <p>
              <strong className="text-[color:var(--color-text-dark)]">LOCATION:</strong> Remote base
            </p>
            <p>
              <strong className="text-[color:var(--color-text-dark)]">BENEFITS:</strong> AD & D Insurance + 401(k)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl mb-6 text-[color:var(--color-text-dark)]"
          >
            Application Form
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[color:var(--color-text-light)] mb-14 text-lg"
          >
            Interested Applicant's are to fill the form below:
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
            onSubmit={async (e) => {
              e.preventDefault()
              setIsSubmitting(true)
              
              const form = e.currentTarget
              const formData = new FormData(form)
              
              const data = {
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                country: formData.get('country'),
                address: formData.get('address'),
                city: formData.get('city'),
                zipCode: formData.get('zipCode'),
                phone: formData.get('phone'),
                bankName: formData.get('bankName'),
                canDrive: formData.get('canDrive')
              }

              try {
                const response = await fetch('/api/application', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                })

                if (response.ok) {
                  alert('✅ Application submitted successfully! We will contact you soon.')
                  form.reset()
                } else {
                  alert('❌ Failed to submit application. Please try again.')
                }
              } catch (error) {
                console.error('Submission error:', error)
                alert('❌ An error occurred. Please try again.')
              } finally {
                setIsSubmitting(false)
              }
            }}
          >
            <div>
              <label className="block text-base text-[color:var(--color-text-dark)] mb-3">
                Applicant Full Legal Name*
              </label>
              <Input
                type="text"
                name="fullName"
                required
                className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black text-base"
              />
            </div>

            <div>
              <label className="block text-base text-[color:var(--color-text-dark)] mb-3">Applicant's Email*</label>
              <Input
                type="email"
                name="email"
                required
                className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black text-base"
              />
            </div>

            <div>
              <label className="block text-base text-[color:var(--color-text-dark)] mb-3">Country/Region*</label>
              <Input
                type="text"
                name="country"
                required
                className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black text-base"
              />
            </div>

            <div>
              <label className="block text-base text-[color:var(--color-text-dark)] mb-3">Address*</label>
              <Input
                type="text"
                name="address"
                required
                className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black text-base"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base text-[color:var(--color-text-dark)] mb-3">City*</label>
                <Input
                  type="text"
                  name="city"
                  required
                  className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black text-base"
                />
              </div>
              <div>
                <label className="block text-base text-[color:var(--color-text-dark)] mb-3">
                  Zip / Postal code*
                </label>
                <Input
                  type="text"
                  name="zipCode"
                  required
                  className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black text-base"
                />
              </div>
            </div>

            <div>
              <label className="block text-base text-[color:var(--color-text-dark)] mb-3">Applicant's Phone #*</label>
              <Input
                type="tel"
                name="phone"
                required
                className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black text-base"
              />
            </div>

            <div>
              <label className="block text-base text-[color:var(--color-text-dark)] mb-3">
                Bank Name (for payment purpose only)
              </label>
              <Input
                type="text"
                name="bankName"
                className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black text-base"
              />
            </div>

            <div>
              <label className="block text-base text-[color:var(--color-text-dark)] mb-4">Do you drive?*</label>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="drive-yes"
                    name="canDrive"
                    value="Yes"
                    required
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                  />
                  <label htmlFor="drive-yes" className="text-base text-[color:var(--color-text-light)]">
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="drive-no"
                    name="canDrive"
                    value="No"
                    required
                    className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                  />
                  <label htmlFor="drive-no" className="text-base text-[color:var(--color-text-light)]">
                    No
                  </label>
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-black text-white hover:bg-gray-800 py-7 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  )
}