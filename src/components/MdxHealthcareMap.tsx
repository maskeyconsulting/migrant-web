"use client";

import dynamic from "next/dynamic";

const HealthcareMapClient = dynamic(
  () => import("@/components/HealthcareMapClient"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[600px] w-full bg-gray-100 animate-pulse" />
    ),
  }
);

export default function MdxHealthcareMap() {
  return <HealthcareMapClient />;
}
