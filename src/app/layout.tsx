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
  title: "Ahmed Eldaly - Full Stack Developer",
  description: "Full Stack Developer Portfolio",
  icons : '/eldaly.png'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${zillaSlab.variable} antialiased bg-[#242537]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
