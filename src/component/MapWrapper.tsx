"use client";

import dynamic from 'next/dynamic';

const HealthcareMap = dynamic(() => import("./HealthcareMap"), {
  ssr: false,
  loading: () => <div>Loading map...</div>
});

export default function MapWrapper() {
  return <HealthcareMap />;
}
