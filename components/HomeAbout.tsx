"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeAbout() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-500/5 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxe Salon Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -inset-4 border border-amber-500/20 rounded-2xl z-0 transform translate-x-4 translate-y-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              The <span className="text-gradient-gold">Luxe</span> Experience
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Founded on the principles of classic barbering and modern luxury, we offer more than just a haircut. We provide a sanctuary for those who appreciate the finer things in life.
            </p>
            <p className="text-slate-400 text-base mb-8 leading-relaxed hidden md:block">
              Our master stylists combine traditional techniques with contemporary trends to deliver unparalleled results tailored to your unique style.
            </p>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-amber-500 text-amber-500 font-medium hover:bg-amber-500 hover:text-black transition-colors group"
            >
              Discover Our Story
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
