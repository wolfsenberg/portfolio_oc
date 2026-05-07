import type { Metadata } from "next";
import { Intel_One_Mono } from "next/font/google";
import "./globals.css";

const intelMono = Intel_One_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Geinel Niño Dungao — Portfolio",
  description: "Portfolio of Geinel Niño A. Dungao — IT Student at Polytechnic University of the Philippines",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={intelMono.variable}>
      <body>{children}</body>
    </html>
  );
}
