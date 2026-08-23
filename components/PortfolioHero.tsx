"use client";

import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=2070&auto=format&fit=crop"
          alt="Luxe Salon Portfolio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black z-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-30 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-amber-500 font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
        >
          The Lookbook
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6"
        >
          Our Signature <span className="text-gradient-gold">Styles</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Browse through our curated collection of transformations, classic cuts, and modern styling.
        </motion.p>
      </div>
    </section>
  );
}
