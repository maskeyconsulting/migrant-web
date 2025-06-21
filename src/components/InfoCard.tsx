import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
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
      className="p-3 rounded-md border-[0.5px] border-neutral-300 shadow-md hover:shadow-lg transition-shadow duration-300 max-w-60 min-w-40 aspect-square flex items-center justify-center"
    >
      <div className="flex flex-col items-center space-y-4">
        {IconComponent ? (
          <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-red-800" />
        ) : (
          icon && <Image src={icon} alt={t(title)} width={64} height={64} />
        )}
        <h3 className="text-lg sm:text-xl font-semibold -font-mono text-center">
          {t(title)}
        </h3>
      </div>
    </Link>
  );
};

export default InfoCard;
