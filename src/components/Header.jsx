import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import MobileDrawer from "./MobileDrawer";

const Header = ({ show }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -150 }}
        animate={{ y: show ? 0 : -150 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed w-full z-50 transition-all duration-300"
      >
        {/* Top Info Bar */}
        <div className={`hidden lg:block py-2 top-bar-gradient text-white transition-all duration-300`}>
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#E1B546]" />
                <span className="font-medium">021-34680935-36</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#E1B546]" />
                <span className="font-medium">hsnsecurity@hotmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#E1B546]" />
                <span className="font-medium">Shara-e-faisal, Karachi</span>
              </div>
            </div>
            <div className="flex gap-5">
              <FaFacebookF className="hover:text-[#E1B546] cursor-pointer transition-all hover:scale-125" />
              <FaInstagram className="hover:text-[#E1B546] cursor-pointer transition-all hover:scale-125" />
              <FaWhatsapp className="hover:text-[#E1B546] cursor-pointer transition-all hover:scale-125" />
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`w-full transition-all duration-500 ${scrolled
            ? "header-glass py-2 shadow-2xl"
            : "bg-[#0A1A44] py-4"
            }`}
        >
          <div className="container mx-auto flex justify-between items-center px-4">
            {/* Logo + Brand */}
            <Link to="/" className="flex items-center gap-2 sm:gap-4 group">
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 sm:-inset-2 bg-[#A13A32]/20 rounded-full blur-lg sm:blur-xl group-hover:bg-[#A13A32]/40 transition duration-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.img
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  src="/hsnsecurity.png"
                  alt="HSN Security Logo"
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain relative z-10"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-3xl font-black tracking-tighter leading-none">
                  <span className="text-[#A13A32]">HSN</span>
                  <span className="text-white">SECURITY</span>
                </span>
                <span className="text-[8px] sm:text-[10px] text-[#E1B546] font-bold tracking-[0.2em] mt-0.5 sm:mt-1 uppercase">Professional Protection</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-10 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 relative group py-2 ${location.pathname === link.path
                    ? "text-[#E1B546]"
                    : "text-white/80 hover:text-white"
                    }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#E1B546] transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                to="/contact"
                className="relative overflow-hidden bg-[#A13A32] text-white px-8 py-3 rounded-xl font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_20px_rgba(161,58,50,0.4)] transition-all duration-300 group"
              >
                <div className="absolute inset-0 animate-shimmer pointer-events-none" />
                <span className="relative z-10">Get a Quote</span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-4 ml-2">
              <a href="tel:02134680935" className="bg-[#A13A32] p-2 sm:p-2.5 rounded-lg text-white shadow-lg active:scale-95 transition text-sm sm:text-base">
                <FaPhone />
              </a>
              <button
                onClick={() => setDrawerOpen(true)}
                className="text-white text-2xl sm:text-3xl p-1 active:scale-90 transition"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </header>
      </motion.div>

      {/* Call MobileDrawer Component */}
      <MobileDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </>
  );
};

export default Header;
