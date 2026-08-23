"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-500/10">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2070&auto=format&fit=crop" 
                alt="Barber working on a client" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -inset-4 border border-amber-500/30 rounded-2xl z-0 transform translate-x-4 translate-y-4"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Our <span className="text-gradient-gold">Philosophy</span>
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Founded on the principles of classic barbering and modern luxury, Luxe Salon is more than just a place to get a haircut. It's a sanctuary for those who appreciate the finer things in life.
            </p>
            <p className="text-slate-400 text-base mb-10 leading-relaxed">
              With over a decade of experience, our master stylists combine traditional techniques with contemporary trends to deliver unparalleled results. Every visit is a bespoke experience tailored to your unique style and personality.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-8">
              <div>
                <h4 className="text-3xl font-playfair font-bold text-amber-500 mb-2">10+</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-playfair font-bold text-amber-500 mb-2">5k+</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider">Happy Clients</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
