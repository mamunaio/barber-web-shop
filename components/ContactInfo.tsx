"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar, User, Scissors } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useState } from "react";

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section className="py-24 bg-black relative border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Panel: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl font-playfair font-bold text-white mb-8">
              Contact <span className="text-gradient-gold">Information</span>
            </h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Whether you need to book an appointment, ask about our premium services, or just want to drop by for a consultation, we are here for you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-colors">
                  <MapPin className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Location</h4>
                  <p className="text-slate-400">123 Luxury Avenue, Suite 500<br/>New York, NY 10012</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-colors">
                  <Phone className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone Number</h4>
                  <p className="text-slate-400">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-colors">
                  <Mail className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Address</h4>
                  <p className="text-slate-400">hello@luxesalon.com<br/>bookings@luxesalon.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-amber-500/50 transition-colors">
                  <Clock className="text-amber-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Working Hours</h4>
                  <p className="text-slate-400">Mon - Fri: 9:00 AM - 8:00 PM<br/>Sat - Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <div className="glass p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
              
              <h3 className="text-2xl font-playfair font-bold text-white mb-6 relative z-10">
                Book an <span className="text-gradient-gold">Appointment</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
                      <input 
                        type="text" 
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300 ml-1">Select Service</label>
                    <div className="relative">
                      <Scissors className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
                      <select 
                        required
                        defaultValue=""
                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-slate-300 focus:outline-none focus:border-amber-500/50 transition-colors appearance-none"
                      >
                        <option className="bg-[#1a1a1a] text-white" value="" disabled>Choose a service</option>
                        <option className="bg-[#1a1a1a] text-white" value="haircut">Signature Haircut</option>
                        <option className="bg-[#1a1a1a] text-white" value="shave">Hot Towel Shave</option>
                        <option className="bg-[#1a1a1a] text-white" value="color">Hair Coloring</option>
                        <option className="bg-[#1a1a1a] text-white" value="vip">VIP Package</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-slate-300 ml-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
                      <input 
                        type="date" 
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-slate-300 focus:outline-none focus:border-amber-500/50 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-slate-300 ml-1">Additional Notes (Optional)</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                    placeholder="Any specific requests or stylist preference..."
                  ></textarea>
                </div>

                <MagneticButton>
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 rounded-xl bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  >
                    {isSubmitted ? "Request Sent!" : "Book Appointment"}
                  </button>
                </MagneticButton>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
