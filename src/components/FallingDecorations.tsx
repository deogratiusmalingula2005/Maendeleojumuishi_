import { motion } from "motion/react";
import { useEffect } from "react";

const COLORS = ["#fca5a5", "#ffffff", "#c084fc", "#fbbf24"]; // pink, white, purple, gold

const FallingDecorations = ({ onComplete, duration = 6000 }: { onComplete: () => void, duration?: number }) => {
    // Generate a mix of petals and sparkles - reduced for performance
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // percentage
        size: Math.random() * 10 + 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        duration: Math.random() * 3 + 2, // Faster for a splash ("Mwanzoni")
        isSparkle: Math.random() > 0.5,
    }));

    useEffect(() => {
        const timer = setTimeout(onComplete, duration); // Remove after specified time
        return () => clearTimeout(timer);
    }, [onComplete, duration]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ y: -100, x: `${p.x}vw`, opacity: 0, rotate: 0 }}
                    animate={{
                        y: "110vh",
                        opacity: [0, 1, 1, 0],
                        rotate: 360,
                        scale: p.isSparkle ? [1, 2, 1] : 1,
                    }}
                    transition={{
                        duration: p.duration,
                        ease: "easeIn",
                    }}
                    style={{
                        position: "absolute",
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.isSparkle ? "white" : p.color,
                        borderRadius: p.isSparkle ? "0%" : "50%",
                        clipPath: p.isSparkle ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" : "none",
                        filter: "blur(0.5px)",
                        boxShadow: `0 0 10px ${p.color}`,
                    }}
                />
            ))}
        </div>
    );
};

export default FallingDecorations;
