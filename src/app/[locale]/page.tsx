// src/app/[locale]/page.tsx
// Home page implementation

// Static params for SSG
export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ne" }
  ];
}

// Move all client logic and useTranslations to a client component
import HomeClient from "@/components/HomeClient";

export default async function Home({ params }: { params: Promise < { locale: string } > }) {
  // Just pass the locale down
  return <HomeClient locale={(await params).locale || "en"} />;
}
