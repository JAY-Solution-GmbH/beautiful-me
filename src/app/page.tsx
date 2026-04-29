import { Navigation } from "@/components/layout/Navigation"
import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { About } from "@/components/sections/About"
import { Reviews } from "@/components/sections/Reviews"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}
