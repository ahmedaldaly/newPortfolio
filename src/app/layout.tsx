import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  variable: "--font-zilla-slab",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Ahmed Eldaly - Full Stack Developer & Software Engineer",
  description: "Professional portfolio of Ahmed Eldaly, a Full Stack Developer and Software Engineer specializing in web development, mobile apps, and modern technologies. View my projects, skills, and experience.",
  keywords: "Ahmed Eldaly, Full Stack Developer, Software Engineer, Web Development, React, Next.js, Node.js, Portfolio",
  authors: [{ name: "Ahmed Eldaly" }],
  creator: "Ahmed Eldaly",
  publisher: "Ahmed Eldaly",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "eg",
    url: "https://new-portfolio-smoky-gamma-86.vercel.app/",
    title: "Ahmed Eldaly - Full Stack Developer & Software Engineer",
    description: "Professional portfolio of Ahmed Eldaly, a Full Stack Developer and Software Engineer specializing in web development, mobile apps, and modern technologies.",
    siteName: "Ahmed Eldaly Portfolio",
    images: [
      {
        url: "/الدالي 123.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Eldaly - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Eldaly - Full Stack Developer & Software Engineer",
    description: "Professional portfolio of Ahmed Eldaly, a Full Stack Developer and Software Engineer specializing in web development, mobile apps, and modern technologies.",
    images: ["/الدالي 123.png"],
    creator: "@ahmed_eldaly"
  },
  icons: {
    icon: '/eldaly.png',
    apple: '/eldaly.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-site-verification", // Add your Google Search Console verification code
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="theme-color" content="#242537" />
      </head>
      <body className={`${zillaSlab.variable} antialiased bg-[#242537]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
