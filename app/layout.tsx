import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/accessibility/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "BrighterThoughts - Mental Health Awareness & Support",
  description: "A comprehensive mental health awareness platform providing resources, support, and tools for individuals seeking help with mental health challenges.",
  keywords: ["mental health", "anxiety", "depression", "PTSD", "mental wellness", "support", "resources"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <SkipLink />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
