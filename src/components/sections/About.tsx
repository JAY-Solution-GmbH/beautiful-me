"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Scissors, Sparkles, ChevronDown } from "lucide-react"

export function About() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggle = (i: number) => {
    if (openIndex === i) {
      setOpenIndex(null)
    } else {
      setOpenIndex(i)
    }
  }

  const qualifications = [
    { 
      icon: Scissors, 
      text: "Meisterprüfung als Friseurin",
      details: "2009 die Lehrabschlussprüfung, 2010 die Unternehmerprüfung und zuletzt die Meisterprüfung zur Friseurin im Jahr 2012. Melli ist seit jeher bemüht immer die höchsten Qualitätsstandards zu erreichen."
    },
    { 
      icon: Award, 
      text: "Befähigungsprüfung podologische Fußpflege",
      details: "Im Jahr 2016 erlernte Melli das Handwerk der podologischen Fußpflege und schloss in dieser Disziplin erfolgreich mit der Befähigungsprüfung ab."
    },
    { 
      icon: Sparkles, 
      text: "Wimpernstylistin & Permanent Make-Up",
      details: "Wimpernstyling war schon lange vor der Meisterprüfung Mellis große Leidenschaft - bis heute! Weitere Ausbildungen zum Thema Permanent Make-Up und Microblading kamen im Laufe der Jahre dazu."
    }
  ]

  return (
    <section id="ueber-mich" className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#03B19F] uppercase tracking-wider">
            Über Mich
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Melanie Steiner</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Melli ist nicht nur eine angenehme Gesprächspartnerin, sondern durch die vielfältigen Weiterbildungen und Befähigungsprüfungen eine hochqualifizierte Expertin auf ihrem Gebiet.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {qualifications.map((item, i) => (
                <div key={i} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button 
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-4 group text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#F9F5EE] rounded-full text-[#03B19F] group-hover:bg-[#03B19F] group-hover:text-white transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-gray-800">{item.text}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div 
                        key={`content-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 md:pl-[4.5rem] text-sm text-gray-600 leading-relaxed">
                          {item.details}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 w-full max-w-md"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/foto-unten.jpg"
                alt="Melanie Steiner"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
