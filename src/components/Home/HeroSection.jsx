import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 px-6">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0A1A44]/5 rounded-full z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#A13A32]/5 rounded-full z-0"></div>
          <img
            src="/hero_about.png"
            alt="Security Guard"
            className="w-full h-auto rounded-[3rem] shadow-2xl relative z-10 border-8 border-white"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col gap-8"
        >
          <h1 className="text-4xl md:text-6xl font-black text-[#0A1A44] leading-[0.9] uppercase tracking-tighter">
            Security That <br /><span className="text-[#A13A32]">Empowers Growth</span>
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed font-medium">
            Established in 2009, HSN Security now commands over hundreds of guards across Sindh and Punjab. We believe true success is balancing responsibility alongside productivity.
          </p>
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="px-10 py-5 bg-[#0A1A44] text-white font-bold rounded-2xl hover:bg-[#A13A32] transform transition-all hover:scale-105 shadow-xl"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-10 py-5 bg-gray-100 text-[#0A1A44] font-bold rounded-2xl hover:bg-gray-200 transition-all"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
