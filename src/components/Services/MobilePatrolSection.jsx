// MobilePatrolSection.jsx
import React from "react";
import { FaCarSide } from "react-icons/fa6";

const MobilePatrolSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <FaCarSide className="text-green-600 text-5xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile Security Patrol</h2>
        <p className="text-gray-600">
          Our rapid-response mobile patrol officers monitor large areas, commercial sites,
          residential communities, and parking zones with continuous patrolling.
        </p>
      </div>
    </section>
  );
};

export default MobilePatrolSection;
