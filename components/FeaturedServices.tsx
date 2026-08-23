"use client";

import { motion } from "framer-motion";
import { Scissors, Droplet, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredServices = [
  {
    id: 1,
    title: "Signature Haircut",
    description: "Precision cut tailored to your face shape and personal style.",
    price: "$65+",
    icon: <Scissors size={32} className="text-amber-500 mb-4" />,
  },
  {
    id: 2,
    title: "Luxury Shave",
    description: "Traditional hot towel straight razor shave with premium oils.",
    price: "$45+",
    icon: <Droplet size={32} className="text-amber-500 mb-4" />,
  },
  {
    id: 3,
    title: "Hair Coloring",
    description: "Custom color, highlights, and grey blending services.",
    price: "$85+",
    icon: <Sparkles size={32} className="text-amber-500 mb-4" />,
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4"
            >
              Premium <span className="text-gradient-gold">Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 max-w-lg"
            >
              Experience the gold standard in grooming. Selected treatments designed to elevate your look.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <Link 
              href="/services" 
              className="flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
            >
              View Full Menu <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:glass-gold transition-all duration-300 group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-6">{service.description}</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
                <span className="text-amber-500 font-bold text-lg">{service.price}</span>
                <Link href="/contact" className="text-sm font-medium hover:text-amber-400 transition-colors uppercase tracking-wider">Book</Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors border-b border-amber-500/30 pb-1"
          >
            View Full Menu <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
