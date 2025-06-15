"use client";

import React, { useState, useEffect, useRef } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  isYouTube?: boolean;
}

const VideoModal = ({
  isOpen,
  onClose,
  videoSrc,
  isYouTube = false,
}: VideoModalProps) => {
  const [isShowing, setIsShowing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsShowing(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setTimeout(() => {
        setIsShowing(false);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 300);
    }
  }, [isOpen]);

  if (!isShowing) return null;

  const youtubeEmbedUrl = isYouTube
    ? videoSrc.replace("watch?v=", "embed/")
    : videoSrc;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-2 max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative pt-[56.25%]">
          {isYouTube ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={youtubeEmbedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              src={videoSrc}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
