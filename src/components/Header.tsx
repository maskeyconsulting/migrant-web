"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { FcGlobe } from "react-icons/fc";
import { usePathname } from "next/navigation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Header = () => {
  const t = useTranslations("common");
  const locale = useLocale();
  const toggleLocale = locale === "en" ? "ne" : "en";
  const pathname = usePathname();

  // Add this function to display the language name
  const getLanguageDisplay = (loc: string) => {
    return loc === "en" ? "नेपाली" : "English";
  };

  // Remove the current locale prefix from the pathname
  const getPathWithoutLocale = () => {
    const parts = pathname.split("/");
    // Remove empty string at start and locale at index 1
    if (parts.length > 1 && (parts[1] === "en" || parts[1] === "ne")) {
      return "/" + parts.slice(2).join("/");
    }
    return pathname;
  };

  // Generate breadcrumb trail from current path
  const getBreadcrumbs = () => {
    const parts = pathname.split("/").filter(Boolean);
    // Remove locale from breadcrumbs
    const segments =
      parts[0] === "en" || parts[0] === "ne" ? parts.slice(1) : parts;
    let path = `/${locale}`;
    const crumbs = segments.map((seg, idx) => {
      path += `/${seg}`;
      return (
        <span key={idx} className="flex items-center">
          <span className="mx-1 text-gray-400">/</span>
          <Link href={path} className="hover:underline text-blue-600">
            {seg.charAt(0).toUpperCase() + seg.slice(1)}
          </Link>
        </span>
      );
    });
    return (
      <nav className="mb-2 text-sm flex items-center">
        <Link href={`/${locale}`} className="hover:underline text-blue-600">
          {t("home")}
        </Link>
        {crumbs}
      </nav>
    );
  };

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="text-2xl font-bold">
            {t("home")}
          </Link>
          <div className="flex flex-col items-end">
            <div className="flex items-center space-x-6">
              <Link
                href={`/${locale}/countries`}
                className="hover:text-gray-600"
              >
                <FcGlobe className="inline-block mr-2" />
                {t("countries")}
              </Link>
              <Link
                href={`/${toggleLocale}${getPathWithoutLocale()}`}
                className="hover:text-gray-600"
              >
                {getLanguageDisplay(locale)}
              </Link>
            </div>
            <div className="flex col-auto items-center text-red-600 mt-2">
              <span>🚩</span>
              {getBreadcrumbs()}
            </div>
          </div>
        </div>
        <TextGenerateEffect words={t("headerDisclaimer")} />
      </div>
    </header>
  );
};

export default Header;
