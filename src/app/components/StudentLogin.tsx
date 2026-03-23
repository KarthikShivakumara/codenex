import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { KeyRound } from "lucide-react";

export function StudentLogin() {
  const [accessId, setAccessId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessId.trim()) {
      // Mock: Store access ID and navigate to dashboard
      localStorage.setItem("studentAccessId", accessId);
      navigate("/student-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#0A84FF] rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-[#0A84FF]/30">
          <div className="text-center mb-8">
            <motion.div
              className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#0066CC] flex items-center justify-center"
              style={{
                boxShadow: "0 0 40px rgba(10, 132, 255, 0.6)",
              }}
              animate={{
                boxShadow: [
                  "0 0 40px rgba(10, 132, 255, 0.6)",
                  "0 0 60px rgba(10, 132, 255, 0.8)",
                  "0 0 40px rgba(10, 132, 255, 0.6)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <KeyRound className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Student Login
            </h1>
            <p className="text-gray-400">
              Enter your Access ID to join the contest
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Access ID
              </label>
              <input
                type="text"
                value={accessId}
                onChange={(e) => setAccessId(e.target.value)}
                placeholder="Enter your Access ID"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0B0F1A]/50 border border-[#0A84FF]/30 text-white focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/50 focus:outline-none transition-all"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-[#0A84FF] text-white font-bold rounded-lg hover:bg-[#0066CC] transition-colors"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(10, 132, 255, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Enter Contest
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/")}
              className="text-[#0A84FF] hover:text-white text-sm transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
