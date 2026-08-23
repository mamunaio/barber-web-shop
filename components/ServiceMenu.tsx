"use client";

import { motion } from "framer-motion";

const menuCategories = [
  {
    title: "Haircuts & Styling",
    items: [
      { name: "Signature Luxe Cut", description: "Precision cut tailored to your face shape, includes wash and style.", price: "$65" },
      { name: "Skin Fade", description: "Flawless fade down to the skin with a straight razor finish.", price: "$55" },
      { name: "The Classic Trim", description: "Maintenance cut for keeping your style fresh.", price: "$45" },
      { name: "Executive Blowout", description: "Professional wash, blow-dry, and styling for a night out.", price: "$40" },
    ]
  },
  {
    title: "Shaving & Beard Care",
    items: [
      { name: "Traditional Hot Towel Shave", description: "Straight razor shave with premium essential oils and hot towels.", price: "$50" },
      { name: "Beard Sculpting", description: "Precision shaping, trimming, and conditioning of your beard.", price: "$35" },
      { name: "The Line Up", description: "Crisp edging along the hairline and beard with a straight razor.", price: "$25" },
      { name: "Mustache Trim & Wax", description: "Detailed mustache care and styling with premium wax.", price: "$15" },
    ]
  },
  {
    title: "Color & Treatments",
    items: [
      { name: "Grey Blending", description: "Subtle color application to naturally blend grey hairs.", price: "$60" },
      { name: "Full Custom Color", description: "Complete hair coloring using premium ammonia-free dyes.", price: "$95+" },
      { name: "Revitalizing Scalp Treatment", description: "Deep cleansing and massage to promote healthy hair growth.", price: "$45" },
      { name: "Keratin Smoothing", description: "Professional treatment for frizz-free, manageable hair.", price: "$120+" },
    ]
  }
];

export default function ServiceMenu() {
  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="space-y-24">
          {menuCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-6 mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white whitespace-nowrap">
                  {category.title}
                </h2>
                <div className="h-px bg-white/10 flex-grow"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    className="glass p-8 rounded-2xl relative overflow-hidden group hover:glass-gold transition-all duration-300 border border-white/10 hover:border-amber-500/30 shadow-[0_0_0_rgba(245,158,11,0)] hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] flex flex-col h-full"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-playfair font-bold text-white group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-amber-500 bg-amber-500/10 px-4 py-1 rounded-full">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-slate-400 text-base leading-relaxed flex-grow">
                      {item.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                      <span className="text-sm uppercase tracking-widest text-amber-500/50 group-hover:text-amber-500 transition-colors font-semibold">
                        Book Service &rarr;
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
