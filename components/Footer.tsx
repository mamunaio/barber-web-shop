"use client";

import Link from "next/link";
import { MessageSquare, Share2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-playfair font-bold text-gradient-gold block mb-6">
              Luxe Salon
            </Link>
            <p className="text-slate-400 mb-6">
              Premium grooming and styling services for the modern individual. Experience the gold standard.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-black transition-colors">
                <MessageSquare size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-black transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-black transition-colors">
                <Heart size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-slate-400 hover:text-amber-500 transition-colors">Signature Haircuts</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-amber-500 transition-colors">Luxury Shaves</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-amber-500 transition-colors">Beard Trimming</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-amber-500 transition-colors">Hair Coloring</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-amber-500 transition-colors">Our Team</Link></li>
              <li><Link href="/reviews" className="text-slate-400 hover:text-amber-500 transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-amber-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button 
                type="submit" 
                className="bg-amber-500 text-black px-4 py-2 rounded-r-lg font-semibold hover:bg-amber-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Luxe Salon. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
