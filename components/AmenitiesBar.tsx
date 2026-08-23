"use client";

import { motion } from "framer-motion";
import { Coffee, Wifi, GlassWater, SprayCan } from "lucide-react";

const amenities = [
  { icon: <Coffee size={24} />, text: "Complimentary Beverages" },
  { icon: <Wifi size={24} />, text: "High-Speed Wi-Fi" },
  { icon: <SprayCan size={24} />, text: "Premium Products" },
  { icon: <GlassWater size={24} />, text: "Hot Towel Finish" },
];

export default function AmenitiesBar() {
  return (
    <div className="bg-white/5 border-y border-white/10 backdrop-blur-md relative z-20">
      <div className="container mx-auto px-6 py-6 overflow-hidden">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 text-slate-300 hover:text-amber-500 transition-colors"
            >
              <div className="text-amber-500">{item.icon}</div>
              <span className="font-medium text-sm tracking-wide uppercase">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
