// src/app/[locale]/page.tsx
// Home page implementation
import InfoCard from "@/components/InfoCard";
import VideoButton from "@/components/VideoButton";
import SectionContainer from "@/components/SectionContainer";
import FeedbackButtons from "@/components/FeedbackButtons";
import VideoModal from "@/components/VideoModal";
import { GoLaw } from "react-icons/go";
import { MdOutlinePermPhoneMsg, MdHotel, MdSchool } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { FaPlane } from "react-icons/fa";
import { TbHospitalCircleFilled } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

// Static params for SSG
export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "ne" }
  ];
}

// Move all client logic and useTranslations to a client component
import HomeClient from "@/components/HomeClient";

export default async function Home({ params }: { params: Promise < { locale: string } > }) {
  // Just pass the locale down
  return <HomeClient locale={(await params).locale || "en"} />;
}
