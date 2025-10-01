import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Global metadata for SEO
export const metadata = {
  title: "Aayush Khadka | Backend Developer Portfolio",
  description:
    "Official portfolio of Aayush Khadka, a backend developer skilled in Node.js, Express, MongoDB, and scalable systems.",
  keywords: [
    "Aayush Khadka",
    "Backend Developer",
    "Node.js Developer Nepal",
    "Portfolio",
    "CSIT Developer",
    "Express",
    "MongoDB",
    "Next.js",
    "Nepal Developer",
  ],
  authors: [{ name: "Aayush Khadka", url: "https://www.aayush-khadka.tech" }],
  creator: "Aayush Khadka",
  metadataBase: new URL("https://www.aayush-khadka.tech"),
  openGraph: {
    title: "Aayush Khadka | Backend Developer",
    description:
      "Explore the work and skills of Aayush Khadka, a backend engineer focused on APIs, microservices, and modern tech stacks.",
    url: "https://www.aayush-khadka.tech",
    siteName: "Aayush Khadka Portfolio",
    images: [
      {
        url: "https://www.aayush-khadka.tech/img.jpg",
        width: 1200,
        height: 630,
        alt: "Aayush Khadka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Khadka | Backend Developer",
    description:
      "Visit the portfolio of Aayush Khadka, a backend developer building scalable APIs and web systems.",
    images: ["https://www.aayush-khadka.tech/img.jpg"],
  },
  alternates: {
    canonical: "https://www.aayush-khadka.tech",
  },
};

// ✅ Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Search Console verification - replace with actual code */}
        <meta
          name="google-site-verification"
          content="google4eb2e009407006a2"
        />

        {/* ✅ Structured Data (JSON-LD) for schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aayush Khadka",
              url: "https://www.aayush-khadka.tech",
              image: "https://www.aayush-khadka.tech/img.jpg",
              sameAs: [
                "https://github.com/Aayush-khadka",
                "https://www.linkedin.com/in/aayush-khadka-0513931b0/",
              ],
              jobTitle: "Backend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Amrit Campus",
              },
              knowsAbout: [
                "Node.js",
                "Express",
                "MongoDB",
                "APIs",
                "Microservices",
                "JavaScript",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
