import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href={`/${locale}`} className="text-2xl font-bold">
            {t("home")}
          </Link>
          <div className="flex items-center space-x-6">
            <Link href={`/${locale}/countries`} className="hover:text-gray-600">
              {t("countries")}
            </Link>
            <Link
              href={`/${locale}/pre-departure`}
              className="hover:text-gray-600"
            >
              {t("preDepInfo")}
            </Link>
            <Link
              href={`/${locale}/emergency-help`}
              className="hover:text-gray-600"
            >
              {t("emergencyHelp")}
            </Link>
            <Link
              href={`/${locale}/skills-learning`}
              className="hover:text-gray-600"
            >
              {t("skillsLearning")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
