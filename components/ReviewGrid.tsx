"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Michael T.",
    role: "Business Executive",
    content: "Absolutely the best haircut I've had in years. The attention to detail is unmatched, and the hot towel shave is a game changer. Worth every penny.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "David L.",
    role: "Regular Client",
    content: "I've been coming here for 3 years. Consistent quality, great atmosphere, and the staff really knows how to treat you. It's my bi-weekly sanctuary.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "James W.",
    role: "Groom",
    content: "Got the Groom's Package before my wedding. The team made me look and feel like a million bucks. Highly recommend for any special occasion.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Robert K.",
    role: "First-time Client",
    content: "Walked in looking scruffy, walked out feeling like a new man. The precision on the beard fade was incredible. They have a new loyal customer.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "William H.",
    role: "Local Resident",
    content: "The ambiance is exactly what you want from a premium barbershop. Dark, stylish, great music, and a complimentary drink. What more could you ask for?",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Anthony C.",
    role: "Creative Director",
    content: "I'm very particular about my hair, but the master barbers here know exactly how to translate what I want into the perfect cut. 10/10.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=150&auto=format&fit=crop"
  }
];

export default function ReviewGrid() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl relative group hover:glass-gold transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-16 h-16 transform group-hover:scale-110 group-hover:text-amber-500/10 transition-all duration-500" />
              
              <div className="flex gap-1 text-amber-500 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-8 relative z-10 italic">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h4 className="text-white font-bold font-playfair">{review.name}</h4>
                  <p className="text-amber-500/70 text-sm font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
