import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);

      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Circle radius & stroke calculation
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-11 h-11 rounded-full flex items-center justify-center shadow-lg bg-white hover:bg-[#0A1A44] text-[#0A1A44] hover:text-white transition-colors"
        >
          <FaArrowUp className="absolute text-xl" />
          {/* SVG Circular Progress */}
          <svg
            className="absolute w-14 h-14 -rotate-90"
            width="56"
            height="56"
          >
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="#E1B546"
              strokeWidth="4"
              fill="transparent"
              strokeOpacity="0.5"
            />
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="#0A1A44"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-200 ease-out"
            />
          </svg>
        </button>
      )}
    </>
  );
}
