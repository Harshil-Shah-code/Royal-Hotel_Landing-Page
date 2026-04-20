'use client';

import { motion } from 'framer-motion';

export default function CraftsmanshipLegacy() {
  return (
    <section className="bg-charcoal py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          
          <div className="relative aspect-[4/5] bg-black/20 overflow-hidden group">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-[url('/images/hotel_lobby.png')] bg-cover bg-center grayscale-50 contrast-110"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-charcoal/80 to-transparent" />
            <motion.div 
               style={{ transform: "translateZ(30px)" }}
               className="absolute bottom-12 left-12 p-8 border border-gold/30 backdrop-blur-md bg-black/10"
            >
              <p className="text-gold text-xs tracking-widest uppercase mb-4">Historical Splendor</p>
              <p className="text-cream text-2xl font-serif">Original Architecture <br />since 1892</p>
            </motion.div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-gold text-xs tracking-[0.4em] uppercase">The Palace Story</span>
              <h2 className="text-6xl font-serif text-cream leading-tight">Heritage in <br /> Every Stone</h2>
            </div>
            
            <p className="text-cream/50 text-lg md:text-xl font-light leading-relaxed">
              Every column, archway, and chandelier within The Royal Palace has been preserved with meticulous care. Our commitment to architectural integrity ensures that your stay is not just a vacation, but a journey through time.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-8">
              <div className="space-y-2">
                <p className="text-gold font-serif text-4xl italic">350+</p>
                <p className="text-cream/40 text-[10px] tracking-widest uppercase">Master Artisans</p>
              </div>
              <div className="space-y-2">
                <p className="text-gold font-serif text-4xl italic">130</p>
                <p className="text-cream/40 text-[10px] tracking-widest uppercase">Years of History</p>
              </div>
            </div>

            <motion.div
              whileHover={{ x: 20 }}
              onClick={() => window.location.href = '/heritage'}
              className="group flex items-center space-x-6 cursor-pointer text-gold text-xs tracking-[0.4em] uppercase pt-12"
            >
              <span>Our Full Story</span>
              <div className="w-12 h-px bg-gold group-hover:w-20 transition-all duration-300" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
