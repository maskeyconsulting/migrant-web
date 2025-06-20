"use client";

import dynamic from "next/dynamic";

const HealthcareMap = dynamic(() => import("@/components/HealthcareMap"), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-gray-100 animate-pulse" />,
});

export default function HealthcareMapClient() {
  return (
    <div className="my-8 border border-gray-200 rounded-lg overflow-hidden">
      <div className="relative w-full h-[600px]">
        <HealthcareMap />
      </div>
    </div>
  );
}
