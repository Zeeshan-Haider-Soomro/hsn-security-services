// ServiceCard.jsx
import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-2xl transition cursor-pointer">
      <div className="flex items-center justify-center bg-green-100 w-14 h-14 rounded-full mb-4">
        <Icon className="text-green-600 text-3xl" />
      </div>

      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
