import React from "react";
import { motion } from "framer-motion";
import { GiGlock, GiSawedOffShotgun, GiCrosshair, GiBroadheadArrow, GiBullets } from "react-icons/gi";

const WeaponsGallery = () => {
  const weapons = [
    { name: "30 Bore Pistol", icon: <GiGlock />, desc: "Handgun for rapid response" },
    { name: "12 Bore Shotgun", icon: <GiSawedOffShotgun />, desc: "Close-range protection" },
    { name: "30 Bore MP-5", icon: <GiCrosshair />, desc: "Tactical submachine capability" },
    { name: "12 Bore Semiauto", icon: <GiSawedOffShotgun />, desc: "Advanced firepower" },
    { name: ".22 Tactical Rifle", icon: <GiBroadheadArrow />, desc: "Precision long-range" },
    { name: "A-Category Licensed", icon: <GiBullets />, desc: "Fully government authorized" },
  ];

  return (
    <section className="py-24 bg-[#0A1A44] text-white px-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Our Weapons & Arsenal
          </h2>
          <div className="w-24 h-1 bg-[#A13A32] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            HSN Security holds an A-Category license for legal weaponry, maintained by professional armorers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {weapons.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, backgroundColor: "#0e2358" }}
              className="bg-[#051028] p-10 rounded-[2.5rem] shadow-2xl transition-all border border-white/5 group"
            >
              <div className="text-6xl text-[#A13A32] mb-6 group-hover:scale-110 transition-transform duration-500">
                {w.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-100 uppercase tracking-tight">{w.name}</h3>
              <p className="text-[#E1B546] font-bold text-xs uppercase tracking-[0.2em] mt-2">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeaponsGallery;
