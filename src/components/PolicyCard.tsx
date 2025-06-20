import { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  FaMedkit,
  FaHospital,
  FaAmbulance,
  FaFileContract,
  FaBalanceScale,
  FaHandsHelping,
  FaPassport,
  FaPlane,
  FaInfoCircle,
  FaExclamationTriangle,
  FaClipboardCheck,
  FaHeadset,
  FaDollarSign,
  FaFileAlt,
} from "react-icons/fa";

interface PolicyCardProps {
  icon: string;
  category: string;
  children: ReactNode;
}

const iconMap: { [key: string]: IconType } = {
  medical: FaMedkit,
  hospital: FaHospital,
  emergency: FaAmbulance,
  legal: FaFileContract,
  rights: FaBalanceScale,
  help: FaHandsHelping,
  insurance: FaMedkit,
  passport: FaPassport,
  plane: FaPlane,
  info: FaInfoCircle,
  contract: FaFileAlt,
  "fee-policy": FaDollarSign,
  "warning-sign": FaExclamationTriangle,
  checklist: FaClipboardCheck,
  support: FaHeadset,
};

export default function PolicyCard({
  icon,
  category,
  children,
}: PolicyCardProps) {
  const IconComponent = iconMap[icon] || FaMedkit;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <IconComponent className="w-8 h-8 text-red-600" />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">{category}</h3>
          <div className="prose max-w-none">{children}</div>
        </div>
      </div>
    </div>
  );
}
