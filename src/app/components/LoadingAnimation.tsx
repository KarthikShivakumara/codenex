import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingAnimation() {
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    // Trigger glitch effect after 1 second
    const timer = setTimeout(() => {
      setShowGlitch(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0B0F1A] flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#0A84FF] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Matrix-style code rain */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-[#0A84FF] text-xs font-mono"
            style={{ left: `${(i * 7) % 100}%` }}
            initial={{ y: -100 }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          >
            {`{code}`}
          </motion.div>
        ))}
      </div>

      {/* Logo container */}
      <motion.div
        className="relative"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glowing border */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 60px 20px rgba(10, 132, 255, 0.6)",
          }}
          animate={{
            boxShadow: [
              "0 0 60px 20px rgba(10, 132, 255, 0.6)",
              "0 0 80px 30px rgba(10, 132, 255, 0.8)",
              "0 0 60px 20px rgba(10, 132, 255, 0.6)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Logo circle */}
        <motion.div
          className="relative w-64 h-64 rounded-full bg-gradient-to-br from-[#0B0F1A] via-[#1a2332] to-[#0B0F1A] flex items-center justify-center border-4 border-[#0A84FF]"
          animate={
            showGlitch
              ? {
                  x: [0, -5, 5, -5, 5, 0],
                  y: [0, 5, -5, 5, -5, 0],
                  filter: [
                    "hue-rotate(0deg)",
                    "hue-rotate(90deg)",
                    "hue-rotate(0deg)",
                  ],
                }
              : {}
          }
          transition={{
            duration: 0.5,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        >
          {/* Digital glitch overlay */}
          {showGlitch && (
            <>
              <motion.div
                className="absolute inset-0 bg-[#0A84FF] mix-blend-screen rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0, 0.3, 0] }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-red-500 mix-blend-screen rounded-full"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: [0, 0.3, 0], x: [0, 10, 0] }}
                transition={{ duration: 0.3 }}
              />
            </>
          )}

          {/* College Logo (first phase) */}
          <motion.div
            className="text-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: showGlitch ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
  <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
  <img
    src="/images/college-logo1.jpg"
    alt="College Logo"
    className="w-full h-full object-contain"
  />
</div>

          </motion.div>

          {/* Coding Club Logo (second phase) */}
          <motion.div
            className="absolute text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: showGlitch ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
<div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
  <img
    src="/images/club-logo.jpg"
    alt="Club Logo"
    className="w-full h-full object-contain"
  />
</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Loading text */}
      <motion.div
        className="absolute bottom-20 text-[#0A84FF] font-mono text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Initializing...
      </motion.div>
    </div>
  );
}
