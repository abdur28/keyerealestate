import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">WIX</span>
              </div>
              <span className="text-sm text-gray-600">
                This website was built on Wix. Create yours today.{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Get Started
                </a>
              </span>
            </div>
            <nav className="flex items-center gap-8">
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Home
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
                About Us
              </a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Our Services
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/modern-luxury-house-with-glass-walls-concrete-path.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl font-light mb-4 text-balance">
            Keyes Real Estate
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">Empowering Your Real Estate Journey</p>
          <Button variant="outline" className="bg-white text-black hover:bg-gray-100 border-white px-8 py-6 text-base">
            Learn More
          </Button>
        </div>
      </section>

      {/* Commitment to Excellence Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-center mb-12 text-[color:var(--color-text-dark)]">
            Commitment to Excellence
          </h2>
          <div className="text-[color:var(--color-text-light)] leading-relaxed space-y-4 text-base">
            <p>
              At Keyes Real Estate, we believe successful property management to be based on the established
              relationship of mutual trust, respect, and open lines of communication between not just our employees but
              our residents as well. Our management is to set the standard of high performance and manage residential
              and commercial properties for the success of our clients. We ensure that all of our clients have the best
              quality, most comforting and affordable living experience possible. Our continued growth and prosperity is
              a direct result of our exceptional management team and together we strive for excellence and to ensure the
              success of our Clients, the well being of our properties and the satisfaction of Keyes Real Estate.
            </p>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-center md:text-left">
            <div className="mb-4">
              <span className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl font-light text-[color:var(--color-brand-cyan)] lowercase">
                keyes
              </span>
            </div>
            <div className="text-[color:var(--color-brand-cyan)] text-sm tracking-[0.3em] uppercase">REAL ESTATE</div>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6">Learn More</Button>
        </div>
      </section>

      {/* Job Posting Section */}
      <section className="py-20 bg-[color:var(--color-cream)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-8 text-[color:var(--color-text-dark)]">
            PERSONAL ASSISTANT POSITION
          </h2>

          <div className="mb-12 text-[color:var(--color-text-light)] leading-relaxed">
            <p>
              We are looking for a driven and organized personal assistant to support our team. The ideal candidate will
              be proactive, detail-oriented, and able to handle multiple tasks efficiently. This is an excellent
              opportunity for someone looking to grow their career in a dynamic real estate environment.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-6 text-[color:var(--color-text-dark)]">
              RESPONSIBILITY AND DUTIES:
            </h3>
            <ul className="space-y-3 text-[color:var(--color-text-light)]">
              <li className="flex gap-3">
                <span>•</span>
                <span>Thorough inspection of properties in your area.</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Take professional photos of the property.</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Listing reports on the physical state of the properties.</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Processing application and screening.</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Vacant unit inspection.</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Manage personal and business tasks.</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Team player.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-[color:var(--color-text-light)]">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[color:var(--color-text-dark)]">
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
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-4 text-[color:var(--color-text-dark)]">
            Application Form
          </h2>
          <p className="text-[color:var(--color-text-light)] mb-12">
            Interested Applicants are to fill this form below:
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  placeholder="Name (First and Last Name)"
                  className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black"
                />
              </div>
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Phone"
                className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black"
              />
            </div>

            <div>
              <Input
                type="text"
                placeholder="Address"
                className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  placeholder="City"
                  className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Zip Code"
                  className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[color:var(--color-text-light)] mb-2">Applicant's Resume</label>
              <Input
                type="file"
                className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black"
              />
              <p className="text-xs text-[color:var(--color-text-light)] mt-2">
                Drag, Drop or Click to add resume (File)
              </p>
            </div>

            <div>
              <label className="block text-sm text-[color:var(--color-text-light)] mb-2">Applicant's Permit</label>
              <Input
                type="file"
                className="w-full border-b border-gray-300 rounded-none border-x-0 border-t-0 px-0 focus-visible:ring-0 focus-visible:border-black"
              />
            </div>

            <div>
              <label className="block text-sm text-[color:var(--color-text-light)] mb-2">
                Enter Name (First and Last Name) (e.g)
              </label>
              <textarea
                rows={4}
                placeholder="Type here..."
                className="w-full border border-gray-300 rounded-none px-4 py-3 focus:outline-none focus:border-black resize-none"
              />
            </div>

            <Button className="w-full bg-black text-white hover:bg-gray-800 py-6 text-base">Submit</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[color:var(--color-cream)] py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <div className="mb-2">
                <span className="font-[family-name:var(--font-playfair)] text-3xl font-light text-[color:var(--color-brand-cyan)] lowercase">
                  keyes
                </span>
              </div>
              <div className="text-[color:var(--color-brand-cyan)] text-xs tracking-[0.2em] uppercase mb-4">
                Real Estate
              </div>
              <p className="text-sm text-[color:var(--color-text-light)]">Stay connected with us</p>
            </div>
            <div className="text-sm text-[color:var(--color-text-light)]">
              <p>contact@keyesrealestate.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-center text-xs text-[color:var(--color-text-light)]">
            <p>WIX ALL RIGHT RESERVED.</p>
            <p className="mt-2">CASA PORTOFORNIA · DEDICATED TO CREATIVITY, CULTURE & GROWTH.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
