import { motion } from "framer-motion";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const WhyHSNSecurity = () => {
  const points = [
    "Highly Trained Civil & Ex-Army Personnel",
    "Government Certified & APSAA Registered",
    "24/7 Command & Control Center",
    "Strong Weapon Management System",
    "Trusted by Top Brands & Corporate Clients",
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Icon Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="bg-[#0A1A44]/5 w-24 h-24 rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0">
            <FaShieldAlt className="text-6xl text-[#A13A32]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0A1A44] leading-tight">
            Why Choose <br /> <span className="text-[#A13A32]">HSN Security?</span>
          </h2>
          <p className="text-gray-600 mt-6 text-xl leading-relaxed">
            Delivering reliable, premium and compliant security solutions since 2009. We prioritize your safety with uncompromising standards.
          </p>
        </motion.div>

        {/* Right List */}
        <div className="space-y-6">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-center bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              <FaCheckCircle className="text-[#A13A32] text-3xl flex-shrink-0" />
              <p className="text-xl font-medium text-[#0A1A44]">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHSNSecurity;
