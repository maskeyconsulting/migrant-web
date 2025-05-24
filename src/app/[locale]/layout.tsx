// src/app/[locale]/layout.tsx
"use client";

import "../globals.css";
import { Inter, Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound, useParams } from "next/navigation";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

type Params = {
  locale: string;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [messages, setMessages] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const params = useParams();
  const locale = params?.locale as string;

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const loadedMessages = (await import(`../../messages/${locale}.json`))
          .default;
        setMessages(loadedMessages);
        setIsLoaded(true);
      } catch (error) {
        notFound();
      }
    };

    loadMessages();
  }, [locale]);

  return (
    <html lang={locale} className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        {messages && (
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        )}
      </body>
    </html>
  );
}
