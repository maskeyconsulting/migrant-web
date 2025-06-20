"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import L from "leaflet";

// Dynamically import react-leaflet components with no SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

const locations = [
  {
    type: "Hospital",
    name: "Hamad General Hospital",
    position: [25.276987, 51.520008],
  },
  {
    type: "Community Clinic",
    name: "West Bay Health Center",
    position: [25.324167, 51.531944],
  },
  {
    type: "Mental Health Clinic",
    name: "Mental Health Service Center",
    position: [25.285447, 51.53104],
  },
];

const HealthcareMap = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Fix the leaflet icon issue
    delete (L as any).Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
      iconUrl: require("leaflet/dist/images/marker-icon.png").default,
      shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
    });
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <MapContainer
      center={[25.285447, 51.53104]}
      zoom={11}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={loc.position as [number, number]}>
          <Popup>
            <strong>{loc.type}</strong>: {loc.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default HealthcareMap;
