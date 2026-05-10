"use client"

import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import { Phone, Mail, MapPin, Car, MessageCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { MultiStepForm } from "@/components/sections/MultiStepForm"

export default function KontaktPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 py-12 md:py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#03B19F] mb-4">Kontakt</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nutze unser komfortables Anfrageformular für eine detaillierte Auskunft oder melde dich direkt klassisch per Telefon, WhatsApp oder E-Mail. Ich freue mich auf deine Nachricht!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Multi-Step Form */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 px-2">Detaillierte Anfrage senden</h2>
              <MultiStepForm />
            </motion.div>

            {/* Right: Direct Contact & Portrait */}
            <motion.div 
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="px-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Schneller Direktkontakt</h2>
                <div className="space-y-4">
                  
                  <div className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-[#F9F5EE] rounded-full text-[#03B19F] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">Telefon</h3>
                      <a href="tel:+4369917149957" className="text-gray-700 hover:text-[#03B19F] transition-colors">
                        +43 699 17149957
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-[#F9F5EE] rounded-full text-[#03B19F] shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">WhatsApp</h3>
                      <a href="https://wa.me/4369917149957" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#03B19F] underline underline-offset-4 hover:text-[#028E7F] transition-colors font-medium group">
                        Chat starten
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-[#F9F5EE] rounded-full text-[#03B19F] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">E-Mail</h3>
                      <a href="mailto:beautiful.me@gmx.at" className="text-gray-700 hover:text-[#03B19F] transition-colors">
                        beautiful.me@gmx.at
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="p-2.5 bg-[#F9F5EE] rounded-full text-[#03B19F] shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">Standort</h3>
                        <p className="text-gray-600 text-sm leading-tight">Obermarktstraße 21<br/>6410 Telfs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="p-2.5 bg-[#F9F5EE] rounded-full text-[#03B19F] shrink-0">
                        <Car className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">Parken</h3>
                        <p className="text-gray-600 text-sm leading-tight">Inntalcenter Telfs<br/><span className="text-gray-500 text-xs">2,5h gratis</span></p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Portrait */}
              <div className="px-2 pt-4 hidden sm:block">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md">
                  <Image 
                    src="/images/Portrait-Melanie-Steiner.jpg"
                    alt="Melanie Steiner"
                    fill
                    className="object-cover object-center"
                  />
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
