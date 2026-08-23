"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="book" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6"
            >
              Get In <span className="text-gradient-gold">Touch</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-400 mb-10 text-lg"
            >
              Ready to elevate your style? Book your appointment today or reach out for any inquiries.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: <MapPin className="text-amber-500" />, title: "Location", detail: "123 Luxury Ave, Beverly Hills, CA 90210" },
                { icon: <Phone className="text-amber-500" />, title: "Phone", detail: "+1 (555) 123-4567" },
                { icon: <Mail className="text-amber-500" />, title: "Email", detail: "hello@luxesalon.com" },
                { icon: <Clock className="text-amber-500" />, title: "Hours", detail: "Mon-Sat: 9AM - 8PM, Sun: Closed" },
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 bg-white/5 p-3 rounded-full border border-white/10">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-10 rounded-2xl border-amber-500/20"
          >
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">Book an Appointment</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="(555) 000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Service</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                  <option value="" className="bg-black text-white">Select a service...</option>
                  <option value="haircut" className="bg-black text-white">Signature Haircut</option>
                  <option value="shave" className="bg-black text-white">Luxury Shave</option>
                  <option value="color" className="bg-black text-white">Hair Coloring</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message (Optional)</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none" placeholder="Any special requests?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-lg bg-amber-500 text-black font-bold text-lg hover:bg-amber-400 transition-colors">
                Request Appointment
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
