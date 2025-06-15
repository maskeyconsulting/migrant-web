import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { Icon } from "leaflet";
import { IconType } from "react-icons";

interface InfoCardProps {
  icon: string;
  title: string;
  href: string;
  IconComponent?: IconType;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  href,
  IconComponent,
}) => {
  const t = useTranslations("homePage");

  return (
    <Link
      href={href}
      className="block p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 w-64 h-64 flex items-center justify-center"
    >
      <div className="flex flex-col items-center space-y-4">
        {IconComponent ? (
          <IconComponent className="w-16 h-16 text-red-800" />
        ) : (
          icon && <Image src={icon} alt={t(title)} width={64} height={64} />
        )}
        <h3 className="text-xl font-semibold text-center">{t(title)}</h3>
      </div>
    </Link>
  );
};

export default InfoCard;
