"use client";
import React from "react";
import InfoCard from "@/component/InfoCard";
import FeedbackButtons from "@/component/FeedbackButtons";
import VideoModal from "@/component/VideoModal";
import { VideoCarousel } from "@/component/VideoCarousel";
import { useTranslations } from "next-intl";
import { GoLaw } from "react-icons/go";
import { MdOutlinePermPhoneMsg, MdHotel, MdSchool } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { FaPlane } from "react-icons/fa";
import { TbHospitalCircleFilled } from "react-icons/tb";
import Image from "next/image";

const sampleVideos = [
  {
    id: "FxLLO-dO0gk",
    title: "Salary and Living",
    thumbnail: "https://img.youtube.com/vi/FxLLO-dO0gk/maxresdefault.jpg",
  },
  {
    id: "odBcfd_74Vw",
    title: "Getting to Qatar",
    thumbnail: "https://img.youtube.com/vi/odBcfd_74Vw/maxresdefault.jpg",
  },
  {
    id: "video3",
    title: "Finding Accommodation",
    thumbnail: "https://img.youtube.com/vi/SAMPLE_ID_3/maxresdefault.jpg",
  },
];

export default function HomeClient({ locale }: { locale: string }) {
  const t = useTranslations("homePage");
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const [selectedVideoId, setSelectedVideoId] = React.useState("");

  const handleVideoSelect = (videoId: string) => {
    setSelectedVideoId(videoId);
    setIsVideoModalOpen(true);
  };

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

      {/* <div className="my-8">
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
      </div> */}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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

      <section className="mt-5">
        {/* Different Section? */}
        <h3 className="text-3xl font-bold text-center ">{t("share")}</h3> 
        <div className=" flex flex-row w-full justify-center items-center gap-4 my-8">
          <InfoCard
            icon="/icons/skillslearning.svg"
            title="questionnaireForMigrants"
            href={`https://forms.gle/zC1vuJCrY7hRAMXg8`}
            IconComponent={MdSchool}
          />
          <InfoCard
            icon="/icons/skillslearning.svg"
            title="questionnaireForMigrantExperts"
            href={`https://forms.gle/Ma76utXHfsbDkDKC9`}
            IconComponent={MdSchool}
          />
        </div>
      </section>


      <div className="my-8">
        <h2 className="text-2xl font-bold mb-6">{t("featuredVideos")}</h2>
        <VideoCarousel videos={sampleVideos} onVideoSelect={handleVideoSelect} />
      </div>

      <FeedbackButtons
        onYes={() => console.log("Yes clicked")}
        onNo={() => console.log("No clicked")}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={selectedVideoId}
      />
    </>
  );
}
