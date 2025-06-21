import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface MoreInfoButtonProps {
  href: string;
}
export default function MoreInfoButton({ href }: MoreInfoButtonProps) {
  const t = useTranslations("common");

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 mt-4 text-red-600 hover:text-red-700 font-medium"
    >
      {t("moreInformation")} <FaArrowRight className="w-4 h-4" />
    </Link>
  );
}
