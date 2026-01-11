import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ClientsShowcase = () => {
  const sindhClients = [
    "Dolmen Mall (Tariq Road & Hyderi)",
    "Shah Abdul Latif University",
    "JJ Jeans",
    "Ramada Hotel Karachi",
    "Arabian Sea Country Club",
    "Continental Banquet",
    "Lucky One Mall",
    "Artistic Denim Milliners",
    "United Chartered School"
  ];

  const punjabClients = [
    "Matco Rice LHR",
    "Telecard (Multan/Faisalabad/LHR)",
    "Vital Group GWA",
    "Nishat Boutique LHR",
    "Niaz Factory LHR",
    "Zia Hospital LHR"
  ];

  return (
    <section className="py-24 bg-gray-50 px-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-[#0A1A44] mb-4 uppercase tracking-tighter">
            Our Valued Clients
          </h2>
          <p className="text-gray-500 text-lg font-medium">Partnering with leading brands across Sindh & Punjab since 2009.</p>
        </motion.div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {/* Sindh Section */}
          <div>
            <h3 className="text-2xl font-black text-[#A13A32] mb-8 uppercase tracking-widest flex items-center gap-4">
              Sindh Province <div className="h-1 flex-1 bg-gray-200"></div>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sindhClients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: 10, backgroundColor: "#fff" }}
                  className="bg-white shadow-sm hover:shadow-xl p-6 rounded-2xl flex items-center gap-4 transition-all border border-gray-100"
                >
                  <div className="bg-[#A13A32]/10 p-2 rounded-lg">
                    <FaCheckCircle className="text-[#A13A32] text-xl" />
                  </div>
                  <p className="text-[#0A1A44] font-bold text-sm tracking-tight">{client}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Punjab Section */}
          <div>
            <h3 className="text-2xl font-black text-[#0A1A44] mb-8 uppercase tracking-widest flex items-center gap-4">
              Punjab Province <div className="h-1 flex-1 bg-gray-200"></div>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {punjabClients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: -10, backgroundColor: "#fff" }}
                  className="bg-white shadow-sm hover:shadow-xl p-6 rounded-2xl flex items-center gap-4 transition-all border border-gray-100"
                >
                  <div className="bg-[#0A1A44]/10 p-2 rounded-lg">
                    <FaCheckCircle className="text-[#0A1A44] text-xl" />
                  </div>
                  <p className="text-[#0A1A44] font-bold text-sm tracking-tight">{client}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsShowcase;
