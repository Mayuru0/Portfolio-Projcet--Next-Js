import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Common/NavBar";
import Footer from "@/Components/Common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👇 SEO Metadata Config 
export const metadata: Metadata = {
  title: "Mayuru Madhuranga | Full Stack Developer",
  description:
    "Official portfolio of Mayuru Madhuranga — a passionate full-stack developer specialized in MERN stack, React, and Next.js.",
  keywords: [
    "Mayuru Madhuranga",
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Next.js",
    "Sri Lankan Developer",
    "Portfolio",
  ],
  metadataBase: new URL("https://mayuru-portfolio.vercel.app/"), // Replace with your actual domain
  authors: [
    {
      name: "Mayuru Madhuranga",
      url: "https://mayuru-portfolio.vercel.app/",
    },
  ],
  creator: "Mayuru Madhuranga",
  openGraph: {
    title: "Mayuru Madhuranga | Full Stack Developer",
    description:
      "Explore projects and skills of Mayuru Madhuranga, a modern web developer specializing in MERN Stack and Next.js.",
    url: "https://mayuru-portfolio.vercel.app/",
    siteName: "Mayuru Madhuranga Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dy972wrlb/image/upload/v1741633214/Portfolio%20%20%28React%20Js%29/lr88uy5trjaefcxsdjjj.png", 
        width: 1200,
        height: 630,
        alt: "Mayuru Madhuranga Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head >
        <meta name="google-site-verification" content="BtZqLJosv8hqOAg4CbdBugkAzGjSo0bxSFIcoMCsDkA" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
