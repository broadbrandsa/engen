import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

// Barlow Condensed ≈ Univers LT Std — Engen's official brand typeface.
// Reusing the same CSS variable names so all section components work unchanged.
const cormorant = Barlow_Condensed({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jakarta = Barlow({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Unified Communication — Integrated Experiences & Loyalty Programme Proposal | Engen",
  description:
    "A fully managed, omni-channel customer engagement platform and contact centre solution for Engen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
