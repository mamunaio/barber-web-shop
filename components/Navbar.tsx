"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Reviews", href: "/reviews" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex flex-col items-start">
          <span className="text-2xl md:text-3xl font-playfair font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
            Luxe <span className="text-amber-500 group-hover:text-white transition-colors duration-300">Salon</span>
          </span>
          <span className="text-[10px] tracking-[0.3em] text-slate-400 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
            Premium Grooming
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium uppercase tracking-wider group"
              >
                <span className={`transition-colors duration-300 ${isActive ? 'text-amber-500' : 'text-slate-300 group-hover:text-white'}`}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-amber-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-amber-500/50 rounded-full opacity-0 transform scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-left" />
                )}
              </Link>
            );
          })}
          
          <div className="ml-4">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-block px-8 py-2.5 rounded-full bg-amber-500 text-black font-bold uppercase tracking-wider text-sm hover:bg-amber-400 transition-colors duration-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                Book Now
              </Link>
            </MagneticButton>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-amber-500 relative z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden overflow-hidden"
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-3xl font-playfair font-bold transition-colors ${
                      isActive ? 'text-amber-500' : 'text-white hover:text-amber-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-10 py-4 rounded-full bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
