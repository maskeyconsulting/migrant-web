import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface InfoCardProps {
  icon: string;
  title: string;
  href: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, href }) => {
  const t = useTranslations("homePage");

  return (
    <Link
      href={href}
      className="block p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center space-x-3">
        <Image src={icon} alt="" width={32} height={32} />
        <h3 className="text-xl font-semibold">{t(title)}</h3>
      </div>
    </Link>
  );
};

export default InfoCard;
