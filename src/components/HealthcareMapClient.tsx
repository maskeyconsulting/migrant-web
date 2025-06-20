"use client";

import dynamic from 'next/dynamic';

const HealthcareMap = dynamic(
  () => import('@/components/HealthcareMap'),
  { ssr: false }
);

export default function HealthcareMapClient() {
  return (
    <div className="h-[600px] w-full">
      <HealthcareMap />
    </div>
  );
}
