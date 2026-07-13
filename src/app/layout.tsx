import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import DotGridReveal from "@/components/DotGridReveal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://santiagofuenmayorruiz.com";
const TITLE = "Santiago Fuenmayor Ruiz — Desarrollador Full-Stack";
const DESCRIPTION =
  "Portfolio de Santiago Fuenmayor Ruiz: proyectos web, sistemas IoT y videojuegos construidos de principio a fin, desde Valencia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Santiago Fuenmayor Ruiz",
  },
  description: DESCRIPTION,
  keywords: [
    "Santiago Fuenmayor Ruiz",
    "Santiago Fuenmayor",
    "desarrollador full-stack",
    "desarrollador web Valencia",
    "portfolio desarrollador",
    "Next.js developer",
    "UPV Tecnologías Interactivas",
  ],
  authors: [{ name: "Santiago Fuenmayor Ruiz", url: SITE_URL }],
  creator: "Santiago Fuenmayor Ruiz",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Santiago Fuenmayor Ruiz",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Santiago Fuenmayor Ruiz",
  url: SITE_URL,
  jobTitle: "Desarrollador Full-Stack",
  email: "mailto:sanfuenmayor@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Valencia",
    addressCountry: "ES",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitat Politècnica de València",
  },
  sameAs: ["https://github.com/santifuenma"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <CustomCursor />
        <DotGridReveal />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
