import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beautiful Me - Melanie Steiner",
  description: "Seit 2013 ist Melanie Steiner die Ansprechpartnerin in Telfs, wenn es um das Thema Wimpern, Augenbrauenstyling, Maniküre und Fußpflege geht.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${epilogue.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col font-sans text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
