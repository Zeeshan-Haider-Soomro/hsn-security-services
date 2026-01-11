import { motion } from "framer-motion";

const VideoHero = ({
    videoSrc,
    imageSrc,
    title,
    subtitle,
    height = "h-[60vh]",
    overlayOpacity = "bg-black/50"
}) => {
    return (
        <div className={`relative ${height} overflow-hidden`}>
            {/* Background */}
            {videoSrc ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            ) : (
                <img
                    src={imageSrc}
                    alt={title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            )}

            {/* Overlay */}
            <div className={`absolute top-0 left-0 w-full h-full ${overlayOpacity}`}></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-center mb-4"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-center max-w-3xl"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};

export default VideoHero;
