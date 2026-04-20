'use client';

import { motion } from 'framer-motion';

export default function PremiumFooter() {
  return (
    <footer className="bg-charcoal border-t border-gold/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-serif text-cream tracking-[0.3em] mb-8 uppercase">THE ROYAL PALACE</h2>
            <p className="text-cream/50 max-w-sm leading-relaxed font-light tracking-wide">
              Experience the pinnacle of hospitality where historical grandeur meets modern sophistication. Each room tells a story, and every guest becomes part of our legacy.
            </p>
            <div className="mt-12 group flex items-center space-x-4 cursor-pointer">
              <span className="w-12 h-px bg-gold group-hover:w-20 transition-all duration-300" />
              <span className="text-gold text-xs tracking-widest uppercase">Our Heritage</span>
            </div>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h3 className="text-gold text-xs tracking-[0.3em] uppercase mb-8">STAY WITH US</h3>
            <ul className="space-y-4 text-cream/60 font-light text-sm tracking-widest">
              <li onClick={() => window.location.href = '/suites/royal-suite'} className="hover:text-gold transition-colors cursor-pointer">Suites & Villas</li>
              <li onClick={() => window.location.href = '/suites/azure-wing'} className="hover:text-gold transition-colors cursor-pointer">Private Residences</li>
              <li onClick={() => window.location.href = '/dining'} className="hover:text-gold transition-colors cursor-pointer">Gastronomy</li>
              <li onClick={() => window.location.href = '/wellness'} className="hover:text-gold transition-colors cursor-pointer">Wellness & Spa</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-gold text-xs tracking-[0.3em] uppercase mb-8">CONCIERGE</h3>
            <ul className="space-y-4 text-cream/60 font-light text-sm tracking-widest">
              <li onClick={() => window.location.href = '/reservations'} className="hover:text-gold transition-colors cursor-pointer">Reservations</li>
              <li onClick={() => window.location.href = '/heritage'} className="hover:text-gold transition-colors cursor-pointer">Historical Heritage</li>
              <li onClick={() => window.location.href = '/contact'} className="hover:text-gold transition-colors cursor-pointer">Butlers Service</li>
              <li onClick={() => window.location.href = '/contact'} className="hover:text-gold transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gold/5 text-[10px] tracking-[0.2em] text-cream/30 uppercase font-sans">
          <p>© 2024 THE ROYAL PALACE INTERNATIONAL PRESTIGE</p>
          <div className="flex space-x-12 mt-6 md:mt-0">
            <span onClick={() => window.location.href = '/privacy'} className="hover:text-gold transition-colors cursor-pointer">Privacy Policy</span>
            <span onClick={() => window.location.href = '/terms'} className="hover:text-gold transition-colors cursor-pointer">Terms of Stay</span>
            <span onClick={() => window.location.href = '/accessibility'} className="hover:text-gold transition-colors cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
