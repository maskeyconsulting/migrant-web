import { ReactNode } from "react";
import {
  FaFileContract,
  FaBalanceScale,
  FaHandsHelping,
  FaMedkit,
  FaHospital,
  FaAmbulance,
  FaPassport,
  FaPlane,
  FaInfoCircle,
} from "react-icons/fa";

interface IconHeadingProps {
  icon: string;
  children: ReactNode;
}

const iconMap = {
  legal: FaFileContract,
  rights: FaBalanceScale,
  help: FaHandsHelping,
  insurance: FaMedkit,
  medical: FaHospital,
  emergency: FaAmbulance,
  passport: FaPassport,
  plane: FaPlane,
  info: FaInfoCircle,
};

export default function IconHeading({ icon, children }: IconHeadingProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];

  return (
    <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
      {IconComponent && <IconComponent className="w-6 h-6 text-red-600" />}
      {children}
    </h2>
  );
}
