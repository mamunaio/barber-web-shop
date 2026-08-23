"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Michael R.",
    text: "Absolutely the best salon experience I've had. The attention to detail is unmatched, and the atmosphere is incredibly relaxing.",
  },
  {
    id: 2,
    name: "James T.",
    text: "I've been coming here for a year now. The consistency and quality of the haircuts are phenomenal. Highly recommend the hot towel shave.",
  },
  {
    id: 3,
    name: "David L.",
    text: "Premium service from start to finish. The staff is professional, and the results are always exactly what I wanted.",
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      {/* Background with slight tint */}
      <div className="absolute inset-0 bg-[#050505] z-0"></div>
      
      {/* Abstract gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4"
          >
            Client <span className="text-gradient-gold">Testimonials</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="flex text-amber-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-lg font-medium text-slate-300">150+ 5-Star Reviews</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl relative"
            >
              <Quote size={40} className="text-white/10 absolute top-6 right-6" />
              <div className="flex text-amber-500 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 italic">"{review.text}"</p>
              <p className="font-playfair font-bold text-lg text-white">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
