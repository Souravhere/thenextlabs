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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The Next Labs | The Next Labs for Modern Websites",
    description:
      "Elevate your digital presence with The Next Labs. We build websites that are fast, sleek, and optimized for growth.",
    url: "https://thenextlabs.com",
    siteName: "The Next Labs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Next Labs | Modern Websites for Your Business",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Next Labs | The Next Labs for Modern Websites",
    description:
      "Discover The Next Labs: your go-to solution for modern, high-performing websites. Let's build your online success!",
    site: "@thenextlabs",
    creator: "@thenextlabs",
    images: ["/twitter-card.jpg"],
  },
  metadataBase: new URL("https://thenextlabs.com"),
  viewport: "width=device-width, initial-scale=1",
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
        {/* SEO Metadata */}
        <meta name="author" content="Sourav Chhimpa" />
        <meta
          name="keywords"
          content="modern websites, responsive design, custom animations, SEO optimization, The Next Labs, website development"
        />
        <meta name="email" content="hi@thenextlabs.com" />
        <meta name="contact" content="+91 6367477611" />

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
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 6367477611",
                email: "hi@thenextlabs.com",
                contactType: "Customer Support",
              },
              founder: {
                "@type": "Person",
                name: "Sourav Chhimpa",
              },
              sameAs: [
                "https://www.linkedin.com/company/thenextlabs",
                "https://twitter.com/thenextlabs",
                "https://www.facebook.com/thenextlabs",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#03031D]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
