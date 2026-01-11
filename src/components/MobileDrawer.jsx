import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MobileDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaWhatsapp />, url: "#" },
  ];

  return (
    <AnimatePresence>
      {drawerOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0A1A44] shadow-2xl z-[70] flex flex-col overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A13A32]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

            {/* Header: Logo + Close */}
            <div className="flex justify-between items-center p-6 relative z-10">
              <div className="flex items-center gap-3">
                <img
                  src="/hsnsecurity.png"
                  alt="HSN Security Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-black tracking-tighter text-white">
                  <span className="text-[#A13A32]">HSN</span> SECURITY
                </span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-white/70 hover:text-white bg-white/10 p-2 rounded-lg transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2 p-6 flex-1 relative z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setDrawerOpen(false)}
                    className={`block py-4 px-6 rounded-2xl text-lg font-bold tracking-widest uppercase transition-all duration-300 ${location.pathname === link.path
                      ? "bg-[#A13A32] text-white shadow-lg"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Info */}
            <div className="p-8 border-t border-white/10 bg-black/20 relative z-10">
              <div className="flex flex-col gap-4 mb-8">
                <a href="tel:02134680935" className="flex items-center gap-4 text-white/80 hover:text-[#E1B546] transition">
                  <div className="bg-white/5 p-3 rounded-xl">
                    <FaPhone className="text-[#A13A32]" />
                  </div>
                  <span className="font-bold">021-34680935-36</span>
                </a>
                <a href="mailto:hsnsecurity@hotmail.com" className="flex items-center gap-4 text-white/80 hover:text-[#E1B546] transition">
                  <div className="bg-white/5 p-3 rounded-xl">
                    <FaEnvelope className="text-[#A13A32]" />
                  </div>
                  <span className="font-bold text-sm">hsnsecurity@hotmail.com</span>
                </a>
              </div>

              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/70 hover:bg-[#A13A32] hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <p className="text-white/30 text-[10px] tracking-widest uppercase font-bold text-center">
                Copyright ©2025 HSN Security <br /> All Rights Reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
