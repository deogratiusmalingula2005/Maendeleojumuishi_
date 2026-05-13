import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

const WelcomeIntro = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 5500); // Intro duration: 5.5s
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="absolute inset-0 z-0">
                    {/* Glowing light streaks */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 via-transparent to-blue-900/10"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                </div>

                <motion.div
                    className="relative z-10 text-center px-6"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1
                        className="text-3xl md:text-5xl font-display font-bold text-white leading-tight drop-shadow-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Karibu kwenye zama mpya za {" "}
                        <motion.span 
                            className="text-brand-gold block mt-4"
                            animate={{ textShadow: ["0 0 0px #fbbf24", "0 0 20px #fbbf24", "0 0 0px #fbbf24"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            maendeleo jumuishi 🇹🇿
                        </motion.span>
                    </motion.h1>
                </motion.div>
                
                
            </motion.div>
        </AnimatePresence>
    );
};

export default WelcomeIntro;
