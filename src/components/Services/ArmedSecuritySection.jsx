// ArmedSecuritySection.jsx
import React from "react";
import { FaUserShield } from "react-icons/fa6";

const ArmedSecuritySection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <FaUserShield className="text-green-600 text-5xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Armed Security Guards
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Our armed guards are trained to handle high-risk environments with discipline,
          tactical awareness, and rapid response capabilities. Trusted by banks, industries,
          government offices, and high-profile clients.
        </p>
      </div>
    </section>
  );
};

export default ArmedSecuritySection;
