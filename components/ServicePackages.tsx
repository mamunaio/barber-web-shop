"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { Check } from "lucide-react";

const packages = [
  {
    title: "The Executive",
    price: "$110",
    description: "The ultimate grooming experience for the modern gentleman.",
    features: [
      "Signature Luxe Cut",
      "Traditional Hot Towel Shave",
      "Revitalizing Scalp Massage",
      "Complimentary Premium Beverage"
    ],
    popular: true
  },
  {
    title: "The Groom's Prep",
    price: "$150",
    description: "Look flawless on your big day with our comprehensive package.",
    features: [
      "Consultation & Trial Cut",
      "Wedding Day Signature Cut",
      "Luxury Shave & Facial",
      "Styling Product Included"
    ],
    popular: false
  }
];

export default function ServicePackages() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4"
          >
            VIP <span className="text-gradient-gold">Packages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Curated experiences combining our best services for maximum relaxation and style.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-10 rounded-3xl relative overflow-hidden ${
                pkg.popular 
                  ? 'glass-gold border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)]' 
                  : 'glass border-white/10'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-6 right-6 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-playfair font-bold text-white mb-2">{pkg.title}</h3>
              <p className="text-slate-400 mb-6">{pkg.description}</p>
              <div className="text-4xl font-bold text-amber-500 mb-8">{pkg.price}</div>
              
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <MagneticButton className="w-full">
                  <Link 
                    href="/contact" 
                    className={`block w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                      pkg.popular 
                        ? 'bg-amber-500 text-black hover:bg-amber-400' 
                        : 'border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black'
                    }`}
                  >
                    Book This Package
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
