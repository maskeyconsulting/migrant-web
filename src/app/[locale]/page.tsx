// src/app/[locale]/page.tsx
// Home page implementation
"use client";
import Image from "next/image";
import InfoCard from "@/component/InfoCard";
import VideoButton from "@/component/VideoButton";
import SectionContainer from "@/component/SectionContainer";
import FeedbackButtons from "@/component/FeedbackButtons";
import { useState, useEffect } from "react"; // Import useEffect
import VideoModal from "@/component/VideoModal";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // New state to track client-side rendering
  const params = useParams();
  const locale = (params?.locale as string) || "en"; // Replace "default-locale" with your desired fallback
  const t = useTranslations("homePage");

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts on the client
  }, []);

  return (
    <div>
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
        />
        <InfoCard
          icon="/icons/emergency-phone.svg"
          title="emergencyNumbers"
          href={`/${locale}/emergency-numbers`}
        />
        <InfoCard
          icon="/icons/accommodation.svg"
          title="accommodation"
          href={`/${locale}/accommodation`}
        />
        <InfoCard
          icon="/icons/hard-hat.png"
          title="jobContractTips"
          href={`/${locale}/job-contract`}
        />
        <InfoCard
          icon="/icons/departure.svg"
          title="preDepartureInfo"
          href={`/${locale}/pre-departure`}
        />
        <InfoCard
          icon="/icons/healthcare.svg"
          title="healthcareInsurance"
          href={`/${locale}/healthcare-insurance`}
        />
      </div>

      <FeedbackButtons
        onYes={() => console.log("Yes clicked")}
        onNo={() => console.log("No clicked")}
      />

      {isClient && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoSrc="https://www.youtube.com/watch?v=odBcfd_74Vw"
          isYouTube={true}
        />
      )}
    </div>
  );
}
