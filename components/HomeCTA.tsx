"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

export default function HomeCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2072&auto=format&fit=crop"
          alt="Barber Tools"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-gold p-10 md:p-16 rounded-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready for a <span className="text-gradient-gold">Transformation?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Book your appointment today and experience the gold standard in grooming. Our master stylists are waiting to elevate your look.
          </p>
          <MagneticButton>
            <Link 
              href="/contact" 
              className="inline-block px-10 py-4 bg-amber-500 text-black font-bold text-lg rounded-full hover:bg-amber-400 transition-colors duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              Book Your Appointment
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
