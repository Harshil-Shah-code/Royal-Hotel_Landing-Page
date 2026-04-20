'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function FeaturedMasterpiece() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-charcoal flex items-center justify-center overflow-hidden py-24 px-8"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-8">
          <div>
            <span className="text-gold text-xs tracking-[0.5em] uppercase font-sans">The Pinnacle</span>
            <h2 className="text-5xl md:text-8xl font-serif text-cream mt-2 leading-tight">
              Culinary <br /> Masterpiece
            </h2>
          </div>
          
          <p className="text-cream/60 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Indulge in a private dining experience curated by our Michelin-starred chefs. Set against the moonlit backdrop of the city, every dish is a symphony of rare flavors and artistic presentation.
          </p>

          <div className="flex items-center space-x-12 py-8">
            <div className="space-y-1">
              <p className="text-gold text-xs tracking-widest uppercase">Recognition</p>
              <p className="text-cream font-serif text-2xl">3 MICHELIN</p>
            </div>
            <div className="w-px h-12 bg-gold/20" />
            <div className="space-y-1">
              <p className="text-gold text-xs tracking-widest uppercase">Exclusivity</p>
              <p className="text-cream font-serif text-2xl">One Table Only</p>
            </div>
          </div>

          <button 
            onClick={() => window.location.href = '/reservations'}
            className="group relative px-12 py-5 bg-gold text-charcoal font-sans text-xs tracking-[0.3em] uppercase font-bold overflow-hidden transition-all duration-300 pointer-events-auto"
          >
            <span className="relative z-10">Reserve This Moment</span>
            <div className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* 3D Image Container */}
        <div className="order-1 md:order-2 flex justify-center perspective-[1000px]">
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[300px] h-[450px] md:w-[400px] md:h-[600px] animate-float"
          >
            {/* Inner Shadow / Depth */}
            <div 
              style={{ transform: "translateZ(50px)" }}
              className="absolute inset-0 border border-gold/20 pointer-events-none" 
            />
            
            <Image
              src="/images/hotel_dining.png"
              alt="Michelin Dining Room"
              fill
              className="object-cover shadow-[0_50px_100px_rgba(0,0,0,0.5)] rounded-sm"
              priority
            />

            {/* Floating Particles */}
            <div 
              style={{ transform: "translateZ(100px)" }}
              className="absolute -top-10 -right-10 w-24 h-24 bg-gold/10 blur-xl pointer-events-none"
            />
          </motion.div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
