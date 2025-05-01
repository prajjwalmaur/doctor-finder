import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doctor Finder - Find the Best Doctors Near You",
  description: "Find and book appointments with the best doctors in your area. Browse by specialization, location, and more.",
  keywords: "doctors, healthcare, medical, appointments, specialists, physicians",
  openGraph: {
    title: "Doctor Finder - Find the Best Doctors Near You",
    description: "Find and book appointments with the best doctors in your area. Browse by specialization, location, and more.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
