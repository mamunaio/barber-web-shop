"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you accept walk-ins?",
    answer: "While we highly recommend booking an appointment to ensure you get the time and stylist you prefer, we do accept walk-ins based on availability."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require a 24-hour notice for any cancellations or rescheduling. Cancellations made within 24 hours may be subject to a fee."
  },
  {
    question: "What products do you use?",
    answer: "We exclusively use premium grooming products from brands like Oribe, Kérastase, and Baxter of California to ensure the highest quality results."
  },
  {
    question: "Do you offer complimentary beverages?",
    answer: "Yes, all our clients are offered a selection of complimentary beverages including coffee, sparkling water, and select spirits (for 21+)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4"
          >
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border border-white/10 rounded-xl overflow-hidden glass"
            >
              <button 
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-slate-200">{faq.question}</span>
                <span className="text-amber-500 transition-transform duration-300">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
