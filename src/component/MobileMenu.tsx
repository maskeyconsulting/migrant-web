"use client";
import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500 hover:text-black hover:border-black"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              HOME
            </Link>
            <Link
              href="/countries"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              COUNTRIES
            </Link>
            <Link
              href="/pre-departure-info"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              PRE-DEPARTURE INFO
            </Link>
            <Link
              href="/emergency-help"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              EMERGENCY HELP
            </Link>
            <Link
              href="/skills-learning"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            >
              SKILLS & LEARNING
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
