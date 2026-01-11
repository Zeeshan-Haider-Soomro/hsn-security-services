import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaUndo } from "react-icons/fa";
import { sendMessageToGemini, resetChatSession } from "../../services/geminiService";
import ChatMessage from "./ChatMessage";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            text: "Hello! I'm the HSN Security AI assistant. How can I help you today?",
            isUser: false,
        },
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    useEffect(() => {
        if (isOpen && window.innerWidth < 640) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim() || isLoading) return;

        const userMessage = inputMessage.trim();
        setInputMessage("");
        setError(null);

        setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
        setIsLoading(true);

        try {
            const response = await sendMessageToGemini(userMessage);
            setMessages((prev) => [...prev, { text: response, isUser: false }]);
        } catch (err) {
            console.error("Chat UI Error:", err);
            setError("Server connection issue.");
            setMessages((prev) => [
                ...prev,
                {
                    text: "I'm having trouble connecting right now. Please call us at +92 321 8456611 for immediate assistance.",
                    isUser: false,
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        resetChatSession();
        setMessages([
            {
                text: "Session cleared. How else can I assist you with HSN Security?",
                isUser: false,
            },
        ]);
        setError(null);
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-24 right-6 z-[60] bg-[#A13A32] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(161,58,50,0.6)] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaTimes size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="robot"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaRobot size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className={`fixed z-[100] flex flex-col bg-white shadow-2xl overflow-hidden
                            ${window.innerWidth < 640
                                ? "inset-0 w-full h-full rounded-none"
                                : "bottom-32 right-6 w-[400px] h-[650px] max-w-[90vw] max-h-[calc(100vh-10rem)] rounded-[2.5rem] border border-gray-100"
                            }`}
                    >
                        {/* Header */}
                        <div className="bg-[#0A1A44] text-white p-6 flex items-center justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#A13A32]/20 rounded-full blur-2xl -mr-16 -mt-16" />

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10">
                                    <FaRobot className="text-2xl text-[#E1B546]" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-lg tracking-tight">HSN Helper</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,1)]"></span>
                                        <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">Security Online</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 relative z-10">
                                <button
                                    onClick={handleReset}
                                    title="Reset Conversation"
                                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/5"
                                >
                                    <FaUndo size={14} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2.5 rounded-xl bg-white/5 hover:bg-[#A13A32] text-white/70 hover:text-white transition-all border border-white/5 sm:hidden"
                                >
                                    <FaTimes size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/20 custom-scrollbar">
                            {messages.map((msg, index) => (
                                <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white shadow-lg border border-gray-100 px-6 py-4 rounded-3xl rounded-bl-none">
                                        <div className="flex gap-1.5">
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-1.5 h-1.5 bg-[#A13A32] rounded-full"
                                                    animate={{ y: [0, -6, 0] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer / Input */}
                        <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                            {error && (
                                <div className="mb-4 px-4 py-2 bg-red-50 text-red-600 rounded-xl text-[10px] font-bold uppercase tracking-widest text-center border border-red-100">
                                    {error}
                                </div>
                            )}
                            <form onSubmit={handleSendMessage} className="relative">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Message HSN Helper..."
                                    className="w-full pl-6 pr-16 py-5 bg-gray-100/50 border-2 border-transparent focus:border-[#0A1A44]/10 focus:bg-white rounded-[2rem] transition-all text-sm outline-none placeholder:text-gray-400 font-medium"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !inputMessage.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0A1A44] text-white p-4 rounded-2xl hover:bg-[#A13A32] active:scale-95 transition-all disabled:opacity-30 shadow-xl"
                                >
                                    <FaPaperPlane className="text-sm" />
                                </button>
                            </form>
                            <div className="flex justify-center items-center mt-4">
                                <span className="text-[8px] text-gray-400 font-black uppercase tracking-[0.3em] inline-flex items-center gap-2">
                                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                    Karachi's Trusted Guard AI
                                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
