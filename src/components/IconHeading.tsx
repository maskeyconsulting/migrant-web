import { ReactNode } from "react";
import { FaHospital, FaShieldAlt, FaPhone, FaBrain } from "react-icons/fa";

interface IconHeadingProps {
  icon: string;
  children: ReactNode;
}

const iconMap: { [key: string]: typeof FaHospital } = {
  hospital: FaHospital,
  insurance: FaShieldAlt,
  contacts: FaPhone,
  "mental-health": FaBrain,
};

export default function IconHeading({ icon, children }: IconHeadingProps) {
  const IconComponent = iconMap[icon] || FaHospital;

  return (
    <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
      <IconComponent className="w-6 h-6 text-red-600" />
      {children}
    </h2>
  );
}
