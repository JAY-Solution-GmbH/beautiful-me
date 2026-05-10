import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Beautiful Me - Telfs",
    default: "Beautiful Me | Wimpern, Fußpflege & Maniküre in Telfs",
  },
  description: "Melanie Steiner ist deine Expertin für Wimpernverlängerung, Wimpernlifting, Augenbrauenstyling, Maniküre und Fußpflege in Telfs. Seit 2013 für dich da.",
  keywords: [
    "Kosmetikstudio Telfs", "Wimpernverlängerung Telfs", "Wimpernlifting Telfs", 
    "Fußpflege Telfs", "Maniküre Telfs", "Augenbrauenstyling Telfs", 
    "Schönheitssalon Telfs", "Melanie Steiner"
  ],
  openGraph: {
    title: "Beautiful Me | Kosmetikstudio in Telfs",
    description: "Expertin für Wimpern, Fußpflege & Maniküre in Telfs. Vereinbare jetzt deinen Termin bei Melanie Steiner.",
    url: "https://www.beautifulme.at",
    siteName: "Beautiful Me",
    locale: "de_AT",
    type: "website",
  },
  alternates: {
    canonical: "https://www.beautifulme.at",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Beautiful Me - Melanie Steiner",
  "image": "https://www.beautifulme.at/images/Logo-Quer.jpg",
  "@id": "https://www.beautifulme.at",
  "url": "https://www.beautifulme.at",
  "telephone": "+4369917149957",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Obermarktstraße 21",
    "addressLocality": "Telfs",
    "postalCode": "6410",
    "addressCountry": "AT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.3060,
    "longitude": 11.0729
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.beautifulme.at"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${epilogue.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
