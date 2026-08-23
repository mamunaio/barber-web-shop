"use client";

import { motion } from "framer-motion";

const brands = [
  "Oribe", "Kérastase", "Baxter of California", "American Crew", "Dyson", "Layrite",
  "Oribe", "Kérastase", "Baxter of California", "American Crew", "Dyson", "Layrite"
];

export default function BrandsMarquee() {
  return (
    <section className="py-16 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Premium Brands We Trust</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {brands.map((brand, index) => (
            <span key={index} className="text-3xl md:text-5xl font-playfair font-bold text-white/10 hover:text-white/40 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
        
        {/* Absolute clone for seamless loop */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4">
          {brands.map((brand, index) => (
            <span key={`clone-${index}`} className="text-3xl md:text-5xl font-playfair font-bold text-white/10 hover:text-white/40 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
