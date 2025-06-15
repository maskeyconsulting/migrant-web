// src/app/[locale]/layout.tsx

import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise <{ locale: string }>;
}) {
  // Do NOT fallback to "en" here, let Next.js handle the params
  const messages = (await import(`../../messages/${(await params).locale}.json`)).default;

  return (
    <html lang={(await params).locale}>
      <body>
        <NextIntlClientProvider locale={(await params).locale} messages={messages}>
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
