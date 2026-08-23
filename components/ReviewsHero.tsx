"use client";

import { motion } from "framer-motion";

export default function ReviewsHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=2070&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-30 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-amber-500 font-semibold tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
        >
          Word of Mouth
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6"
        >
          Client <span className="text-gradient-gold">Testimonials</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Don't just take our word for it. Discover what our valued clients have to say about their experience at Luxe.
        </motion.p>
      </div>
    </section>
  );
}
