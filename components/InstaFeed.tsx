"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

const instaImages = [
  "https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop",
];

export default function InstaFeed() {
  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 text-amber-500 mb-4"
            >
              <Camera size={24} />
              <span className="font-bold tracking-widest uppercase text-sm">@LuxeSalon</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-playfair font-bold text-white"
            >
              Follow Our <span className="text-gradient-gold">Journey</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagneticButton>
              <Link 
                href="#"
                className="inline-block px-8 py-3 rounded-full border border-white/20 text-white hover:border-amber-500 hover:text-amber-500 transition-all duration-300 font-medium"
              >
                View Instagram
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {instaImages.map((src, index) => (
            <motion.a
              href="#"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative aspect-square rounded-2xl overflow-hidden block"
            >
              <img 
                src={src} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera size={32} className="text-white transform scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
