"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export function Navigation() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#leistungen", label: "Leistungen", accent: true },
    { href: "/#ueber-mich", label: "Über mich" },
    { href: "/#rezensionen", label: "Rezensionen" },
    { href: "/kontakt", label: "Kontakt" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F9F5EE]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="Beautiful Me Logo" 
              width={150} 
              height={50} 
              className="object-contain w-auto h-10 md:h-12"
              priority
            />
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#03B19F] transition-colors ${link.accent ? "text-[#03B19F]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/kontakt">
            <Button className="bg-[#03B19F] hover:bg-[#028E7F] text-white cursor-pointer">
              Jetzt anfragen
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#F9F5EE]/95 backdrop-blur-md border-t border-gray-200"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-semibold py-2 hover:text-[#03B19F] transition-colors ${link.accent ? "text-[#03B19F]" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/kontakt" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-[#03B19F] hover:bg-[#028E7F] text-white cursor-pointer mt-2">
                  Jetzt anfragen
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
