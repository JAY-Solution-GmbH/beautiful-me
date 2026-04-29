"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  { name: "Katja P.", text: "Ich war heute das erste Mal bei Melanie. Sie ist total freundlich, offen und mit arbeiten sehr sehr genau. Absolut empfehlenswert 👍👍👍" },
  { name: "Janine Scharsching", text: "Sehr freundlich und hochwertige Arbeit!!! Fühlte mich sehr wohl und komme immer wieder gerne :) Danke Melanie" },
  { name: "Bettina Friedrichs", text: "Melanie ist einfach ein Profi: perfekte Wimpern. DANKE" },
  { name: "Stephanie Ruef", text: "Bin sehr zufrieden! Super Ergebnis! :-) Danke" },
  { name: "Isabella Sturm", text: "Sehr schöne Wimpern und sind auch lange haltbar !" },
  { name: "Sabine Erhart", text: "Einfach DIE BESTE die es gibt🥰" }
]

export function Reviews() {
  return (
    <section id="rezensionen" className="py-12 md:py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#03B19F] uppercase tracking-wider">
            Rezensionen unserer Kunden
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm rounded-xl p-6 bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex flex-col space-y-4">
                  <div className="flex text-[#03B19F]">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 mb-2">{review.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed italic">"{review.text}"</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
