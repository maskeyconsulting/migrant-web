"use client";
import React from "react";
import InfoCard from "@/component/InfoCard";
import FeedbackButtons from "@/component/FeedbackButtons";
import VideoModal from "@/component/VideoModal";
import { useTranslations } from "next-intl";
import { GoLaw } from "react-icons/go";
import { MdOutlinePermPhoneMsg, MdHotel, MdSchool } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { FaPlane } from "react-icons/fa";
import { TbHospitalCircleFilled } from "react-icons/tb";
import Image from "next/image";

export default function HomeClient({ locale }: { locale: string }) {
  const t = useTranslations("homePage");
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
        <div>
          <Image
            src="/placeholder.png"
            alt="Workers in Qatar"
            width={400}
            height={400}
            className="bg-gray-200"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl">{t("subtitle")}</p>
        </div>
      </div>

      <div className="my-8">
        <button
          onClick={() => setIsVideoModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {t("watchVideo")}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <InfoCard
          icon="/icons/legal-document.svg"
          title="legalRights"
          href={`/${locale}/legal-rights`}
          IconComponent={GoLaw}
        />
        <InfoCard
          icon="/icons/emergency-phone.svg"
          title="emergencyNumbers"
          href={`/${locale}/emergency-help`}
          IconComponent={MdOutlinePermPhoneMsg}
        />
        <InfoCard
          icon="/icons/accommodation.svg"
          title="accommodation"
          href={`/${locale}/accommodation`}
          IconComponent={MdHotel}
        />
        <InfoCard
          icon="/icons/hard-hat.png"
          title="jobContractTips"
          href={`/${locale}/job-contract`}
          IconComponent={GrUserWorker}
        />
        <InfoCard
          icon="/icons/departure.svg"
          title="preDepartureInfo"
          href={`/${locale}/pre-departure`}
          IconComponent={FaPlane}
        />
        <InfoCard
          icon="/icons/healthcare.svg"
          title="healthcareInsurance"
          href={`/${locale}/healthcare-insurance`}
          IconComponent={TbHospitalCircleFilled}
        />
        <InfoCard
          icon="/icons/skillslearning.svg"
          title="skillsLearning"
          href={`/${locale}/skills-learning`}
          IconComponent={MdSchool}
        />
      </div>

      <FeedbackButtons
        onYes={() => console.log("Yes clicked")}
        onNo={() => console.log("No clicked")}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc="https://www.youtube.com/watch?v=odBcfd_74Vw"
        isYouTube={true}
      />
    </>
  );
}