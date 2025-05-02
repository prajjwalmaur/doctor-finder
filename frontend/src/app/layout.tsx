import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkModeToggle from "@/components/DarkModeToggle";

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
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <DarkModeToggle />
        {children}
      </body>
    </html>
  );
}
