import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

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
                <div className="text-sm break-words leading-relaxed">
                    <ReactMarkdown
                        components={{
                            h1: ({node, ...props}) => <h1 className="font-bold text-lg mb-2 mt-1" {...props} />,
                            h2: ({node, ...props}) => <h2 className="font-bold text-base mb-2 mt-1" {...props} />,
                            h3: ({node, ...props}) => <h3 className="font-bold text-sm mb-1 mt-1" {...props} />,
                            p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc ml-4 mb-2" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal ml-4 mb-2" {...props} />,
                            li: ({node, ...props}) => <li className="mb-1" {...props} />,
                            strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                        }}
                    >
                        {message}
                    </ReactMarkdown>
                </div>
            </div>
        </motion.div>
    );
};

export default ChatMessage;
