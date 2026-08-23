"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Gem, Users } from "lucide-react";

const values = [
  {
    title: "Uncompromising Quality",
    description: "We use only the finest products and tools in the industry. From our imported Japanese steel scissors to our bespoke grooming products, excellence is our baseline.",
    icon: <ShieldCheck size={40} className="text-amber-500 mb-6" />
  },
  {
    title: "Master Craftsmanship",
    description: "Our barbers are true artisans. With years of rigorous training and a passion for their craft, they deliver precision cuts that are perfectly tailored to you.",
    icon: <Gem size={40} className="text-amber-500 mb-6" />
  },
  {
    title: "A Sanctuary of Style",
    description: "More than just a barbershop, Luxe is a retreat. A place where you can unwind, enjoy a premium beverage, and experience world-class service in a luxurious setting.",
    icon: <Users size={40} className="text-amber-500 mb-6" />
  }
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-black relative border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4"
          >
            Our Core <span className="text-gradient-gold">Values</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-amber-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="flex justify-center group-hover:scale-110 transition-transform duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
