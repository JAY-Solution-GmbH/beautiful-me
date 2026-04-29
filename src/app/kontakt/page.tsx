"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import { Phone, Mail, MapPin, Car } from "lucide-react"
import { motion } from "framer-motion"

export default function KontaktPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#03B19F] mb-4">Kontakt</h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Ich freue mich auf deine Nachricht! Kontaktiere mich gerne telefonisch, per E-Mail oder besuche mich direkt in meinem Studio in Telfs.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Portrait */}
            <motion.div 
              className="flex-shrink-0 w-full max-w-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/Portrait-Melanie-Steiner.jpg"
                  alt="Melanie Steiner"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-[#F9F5EE] rounded-full text-[#03B19F] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Telefon und WhatsApp</h3>
                  <a href="tel:+4369917149957" className="text-gray-700 hover:text-[#03B19F] transition-colors text-lg">
                    +43 699 17149957
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-[#F9F5EE] rounded-full text-[#03B19F] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">E-Mail</h3>
                  <a href="mailto:beautiful.me@gmx.at" className="text-gray-700 hover:text-[#03B19F] transition-colors text-lg">
                    beautiful.me@gmx.at
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-[#F9F5EE] rounded-full text-[#03B19F] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Standort</h3>
                  <p className="text-gray-700 text-lg">Obermarktstraße 21</p>
                  <p className="text-gray-700 text-lg">6410 Telfs</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-3 bg-[#F9F5EE] rounded-full text-[#03B19F] shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Parkmöglichkeiten</h3>
                  <p className="text-gray-700 text-lg">Inntalcenter Telfs</p>
                  <p className="text-gray-500 text-sm mt-1">2,5 Stunden gratis parken</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
