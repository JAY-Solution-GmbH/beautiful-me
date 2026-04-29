"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Send, Star } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
      
      {/* === MOBILE LAYOUT === */}
      <div className="lg:hidden w-full flex flex-col items-center text-center gap-6">
        {/* 1 + 2: Headlines */}
        <motion.div
          className="space-y-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#03B19F] tracking-tight">
            Schönheit ohne Umwege!
          </h1>
          <h2 className="text-lg md:text-2xl font-semibold text-[#03B19F]">
            BeautifulMe - Melanie Steiner - Telfs
          </h2>
        </motion.div>

        {/* 3: Image */}
        <motion.div
          className="relative max-w-[280px] w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
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

        {/* 4: Text, Stars, CTA */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm md:text-lg text-gray-800 leading-relaxed font-medium">
            <span className="font-bold">Seit 2013</span> ist Melanie Steiner die Ansprechpartnerin in Telfs, wenn es um das Thema <span className="font-bold">Wimpern, Augenbrauenstyling, Maniküre und Fußpflege</span> geht. Gemeinsam mit ihrem Team sorgt sie auch für dein Wohlbefinden!
          </p>

          <div className="flex items-center gap-4 justify-center">
            <div className="flex -space-x-3">
              {["rezension1.jpeg", "rezension2.jpeg", "rezension3.jpeg", "rezension4.jpeg"].map((img, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#F9F5EE] bg-gray-200 overflow-hidden relative">
                  <Image src={`/images/${img}`} alt={`User ${i+1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#03B19F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs font-semibold mt-0.5">5 von 5 Sternen</p>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <Link href="/kontakt">
              <Button className="bg-[#03B19F] hover:bg-[#028E7F] text-white rounded-md px-6 py-5 text-sm shadow-lg transition-transform hover:scale-105 cursor-pointer">
                <Send className="mr-2 h-4 w-4" />
                <span className="font-semibold">Jetzt anfragen</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* === DESKTOP LAYOUT (unchanged) === */}
      <motion.div 
        className="hidden lg:block space-y-6 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-[#03B19F] tracking-tight">
            Schönheit ohne Umwege!
          </h1>
          <h2 className="text-2xl font-semibold text-[#03B19F]">
            BeautifulMe - Melanie Steiner - Telfs
          </h2>
        </div>
        
        <p className="text-lg text-gray-800 leading-relaxed font-medium">
          <span className="font-bold">Seit 2013</span> ist Melanie Steiner die Ansprechpartnerin in Telfs, wenn es um das Thema <span className="font-bold">Wimpern, Augenbrauenstyling, Maniküre und Fußpflege</span> geht. Gemeinsam mit ihrem Team sorgt sie auch für dein Wohlbefinden!
        </p>

        <div className="flex items-center gap-4 pt-2">
          <div className="flex -space-x-3">
            {["rezension1.jpeg", "rezension2.jpeg", "rezension3.jpeg", "rezension4.jpeg"].map((img, i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F9F5EE] bg-gray-200 overflow-hidden relative">
                <Image src={`/images/${img}`} alt={`User ${i+1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1 text-[#03B19F]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm font-semibold mt-0.5">5 von 5 Sternen</p>
          </div>
        </div>

        <div className="pt-4">
          <Link href="/kontakt">
            <Button className="bg-[#03B19F] hover:bg-[#028E7F] text-white rounded-md px-8 py-6 text-base shadow-lg transition-transform hover:scale-105 cursor-pointer">
              <Send className="mr-2 h-5 w-5" />
              <span className="font-semibold">Jetzt anfragen</span>
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div 
        className="hidden lg:block flex-shrink-0 w-full max-w-sm relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl">
          <Image 
            src="/images/Portrait-Melanie-Steiner.jpg"
            alt="Melanie Steiner"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-white/40 to-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
      </motion.div>
    </section>
  )
}
