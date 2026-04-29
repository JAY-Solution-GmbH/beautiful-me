import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum - Beautiful Me",
  description: "Impressum von Beautiful Me - Melanie Steiner, Telfs",
}

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#03B19F] mb-12">Impressum</h1>
          
          <div className="space-y-8 text-gray-800 leading-relaxed">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Beautiful Me – Melanie Steiner</h2>
              <p>Obermarktstraße 21, 6410 Telfs</p>
            </div>

            <div className="space-y-2">
              <p><span className="font-semibold">Rechtsform des Unternehmens:</span> Einzelunternehmen</p>
              <p><span className="font-semibold">Unternehmensgegenstand:</span> Fußpfleger, Kosmetiker und Masseure</p>
              <p><span className="font-semibold">Telefonnummer:</span> <a href="tel:+4369917149957" className="text-[#03B19F] hover:underline">+4369917149957</a></p>
              <p><span className="font-semibold">E-Mail:</span> <a href="mailto:beautiful.me@gmx.at" className="text-[#03B19F] hover:underline">beautiful.me@gmx.at</a></p>
            </div>

            <div className="space-y-2">
              <p><span className="font-semibold">Kammermitglied bei:</span> Wirtschaftskammer Tirol</p>
              <p><span className="font-semibold">Berufsrecht:</span> Gewerbeordnung: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-[#03B19F] hover:underline">www.ris.bka.gv.at</a></p>
              <p><span className="font-semibold">Aufsichtsbehörde/Gewerbebehörde:</span> Bezirkshauptmannschaft Innsbruck-Land</p>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Konzept und Umsetzung der Webseite</h2>
              <div className="space-y-1">
                <p className="font-semibold">JAY Solution GmbH – Wir digitalisieren KMU!</p>
                <p>Eduard-Bodem-Gasse 1</p>
                <p>6020 Innsbruck</p>
                <p>Österreich</p>
              </div>
              <div className="space-y-1">
                <p><span className="font-semibold">Tel:</span> <a href="tel:+43512312001" className="text-[#03B19F] hover:underline">+43 512 312001</a></p>
                <p><span className="font-semibold">Mail:</span> <a href="mailto:office@jay-solution.com" className="text-[#03B19F] hover:underline">office@jay-solution.com</a></p>
                <p><span className="font-semibold">Web:</span> <a href="https://www.jay-solution.com" target="_blank" rel="noopener noreferrer" className="text-[#03B19F] hover:underline">www.jay-solution.com</a></p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">EU-Streitschlichtung</h2>
              <p>
                Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
              </p>
              <p>
                Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE" target="_blank" rel="noopener noreferrer" className="text-[#03B19F] hover:underline break-all">https://ec.europa.eu/consumers/odr</a> zu richten. Die dafür notwendigen Kontaktdaten finden Sie in unserem Impressum. Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Haftung für Inhalte dieser Website</h2>
              <p>
                Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden.
              </p>
              <p>
                Als Diensteanbieter sind wir nicht verpflichtet, die von Ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit davon unberührt.
              </p>
              <p>
                Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Haftung für Links auf dieser Website</h2>
              <p>
                Unsere Website enthält Links zu anderen Websites für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
              </p>
              <p>
                Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Urheberrechtshinweis</h2>
              <p>
                Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
              </p>
              <p>
                Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.
              </p>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Bildernachweis</h2>
              <p>
                Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt. Die Verwertungsrechte liegen bei: Beautiful Me – Melanie Steiner
              </p>
              <p>
                Alle Texte sind urheberrechtlich geschützt.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
