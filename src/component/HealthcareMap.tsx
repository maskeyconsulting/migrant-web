
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix: Leaflet icon issue
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

// Removed unnecessary line as _getIconUrl is not a valid property

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
  iconUrl: "/leaflet/images/marker-icon.png",
  shadowUrl: "/leaflet/images/marker-shadow.png",
});

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

export default function HealthcareMap() {
  useEffect(() => {
    // This ensures the code runs only on the client-side
  }, []);

  return (
    <MapContainer
      center={[25.285447, 51.53104]}
      zoom={11}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
}
