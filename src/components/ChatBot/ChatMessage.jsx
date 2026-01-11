import { motion } from "framer-motion";

const ChatMessage = ({ message, isUser }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
        >
            <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl ${isUser
                        ? "bg-[#0A1A44] text-white rounded-br-none"
                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                    }`}
            >
                <p className="text-sm whitespace-pre-wrap break-words">{message}</p>
            </div>
        </motion.div>
    );
};

export default ChatMessage;
