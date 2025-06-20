"use client";
import React from "react";
import InfoCard from "@/components/InfoCard";
import FeedbackButtons from "@/components/FeedbackButtons";
import VideoModal from "@/components/VideoModal";
import { VideoCarousel } from "@/components/VideoCarousel";
import { useTranslations } from "next-intl";
import { GoLaw } from "react-icons/go";
import { MdOutlinePermPhoneMsg, MdHotel, MdSchool } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { FaPlane } from "react-icons/fa";
import { TbHospitalCircleFilled } from "react-icons/tb";
import Image from "next/image";

export default function HomeClient({ locale }: { locale: string }) {
  const t = useTranslations("homePage");
  const v = useTranslations("videos");

  const sampleVideos = [
    {
      id: "FxLLO-dO0gk",
      title: v("salaryAndLiving"),
      thumbnail: "https://img.youtube.com/vi/FxLLO-dO0gk/maxresdefault.jpg",
    },
    {
      id: "odBcfd_74Vw",
      title: v("gettingToQatar"),
      thumbnail: "https://img.youtube.com/vi/odBcfd_74Vw/maxresdefault.jpg",
    },
    {
      id: "9egxOlz_CNE",
      title: v("kathmanduToQatar"),
      thumbnail: "https://img.youtube.com/vi/9egxOlz_CNE/maxresdefault.jpg",
    },
    {
      id: "mti12ceqxho",
      title: v("nepalToQatar"),
      thumbnail: "https://img.youtube.com/vi/mti12ceqxho/maxresdefault.jpg",
    },
    {
      id: "TsOJ0WqyFQs",
      title: v("dohaToKathmandu"),
      thumbnail: "https://img.youtube.com/vi/TsOJ0WqyFQs/maxresdefault.jpg",
    },
    {
      id: "th0CfwNet6c",
      title: v("drivingInDoha"),
      thumbnail: "https://img.youtube.com/vi/th0CfwNet6c/maxresdefault.jpg",
    },
    {
      id: "0h59rIgfhlo",
      title: v("firstTimeFlying"),
      thumbnail: "https://img.youtube.com/vi/0h59rIgfhlo/maxresdefault.jpg",
    },
    {
      id: "pZmlN6PULNE",
      title: v("preFlightCheck"),
      thumbnail: "https://img.youtube.com/vi/pZmlN6PULNE/maxresdefault.jpg",
    },
  ];

  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const [selectedVideoId, setSelectedVideoId] = React.useState("");

  const handleVideoSelect = (videoId: string) => {
    setSelectedVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 items-center mb-8 gap-0">
        <div className="flex justify-center mr-0">
          <Image
            src="/placeholder.png"
            alt="Workers in Qatar"
            width={500}
            height={500}
            className="bg-gray-200"
          />
        </div>
        <div className="ml-1 p-0">
          <h1 className="text-4xl font-semi-bold mb-4">{t("title")}</h1>
          <p className="text-xl">{t("subtitle")}</p>
        </div>
      </div>

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
        <h2 className="text-2xl font-bold mb-8  ">{t("featuredVideos")}</h2>
        <VideoCarousel
          videos={sampleVideos}
          onVideoSelect={handleVideoSelect}
        />
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={selectedVideoId}
      />
    </>
  );
}
