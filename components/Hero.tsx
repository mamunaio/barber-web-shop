"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
          alt="Luxury Barber Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black z-20"></div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
        >
          <div className="flex text-amber-500">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm font-medium text-slate-200">150+ 5-Star Reviews</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight max-w-4xl"
        >
          Elevate Your Style with <span className="text-gradient-gold">Luxe Grooming</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light"
        >
          Experience premium styling and grooming services tailored for the modern individual. Where classic techniques meet contemporary trends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-amber-500 text-black font-semibold text-lg hover:bg-amber-400 transition-colors duration-300 inline-block"
            >
              Book an Appointment
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-colors duration-300 inline-block"
            >
              Explore Services
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
