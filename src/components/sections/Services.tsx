"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  { name: "Fußpflege", price: "ab € 49.00", desc: "Podologische Fußpflege - nicht nur im Sommer gesunde, gepflegte Füße" },
  { name: "Wimpern Neuset", price: "ab € 155.00", desc: "Für jeden den passenden Augenaufschlag, ob natürlich oder extravagant." },
  { name: "Maniküre", price: "ab € 27.00", desc: "Entdecke gestylte Nägel & gepflegte Hände mit unserer Maniküre." },
  { name: "Wimpern Refill", price: "ab € 55.00", desc: "Lass deine Wimpern wieder auffüllen, für einen gleichmäßigen Look." },
  { name: "Augenbrauenstyling", price: "ab € 5.00", desc: "Wir helfen dir, deinen Augenbrauen noch mehr Ausdruck zu verleihen." },
  { name: "Wimpern Lifting", price: "ab € 59.00", desc: "Verleihe deinen Naturwimpern den richtigen Schwung." },
]

const banners = [
  "/images/Banner-1.jpeg",
  "/images/Banner-2.png",
  "/images/Banner-3.jpeg",
  "/images/Banner-4.jpeg"
]

export function Services() {
  return (
    <section id="leistungen" className="py-12 md:py-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12 px-4"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#03B19F] uppercase tracking-wider">
          Unsere Leistungen
        </h2>
      </motion.div>

      <div className="relative w-full flex overflow-hidden mb-10 md:mb-16 py-4 [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]">
        <motion.div
          className="flex pr-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {[...banners, ...banners].map((src, i) => (
            <div 
              key={i}
              className="relative h-40 md:h-64 w-40 md:w-64 rounded-xl overflow-hidden shadow-md shrink-0 mr-3 md:mr-4"
            >
              <Image src={src} alt={`Service Bild ${i+1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-none rounded-xl p-4 md:p-6 bg-white/80 backdrop-blur">
                <CardContent className="p-0 flex flex-col justify-center h-full space-y-2">
                  <div className="flex justify-between items-start border-b border-gray-100 pb-2">
                    <h3 className="font-bold text-lg text-gray-900">{service.name}</h3>
                    <span className="font-bold text-lg text-gray-900 whitespace-nowrap">{service.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 pt-1 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
