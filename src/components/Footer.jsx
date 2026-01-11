import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Security Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  const services = [
    "Armed Guards",
    "Unarmed Guards",
    "Event Security",
    "Residential Security",
    "Commercial Security",
    "Cash in Transit",
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A1A44] to-[#051028] text-white pt-16 pb-8 px-6">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/hsnsecurity.png"
              alt="HSN Security Logo"
              className="w-16 h-16 object-contain"
            />
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-[#A13A32]">HSN</span> Security
              </h2>
              <p className="text-sm text-gray-300">Security You Need</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Professional security services in Karachi, providing armed guards, event security, and comprehensive protection solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#E1B546]">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-300 hover:text-[#E1B546] transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  → {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#E1B546]">Our Services</h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service}>
                <Link
                  to="/services"
                  className="text-sm text-gray-300 hover:text-[#E1B546] transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  → {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#E1B546]">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#A13A32] mt-1 flex-shrink-0" />
              <p className="text-sm text-gray-300">
                M-31, mezzanine floor, fort sultan building, Opp. Airport Telephone Exchange, Shara-e-faisal, Karachi
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#A13A32] flex-shrink-0" />
              <a
                href="tel:02134680935"
                className="text-sm text-gray-300 hover:text-[#E1B546] transition"
              >
                021-34680935-36
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#A13A32] flex-shrink-0" />
              <a
                href="mailto:hsnsecurity@hotmail.com"
                className="text-sm text-gray-300 hover:text-[#E1B546] transition"
              >
                hsnsecurity@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-12">
        <motion.a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E1B546] transition-colors duration-300 group"
        >
          <FaFacebookF className="text-[#0A1A44] text-xl group-hover:text-white transition" />
        </motion.a>

        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#E1B546] transition-colors duration-300 group"
        >
          <FaInstagram className="text-[#0A1A44] text-xl group-hover:text-white transition" />
        </motion.a>

        <motion.a
          href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || "923218456611"}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#25D366] transition-colors duration-300 group"
        >
          <FaWhatsapp className="text-[#0A1A44] text-xl group-hover:text-white transition" />
        </motion.a>
      </div>

      <div className="border-t border-white/20 mt-10"></div>

      <p className="text-center mt-6 text-sm text-gray-400">
        Copyright ©2025 HSN Security. All Rights Reserved.
      </p>
    </footer>
  );
}