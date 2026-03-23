import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      char: string;
    }> = [];

    const chars = "01{}[]<>/();=+-*&|^~abcdefghijklmnopqrstuvwxyz";

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        char: chars[Math.floor(Math.random() * chars.length)],
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(11, 15, 26, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.fillStyle = "rgba(10, 132, 255, 0.3)";
        ctx.font = "14px monospace";
        ctx.fillText(particle.char, particle.x, particle.y);
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{ zIndex: 0 }}
      />
      {/* Additional floating code snippets */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#0A84FF] font-mono text-xs whitespace-pre"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -50,
            }}
            animate={{
              y: window.innerHeight + 50,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {`function code() {\n  return true;\n}`}
          </motion.div>
        ))}
      </div>
    </>
  );
}
