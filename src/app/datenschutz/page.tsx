import { Navigation } from "@/components/layout/Navigation"
import { Footer } from "@/components/layout/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Beautiful Me",
  description: "Datenschutzerklärung von Beautiful Me - Melanie Steiner, Telfs",
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#03B19F] mb-12">Datenschutzerklärung</h1>
          
          <div className="space-y-8 text-gray-800 leading-relaxed">
            <p>
              Nach Art 13 und 14 der Verordnung (EU) 2016/679 (Datenschutzgrundverordnung; „DSGVO") muss der Verantwortliche den Betroffenen über die Verarbeitung personenbezogener Daten informieren. Mit diesem Dokument informieren wir Sie über die verarbeiteten personenbezogenen Daten.
            </p>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Definitionen</h2>
              <p>Zur besseren Verständlichkeit dieser Datenschutzerklärung finden Sie im Folgenden eine kurze Erklärung der verwendeten Begriffe.</p>
              <p><span className="font-semibold">Personenbezogene Daten („Daten")</span> sind alle Daten, die Informationen über persönliche oder sachliche Verhältnisse natürlicher Personen enthalten, beispielsweise Name, Anschrift, Emailadresse, Telefonnummer, Geburtsdatum, Alter, Geschlecht, Sozialversicherungsnummer, Videoaufzeichnungen, Fotos etc. Daten von juristischen Personen unterliegen nicht den Bestimmungen der DSGVO.</p>
              <p><span className="font-semibold">Verarbeitung</span> ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.</p>
              <p><span className="font-semibold">Verantwortlicher</span> ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
              <p><span className="font-semibold">Auftragsverarbeiter</span> ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</p>
              <p><span className="font-semibold">Empfänger</span> ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht.</p>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Unsere Kontaktdaten</h2>
              <p>Für den Fall, dass Sie weitere Fragen haben, stehen wir Ihnen, als Verantwortlicher der hierin behandelten Datenverarbeitung, unter folgenden Kontaktdaten gerne zur Verfügung:</p>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <p className="font-semibold">Beautiful Me – Melanie Steiner</p>
                <p>Obermarktstraße 21, 6410 Telfs</p>
                <p>Telefon: <a href="tel:+4369917149957" className="text-[#03B19F] hover:underline">+4369917149957</a></p>
                <p>E-Mail: <a href="mailto:beautiful.me@gmx.at" className="text-[#03B19F] hover:underline">beautiful.me@gmx.at</a></p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Zwecke und Rechtsgrundlage der Verarbeitung</h2>
              <p>Daten dürfen nur zu einem bestimmten Zweck verarbeitet werden und nur, wenn sich die Verarbeitung auf eine entsprechende Rechtsgrundlage stützen kann. Die Verarbeitung kann aus folgenden Gründen gerechtfertigt sein:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-3 font-semibold">Rechtsfertigungstatbestand</th>
                      <th className="text-left p-3 font-semibold">Rechtsgrundlage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="p-3">aufgrund Ihrer freiwilligen Einwilligung zu einem bestimmten Zweck</td><td className="p-3">Art 6 Abs 1 lit a</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">zur Vertragserfüllung, sofern Sie Vertragspartner sind oder zur Anbahnung eines Vertragsschlusses</td><td className="p-3">Art 6 Abs 1 lit b</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">aufgrund einer rechtlichen Verpflichtung, der wir unterliegen</td><td className="p-3">Art 6 Abs 1 lit c</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">zum Schutz Ihrer lebenswichtigen Interessen</td><td className="p-3">Art 6 Abs 1 lit d</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">zur Wahrnehmung einer Aufgabe im öffentlichen Interesse</td><td className="p-3">Art 6 Abs 1 lit e</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">auf Grundlage einer Interessenabwägung</td><td className="p-3">Art 6 Abs 1 lit f</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Wir verarbeiten Ihre Daten zu den folgenden Zwecken auf Grundlage der folgenden Rechtsgrundlagen:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-3 font-semibold">Erfasste Datenkategorien</th>
                      <th className="text-left p-3 font-semibold">Zweck der Verarbeitung</th>
                      <th className="text-left p-3 font-semibold">Rechtsgrundlage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-semibold">Kontaktdaten<br/><span className="font-normal">(Name, Adresse, E-Mail-Adresse, Telefonnummer)</span></td>
                      <td className="p-3">Diese Daten sind zur Nutzung unseres Angebots bzw. zur Vertragsanbahnung notwendig und werden bei einer Kontaktaufnahme von Ihnen erhoben.</td>
                      <td className="p-3">Art 6 Abs 1 lit a und b DSGVO</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-semibold">Technische Informationen<br/><span className="font-normal">(IP-Adresse, Betriebssystem)</span></td>
                      <td className="p-3">Diese Daten sind erforderlich, damit Ihnen die über Ihre Initiative geöffnete Website in der korrekten Form angezeigt werden kann.</td>
                      <td className="p-3">Art 6 Abs 1 lit f DSGVO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Empfänger</h2>
              <p>Empfänger unterstützen uns bei der Einhaltung gesetzlicher oder rechtlichen Pflichten, bei der Vertragsanbahnung und der Vertragserfüllung, bei Diensten, die Ihre Einwilligung voraussetzen oder bei der Wahrnehmung von Verarbeitungen, die in unserem berechtigten Interesse liegen. Wir übermitteln oder legen die Daten teilweise insbesondere folgenden Empfängern (Auftragsverarbeitern oder Verantwortliche) offen:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-3 font-semibold">Empfänger</th>
                      <th className="text-left p-3 font-semibold">Beschreibung</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="p-3">IT-Dienstleister</td><td className="p-3">Betrieb unseres IT-Systems, insbesondere E-Mail-Dienste, Hostingservices etc.</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">Subunternehmer</td><td className="p-3">Sofern und soweit Leistungen nicht durch uns erbracht werden und ein Rechtfertigungstatbestand vorliegt</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">Steuerberater, Buchhalter</td><td className="p-3">Verarbeitung von Daten aufgrund steuerlicher oder buchhalterischer Gründe</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">Rechtsanwalt, Gericht, Inkassobüro</td><td className="p-3">Gegebenenfalls zur Durchsetzung oder Abwehr von Ansprüchen</td></tr>
                  </tbody>
                </table>
              </div>
              <p>An andere Empfänger übermitteln wir Ihre Daten nur, wenn Sie hierzu Ihre ausdrückliche Einwilligung nach Art 6 Abs 1 lit a DSGVO erteilt haben, dies gesetzlich zulässig und nach Art. 6 Abs 1 lit. b DSGVO zur Erfüllung eines Vertragsverhältnisses mit Ihnen erforderlich ist, oder wenn uns nach Art 6 Abs 1 lit c DSGVO eine gesetzliche Verpflichtung dazu trifft, oder die Weitergabe nach Art 6 Abs 1 lit f DSGVO zur Wahrung unserer berechtigten Interessen sowie zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.</p>
              <p>Wir haben die Absicht, die Daten in folgende Drittländer zu übermitteln: Vereinigte Staaten von Amerika.</p>
              <p>Für die Vereinigten Staaten von Amerika liegt ein Angemessenheitsbeschluss der Europäischen Kommission vor. Die Europäische Kommission hat mit Beschluss vom 10.07.2023 zu C(2023) 4745 final entschieden, dass die Vereinigten Staaten von Amerika ein angemessenes Datenschutzniveau im Sinne von Art 45 DSGVO bieten, wenn unser Vertragspartner in die Liste des Datenschutzrahmens EU/US eingetragen ist.</p>
              <p>Soweit kein Angemessenheitsbeschluss vorliegt, dürfen wir Daten nur auf Grundlage angemessener Garantien, wie beispielsweise Standardvertragsklauseln, verbindlicher interner Datenschutzvorschriften, genehmigter Verhaltensregeln, genehmigter Zertifizierungsmechanismen etc. übermitteln.</p>
              <p>Es besteht nicht die Absicht, die Daten an eine internationale Organisation zu übermitteln.</p>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Speicherdauer</h2>
              <p>Die Speicherung von Daten erfolgt grundsätzlich nur so lange, wie dies aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist. Darüber hinaus kann eine Speicherung erfolgen, wenn dies zur Durchsetzung oder Abwehr von Ansprüchen Dritter erforderlich ist. Wichtige Speicherfristen finden Sie im Folgenden:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left p-3 font-semibold">Pflicht zur Aufbewahrung</th>
                      <th className="text-left p-3 font-semibold">Voraussichtliche Speicherdauer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="p-3">Unternehmensrechtliche Aufbewahrungspflicht nach §§ 190, 212 UGB</td><td className="p-3">7 Jahre</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">Umsatzsteuerrechtliche Aufbewahrungspflicht für Rechnungen nach § 11 Abs 2 3. Unterabsatz UStG</td><td className="p-3">7 Jahre</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">Umsatzsteuerrechtliche Aufbewahrungspflichten für Ausfuhrbelege nach § 7 Abs 7 UStG</td><td className="p-3">7 Jahre</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">Gewährleistung nach § 933 ABGB</td><td className="p-3">2 Jahre</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">Kaufpreisforderung bei beweglichen Sachen nach § 1062 iVm § 1486 ABGB</td><td className="p-3">3 Jahre</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">Ansprüche aus einem Werkvertrag nach § 1486 ABGB</td><td className="p-3">3 Jahre</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">Allgemeiner Schadenersatz nach § 1489 ABGB (Entschädigungsklagen)</td><td className="p-3">3 Jahre/30 Jahre</td></tr>
                    <tr className="border-b border-gray-100"><td className="p-3">Haftungsansprüche nach § 13 PHG</td><td className="p-3">10 Jahre</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Webhosting und Drittanbieter</h2>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">World4You (Domain Hosting)</h3>
                <p>Wir nutzen für das Domain Hosting den Anbieter World4You. Dienstanbieter ist das österreichische Unternehmen World4You Internet Services GmbH, Hafenstraße 35, 4020 Linz, Österreich. Mehr über die Daten, die durch die Verwendung von World4You verarbeitet werden, erfahren Sie in der <a href="https://www.world4you.com/de/unternehmen/datenschutzerklaerung.html" target="_blank" rel="noopener noreferrer" className="text-[#03B19F] hover:underline">hier abrufbaren Datenschutzerklärung</a>.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Vercel (Web Hosting)</h3>
                <p>Für das Hosting und die Bereitstellung unserer Website nutzen wir die Cloud-Plattform Vercel. Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (im Folgenden: Vercel).</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><span className="font-semibold">Art der Daten:</span> IP-Adresse, Request-Header und Log-Daten.</li>
                  <li><span className="font-semibold">Zweck:</span> Schnelle Auslieferung der Website über ein globales Netzwerk (CDN) und Absicherung gegen DDoS-Angriffe.</li>
                  <li><span className="font-semibold">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an einer performanten und sicheren Web-Infrastruktur).</li>
                  <li><span className="font-semibold">Datenübertragung:</span> Vercel ist unter dem EU-U.S. Data Privacy Framework zertifiziert. Die Übermittlung in die USA erfolgt somit auf Grundlage eines Angemessenheitsbeschlusses der EU-Kommission.</li>
                  <li><span className="font-semibold">Weitere Informationen:</span> Weitere Details finden Sie in der <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#03B19F] hover:underline">hier abrufbaren Datenschutzerklärung</a>.</li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Cookies</h2>
              <p>Cookies sind Textdateien, die auf Ihrem Endgerät gespeichert werden, um dieses wiederzuerkennen. Cookies können Informationen über die Nutzung unserer Angebote und Dienstleistungen enthalten.</p>
              <p>Manche der verwendeten Cookies werden nur solange gespeichert, bis Sie unser Angebot wieder schließen (Session-Cookies), wohingegen bestimmte Cookies für längere Dauer gespeichert werden und Sie wiedererkannt werden können (Persistent-Cookies). Manche Cookies sind für die Funktion der Website zwingend notwendig (unverzichtbare Cookies).</p>
              <p>Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des Nutzungserlebnisses.</p>
              <p>Über die Cookie-Erklärung bei erstmaligem Besuch der Website können Sie auswählen, welche Cookies Sie zulassen wollen. Wenn Sie die Einwilligung widerrufen oder Ihre Cookie Einstellungen ändern wollen, können Sie diese Änderung direkt in Ihrem Browser vornehmen.</p>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Rechtsbelehrung</h2>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Auskunftsrecht</h3>
                <p>Sie haben das Recht eine Bestätigung darüber zu verlangen, ob personenbezogene Daten verarbeitet werden; ist dies der Fall, so haben Sie ein Recht auf Auskunft über diese personenbezogenen Daten.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Recht auf Berichtigung</h3>
                <p>Sie haben das Recht, von dem Verantwortlichen die Berichtigung unrichtiger sowie die Vervollständigung unvollständiger personenbezogener Daten zu verlangen.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Recht auf Löschung</h3>
                <p>Sie haben das Recht, von dem Verantwortlichen zu verlangen, dass personenbezogene Daten unverzüglich gelöscht werden, sofern einer der folgenden Gründe zutrifft: Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben wurden, nicht mehr notwendig. Sie widerrufen Ihre Einwilligung und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung. Die personenbezogenen Daten wurden unrechtmäßig verarbeitet. Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Recht auf Einschränkung der Verarbeitung</h3>
                <p>Sie haben das Recht die Einschränkung der Verarbeitung zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist: die Richtigkeit der personenbezogenen Daten wird bestritten; die Verarbeitung unrechtmäßig ist; der Verantwortliche die personenbezogenen Daten nicht länger benötigt, Sie sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Recht auf Datenübertragbarkeit</h3>
                <p>Sie haben das Recht, die personenbezogenen Daten, die Sie einem Verantwortlichen bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und Sie haben das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung zu übermitteln.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Widerspruchsrecht</h3>
                <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung personenbezogener Daten, die aufgrund von Art 6 Abs 1 lit e oder f DSGVO erfolgt, Widerspruch einzulegen.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Recht auf Widerruf der Einwilligung</h3>
                <p>Sie haben das Recht, eine gemäß Art 6 Abs 1 lit a oder Art 9 Abs 2 lit a beruhende Einwilligung jederzeit zu widerrufen, ohne dass die Rechtmäßigkeit der Verarbeitung bis zum Widerruf berührt wird.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">Beschwerderecht</h3>
                <p>Sie haben das Recht auf Beschwerde bei der Österreichischen Datenschutzbehörde, Barichgasse 40-42, 1030 Wien, T.: 00431521522569, E.: dsb@gsb.gv.at, wenn Sie der Auffassung sind, dass die Verarbeitung gegen das geltende Datenschutzrecht verstößt.</p>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Sonstige Informationen</h2>
              <p>Die Bereitstellung der personenbezogenen Daten ist teilweise gesetzlich vorgeschrieben oder für einen Vertragsabschluss erforderlich. Sie sind grundsätzlich nicht verpflichtet, die Daten bereitzustellen. Wenn Sie die Daten nicht bereitstellen, ist kein Vertragsschluss möglich.</p>
              <p>Es besteht keine automatisierte Entscheidungsfindung einschließlich Profiling gemäß Artikel 22 Absätze 1 und 4.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
