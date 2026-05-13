import { useState, useRef } from "react";

const VideoIntro = ({ onComplete, onStart }: { onComplete: () => void, onStart: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [started, setStarted] = useState(false);

    const handleStart = () => {
        const video = videoRef.current;
        if (video) {
            onStart();
            video.play().then(() => setStarted(true)).catch(e => console.error("Play failed", e));
            video.onended = onComplete;
        }
    };

    const handleSkip = () => {
        onComplete();
    };

    return (
        <div className="fixed inset-0 z-[300] bg-black flex items-center justify-center">
            <video
                ref={videoRef}
                src="/Introvideo.mp4"
                className="w-full h-full object-cover"
                playsInline
                controls={false}
            />
            {!started && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/60">
                    <button
                        onClick={handleStart}
                        className="px-8 py-4 bg-brand-gold text-black font-bold text-xl rounded-full hover:bg-white transition-all shadow-lg"
                    >
                        ANZA KUTAZAMA
                    </button>
                    <button
                        onClick={handleSkip}
                        className="text-white/70 hover:text-white underline text-sm"
                    >
                        Ruka Utangulizi
                    </button>
                </div>
            )}
        </div>
    );
};

export default VideoIntro;
