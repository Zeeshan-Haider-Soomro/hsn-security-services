import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "923218456611";

    const message = encodeURIComponent(
        "Hello HSN Security! I'm interested in learning more about your security services. Could you please provide me with more information?"
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                <FaWhatsapp className="text-2xl" />
            </motion.div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-4 px-3 py-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-2xl">
                Chat on WhatsApp
                <div className="absolute top-full right-5 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
