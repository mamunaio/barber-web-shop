"use client";

import { motion } from "framer-motion";
import { Scissors, Droplet, Wind, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
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
  },
  {
    id: 4,
    title: "Styling & Blowout",
    description: "Professional styling for special events and everyday looks.",
    price: "$55+",
    icon: <Wind size={32} className="text-amber-500 mb-4" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4"
          >
            Our <span className="text-gradient-gold">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Elevate your look with our premium grooming services. Designed to make you look and feel your absolute best.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
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
      </div>
    </section>
  );
}
