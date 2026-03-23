import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Activities", href: "#activities" },
    { label: "Targeted Companies", href: "#companies" },
    { label: "Team", href: "#team" },
    { label: "Join", href: "#join" },
    { label: "About", href: "#about" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Only show navbar on home page
  if (location.pathname !== "/") {
    return null;
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F1A]/80 backdrop-blur-lg border-b border-[#0A84FF]/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo and branding */}
          <div className="flex items-center gap-4">
            <motion.div
  className="w-10 h-10 rounded-full overflow-hidden"
  whileHover={{ scale: 1.05 }}
>
  <img
    src="/images/club-logo.jpg"
    alt="Coding Club Logo"
    className="w-full h-full object-cover"
  />
</motion.div>
            <div className="hidden md:block">
              <div className="text-white font-bold text-lg">CodeNex</div>
              <div className="text-[#0A84FF] text-xs font-mono">
                Next Gen Coding Evolution
              </div>
            </div>
          </div>

          {/* Center: Navigation items (desktop) */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-gray-300 hover:text-white font-medium text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0A84FF] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Right side: Login buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/student-login">
              <motion.button
                className="px-4 py-2 text-sm font-medium text-[#0A84FF] border border-[#0A84FF] rounded-lg hover:bg-[#0A84FF]/10 transition-colors"
                whileHover={{
                  boxShadow: "0 0 20px rgba(10, 132, 255, 0.4)",
                }}
              >
                Student Login
              </motion.button>
            </Link>
            <Link to="/admin-login">
              <motion.button
                className="px-4 py-2 text-sm font-medium text-white bg-[#0A84FF] rounded-lg hover:bg-[#0066CC] transition-colors"
                whileHover={{
                  boxShadow: "0 0 25px rgba(10, 132, 255, 0.6)",
                }}
              >
                Admin Login
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-[#0B0F1A]/95 backdrop-blur-lg border-t border-[#0A84FF]/30"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-[#0A84FF]/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#0A84FF]/30 space-y-2">
              <Link to="/student-login" className="block">
                <button className="w-full px-4 py-2 text-sm font-medium text-[#0A84FF] border border-[#0A84FF] rounded-lg hover:bg-[#0A84FF]/10 transition-colors">
                  Student Login
                </button>
              </Link>
              <Link to="/admin-login" className="block">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-[#0A84FF] rounded-lg hover:bg-[#0066CC] transition-colors">
                  Admin Login
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
