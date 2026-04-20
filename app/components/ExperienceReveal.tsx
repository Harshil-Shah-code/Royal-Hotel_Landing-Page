'use client';

import { motion } from 'framer-motion';

const QUOTES = [
  "A sanctuary beyond compare.",
  "Transcending the ordinary stay.",
  "The pinnacle of hospitality."
];

export default function ExperienceReveal() {
  return (
    <section className="relative min-h-[150vh] bg-charcoal flex flex-col items-center justify-center py-40 overflow-hidden">
      {/* Background Textural Noise or Gradient */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 space-y-40">
        {QUOTES.map((quote, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <h2 className="text-4xl md:text-8xl font-serif text-cream text-center leading-tight tracking-tight relative">
              <span className="text-gold opacity-20 absolute -top-12 -left-12 text-9xl">"</span>
              {quote}
              <span className="text-gold opacity-20 absolute -bottom-12 -right-12 text-9xl">"</span>
            </h2>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="mt-40 text-center"
      >
        <p className="text-gold text-xs tracking-[1em] uppercase font-sans">Beloved by Generations</p>
      </motion.div>
    </section>
  );
}
