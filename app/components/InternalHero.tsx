'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from './Header';

interface InternalHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function InternalHero({ title, subtitle, image }: InternalHeroProps) {
  return (
    <section className="relative h-[70vh] w-full bg-charcoal overflow-hidden">
      <Header />
      
      {/* Background Image with Zoom Effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale-50"
          priority
        />
      </motion.div>

      {/* Overlay Scrim */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-charcoal/80 via-transparent to-charcoal" />

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="text-gold text-xs tracking-[0.5em] uppercase font-sans mb-4 block">The Royal Palace</span>
          <h1 className="text-5xl md:text-8xl font-serif text-cream leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-cream/50 text-lg md:text-xl font-light mt-6 tracking-widest uppercase">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Decorative Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gold/30 z-20"
      />
    </section>
  );
}
