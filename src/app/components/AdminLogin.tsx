import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ShieldCheck } from "lucide-react";

export function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock: Simple password check
    if (password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin-panel");
    } else {
      alert("Invalid password!");
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
              className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center"
              style={{
                boxShadow: "0 0 40px rgba(239, 68, 68, 0.6)",
              }}
              animate={{
                boxShadow: [
                  "0 0 40px rgba(239, 68, 68, 0.6)",
                  "0 0 60px rgba(239, 68, 68, 0.8)",
                  "0 0 40px rgba(239, 68, 68, 0.6)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ShieldCheck className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-gray-400">
              Access the contest management panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0B0F1A]/50 border border-[#0A84FF]/30 text-white focus:border-[#0A84FF] focus:ring-2 focus:ring-[#0A84FF]/50 focus:outline-none transition-all"
              />
              <p className="text-xs text-gray-500 mt-2">
                Demo: Use "admin123" to login
              </p>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(239, 68, 68, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Access Admin Panel
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
