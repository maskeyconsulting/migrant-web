"use client";

import React, { useState, useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
}

export default function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsShowing(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setTimeout(() => setIsShowing(false), 300);
    }
  }, [isOpen]);



  if (!isShowing) return null;

  const youtubeEmbedUrl = videoId 
    ? `https://www.youtube.com/embed/${videoId}`
    : "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div
      className="absolute inset-0 bg-white/50"
      onClick={onClose}
      />
      <div className="relative bg-black rounded-lg w-full max-w-4xl mx-4 overflow-hidden">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
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
          d="M6 18L18 6M6 6l12 12"
        />
        </svg>
      </button>
      <div className="w-full aspect-video">
        {videoId ? (
        <iframe
          width="100%"
          height="100%"
          src={youtubeEmbedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        ) : null}
      </div>
      </div>
    </div>
  );
};


