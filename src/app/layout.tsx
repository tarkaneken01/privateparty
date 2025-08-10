import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import RootNavbarSwitcher from "@/components/RootNavbarSwitcher";
import Preloader from "@/components/Preloader";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Private Party — Luxury Lifestyle & Travel",
  description:
    "Private Party is a luxury lifestyle management service offering exclusive travel, concierge, and event experiences with unmatched hotel rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hanken.variable} antialiased font-sans bg-[#050505] text-white`}>
        <Preloader />
        <RootNavbarSwitcher />
        {children}
      </body>
    </html>
  );
}
