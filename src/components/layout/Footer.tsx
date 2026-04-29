import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F9F5EE] border-t border-gray-200 py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <div className="mb-6">
            <Image 
              src="/images/logo.png" 
              alt="Beautiful Me Logo" 
              width={200} 
              height={80} 
              className="object-contain w-auto h-20"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button asChild className="bg-[#03B19F] hover:bg-[#028E7F] text-white">
              <a href="https://www.facebook.com/LuxusLashes.Telfs" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </Button>
            <Button asChild className="bg-[#03B19F] hover:bg-[#028E7F] text-white">
              <a href="https://wa.me/4369917149957" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h4 className="font-bold text-[#03B19F] text-lg">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-800 font-semibold">
                <Phone className="w-5 h-5 text-gray-900" />
                <a href="tel:+4369917149957" className="hover:text-[#03B19F] transition-colors">+43 699 17149957</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-800 font-semibold">
                <Mail className="w-5 h-5 text-gray-900" />
                <a href="mailto:beautiful.me@gmx.at" className="hover:text-[#03B19F] transition-colors">beautiful.me@gmx.at</a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[#03B19F] text-lg">Rechtliches</h4>
            <div className="flex flex-col space-y-3 text-sm font-semibold text-gray-800">
              <Link href="/impressum" className="hover:text-[#03B19F] transition-colors w-fit">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-[#03B19F] transition-colors w-fit">Datenschutz</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[#03B19F] text-lg">Standort</h4>
            <div className="text-sm font-semibold text-gray-800 leading-relaxed">
              <p>Obermarktstraße 21</p>
              <p>6410 Telfs</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

