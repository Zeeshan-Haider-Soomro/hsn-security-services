import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaCamera, FaTruck, FaFemale, FaFlagCheckered, FaShieldAlt } from "react-icons/fa";

const SecurityServices = () => {
  const services = [
    { title: "Security Guards", icon: <FaUserShield className="text-4xl" />, desc: "Highly trained guards for general vigilance and protection." },
    { title: "Armed Guards", icon: <FaFlagCheckered className="text-4xl" />, desc: "Expert armed personnel for high-risk security requirements." },
    { title: "Mobile Patrol", icon: <FaTruck className="text-4xl" />, desc: "Quick response teams for rapid area surveillance." },
    { title: "Lady Searchers", icon: <FaFemale className="text-4xl" />, desc: "Professional female staff for sensitive search operations." },
    { title: "CCTV Monitoring", icon: <FaCamera className="text-4xl" />, desc: "24/7 electronic surveillance and monitoring services." },
    { title: "Shield Protection", icon: <FaShieldAlt className="text-4xl" />, desc: "Comprehensive shielding for VIPs and critical infrastructure." },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A1A44] mb-4">
            Our Security Services
          </h2>
          <div className="w-24 h-1.5 bg-[#A13A32] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className="mb-6 flex justify-center text-[#A13A32] group-hover:text-[#0A1A44] transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0A1A44] mb-4 text-center">
                {s.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityServices;
