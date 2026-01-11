// ServicesOverview.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import {
  FaUserShield,
  FaCamera,
  FaBuildingShield,
  FaCarSide,
} from "react-icons/fa6";
import { FaAd } from "react-icons/fa";

const ServicesOverview = () => {
  const services = [
    {
      title: "Armed Security Guards",
      description:
        "Highly trained armed personnel ensuring complete protection for businesses, homes & institutions.",
      icon: FaUserShield,
    },
    {
      title: "Unarmed Security Guards",
      description:
        "Professional, uniformed unarmed guards for office buildings, plazas, malls, and private properties.",
      icon: FaAd,
    },
    {
      title: "CCTV Monitoring & Control",
      description:
        "24/7 CCTV monitoring and rapid response surveillance for modern security needs.",
      icon: FaCamera,
    },
    {
      title: "Corporate Security Solutions",
      description:
        "Complete corporate protection including access control, patrolling, and entry management.",
      icon: FaBuildingShield,
    },
    {
      title: "Mobile Security Patrol",
      description:
        "Fast mobile patrolling service with trained officers for wide-area protection.",
      icon: FaCarSide,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        Our Professional <span className="text-green-600">Security Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
