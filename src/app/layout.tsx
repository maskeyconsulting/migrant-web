import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Migrant Worker Guide - Qatar",
  description: "Guide for Nepali migrant workers in Qatar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
