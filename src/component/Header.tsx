import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { FcGlobe } from "react-icons/fc";

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
              <FcGlobe className="inline-block mr-2" />
              {t("countries")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
