"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const team = [
  {
    id: 1,
    name: "Alexander",
    role: "Master Barber & Founder",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Julian",
    role: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Marcus",
    role: "Color Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4"
          >
            Meet The <span className="text-gradient-gold">Masters</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            The talent behind the chair. Our team of highly skilled professionals is dedicated to perfecting your look.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Book overlay button */}
                <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <Link href="/contact" className="inline-block px-6 py-2 bg-amber-500 text-black font-semibold rounded-full text-sm">
                    Book {member.name}
                  </Link>
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white text-center">{member.name}</h3>
              <p className="text-amber-500 text-center text-sm uppercase tracking-widest mt-2">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
