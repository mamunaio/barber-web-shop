"use client";

import { motion } from "framer-motion";
import { Star, Trophy, Users } from "lucide-react";

export default function ReviewStats() {
  return (
    <section className="py-16 bg-[#050505] relative border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl glass border border-white/5"
          >
            <div className="flex text-amber-500 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <h3 className="text-4xl font-bold text-white mb-2 font-playfair">150+</h3>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-medium">5-Star Reviews</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl glass border border-white/5"
          >
            <Trophy size={28} className="text-amber-500 mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2 font-playfair">Top #1</h3>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-medium">Rated Salon in City</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl glass border border-white/5"
          >
            <Users size={28} className="text-amber-500 mb-4" />
            <h3 className="text-4xl font-bold text-white mb-2 font-playfair">98%</h3>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-medium">Client Retention</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
