// src/components/Footer.tsx
// Footer with links and language options

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600">&copy; 2024 Migrant Worker Guide</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href={`/${locale}/about`}
              className="text-gray-600 hover:text-gray-800"
            >
              {t("about")}
            </Link>
            <Link
              href={`/${locale}/privacy-safety`}
              className="text-gray-600 hover:text-gray-800"
            >
              {t("privacySafety")}
            </Link>
            <Link
              href={`/${locale}/partners`}
              className="text-gray-600 hover:text-gray-800"
            >
              {t("partners")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
