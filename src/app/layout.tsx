import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/footer";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Next Labs | The Next Labs for Modern Websites",
  description:
    "The Next Labs specializes in creating modern, responsive, and user-friendly websites tailored to your business needs. Transform your online presence today!",
  generator: "Next.js",
  applicationName: "The Next Labs",
  referrer: "origin-when-cross-origin",
  keywords: [
    "modern websites",
    "responsive design",
    "custom animations",
    "SEO optimization",
    "The Next Labs",
    "website development",
    "web design",
    "digital solutions"
  ],
  authors: [{ name: "Sourav Chhimpa", url: "https://thenextlabs.com" }],
  creator: "Sourav Chhimpa",
  publisher: "The Next Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/Logos/favicon.ico" },
      { url: "/Logos/logo32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/Logos/logo32.png",
    apple: "/Logos/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/Logos/safari-pinned-tab.svg",
        color: "#03031D",
      },
    ],
  },
  openGraph: {
    title: "The Next Labs | The Next Labs for Modern Websites",
    description:
      "Elevate your digital presence with The Next Labs. We build websites that are fast, sleek, and optimized for growth.",
    url: "https://thenextlabs.com",
    siteName: "The Next Labs",
    images: [
      {
        url: "https://thenextlabs.com/meta/socialcard.png", // Using absolute URL
        width: 1200,
        height: 630,
        alt: "The Next Labs | Modern Websites for Your Business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Next Labs | The Next Labs for Modern Websites",
    description:
      "Discover The Next Labs: your go-to solution for modern, high-performing websites. Let's build your online success!",
    site: "@thenextlabs_",
    creator: "@thenextlabs_",
    images: ["https://thenextlabs.com/meta/socialcard.png"], // Using absolute URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL("https://thenextlabs.com"),
  alternates: {
    canonical: "https://thenextlabs.com",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
    yandex: "your-yandex-verification", // Add if you use Yandex
  },
  category: "technology",
  other: {
    "theme-color": "#03031D",
    "msapplication-TileColor": "#03031D",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Sourav Chhimpa" />
        <meta name="email" content="hi@thenextlabs.com" />
        <meta name="contact" content="+91 6367477611" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://thenextlabs.com" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Next Labs",
              url: "https://thenextlabs.com",
              logo: "https://thenextlabs.com/logo.png",
              description:
                "The Next Labs specializes in creating modern, responsive websites tailored to your business needs.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 6367477611",
                email: "hi@thenextlabs.com",
                contactType: "Customer Support",
              },
              founder: {
                "@type": "Person",
                name: "Sourav Chhimpa",
                jobTitle: "Founder",
                url: "https://thenextlabs.com"
              },
              sameAs: [
                "https://www.linkedin.com/company/the-next-labs/",
                "https://x.com/thenextlabs_",
                "https://github.com/Souravhere",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#03031D]`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}