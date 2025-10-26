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
    "Official portfolio of Aayush Khadka, a backend developer from Nepal. Skilled in Node.js, Express, MongoDB, APIs, and building scalable backend systems.",
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
    "Microservices",
    "APIs",
  ],
  authors: [{ name: "Aayush Khadka", url: "https://www.aayush-khadka.tech" }],
  creator: "Aayush Khadka",
  metadataBase: new URL("https://www.aayush-khadka.tech"),
  openGraph: {
    title: "Aayush Khadka | Backend Developer Portfolio",
    description:
      "Explore the work and skills of Aayush Khadka, a backend engineer building APIs, microservices, and scalable systems.",
    url: "https://www.aayush-khadka.tech",
    siteName: "Aayush Khadka Portfolio",
    images: [
      {
        url: "https://www.aayush-khadka.tech/img.jpg",
        width: 1200,
        height: 630,
        alt: "Aayush Khadka - Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Khadka | Backend Developer Portfolio",
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
  const projects = [
    {
      title: "Inquizzit",
      url: "https://inquizzit.vercel.app/",
      description:
        "Real-time quiz app built with Node.js and Socket.IO, allowing users to generate questions instantly.",
      datePublished: "2025-01-01",
    },
    {
      title: "Grill My Reddit",
      url: "https://grillmyreddit.vercel.app/",
      description:
        "AI-powered Reddit roaster that humorously generates personalized insults based on recent Reddit comments.",
      datePublished: "2025-03-01",
    },
    {
      title: "The Samachar",
      url: "https://thesamachar.vercel.app/",
      description:
        "News aggregator using Puppeteer in Node.js to collect articles with AI-generated summaries and trending insights.",
      datePublished: "2025-04-01",
    },
    {
      title: "Video Streaming Backend API",
      url: "https://github.com/Aayush-khadka/Video-Streaming-Backend",
      description:
        "Comprehensive API for video streaming, featuring authentication, uploads, playlists, comments, and subscriptions.",
      datePublished: "2025-05-01",
    },
  ];

  return (
    <html lang="en">
      <head>
        {/* ✅ Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="ubxGpA7421nNcKxGYtLMOS7E03H_vC5aQ5gYQD3yEzs"
        />

        {/* ✅ Structured Data for Person */}
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
              worksFor: { "@type": "Organization", name: "Freelance" },
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

        {/* ✅ Structured Data for Projects */}
        {projects.map((project, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: project.title,
                url: project.url,
                author: { "@type": "Person", name: "Aayush Khadka" },
                datePublished: project.datePublished,
                description: project.description,
              }),
            }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
