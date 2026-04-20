'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SUITES = [
  {
    title: "The Royal Suite",
    category: "SIGNATURE ACCOMMODATION",
    image: "/images/hotel_suite.png",
    description: "A grand sanctuary featuring gold leaf moldings, panoramic balcony views, and unparalleled elegance."
  },
  {
    title: "The Azure Wing",
    category: "POOLSIDE LUXURY",
    image: "/images/hotel_pool.png",
    description: "Serene infinity pools meeting the horizon, surrounded by private marble gardens and tranquility."
  },
  {
    title: "Alchemist’s Spa",
    category: "WELLNESS & RESTORATION",
    image: "/images/hotel_spa.png",
    description: "A minimalist stone retreat where ancient healing meets modern indulgence under soft candlelight."
  }
];

export default function HeritageCollection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[300vw] flex flex-row relative bg-charcoal">
          
          {/* Intro Slide */}
          <div className="h-screen w-screen flex flex-col justify-center px-12 md:px-24">
            <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-4 animate-pulse">Our Heritage</h2>
            <h3 className="text-6xl md:text-9xl font-serif text-cream leading-tight">
              A LEGACY <br /> OF SERVICE
            </h3>
            <p className="max-w-md text-cream/60 mt-8 font-light text-lg tracking-wide leading-relaxed">
              Step into a world where history and luxury intertwine. Our palace has hosted legends for generations, offering a sanctuary of refined elegance.
            </p>
            <div className="w-24 h-px bg-gold mt-12" />
          </div>

          {/* Suite Slides */}
          {SUITES.map((suite, index) => (
            <div key={index} className="h-screen w-screen flex flex-col md:flex-row items-center justify-center p-12 md:p-24 space-y-8 md:space-y-0 md:space-x-16">
              <div className="relative w-full h-[50vh] md:w-1/2 md:h-[70vh] group overflow-hidden bg-black/20 rounded-sm">
                <Image
                  src={suite.image}
                  alt={suite.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="w-full md:w-1/3 space-y-6">
                <span className="text-gold text-xs tracking-[0.3em] uppercase">{suite.category}</span>
                <h4 className="text-4xl md:text-6xl font-serif text-cream">{suite.title}</h4>
                <p className="text-cream/70 font-light text-lg">{suite.description}</p>
                <button 
                  onClick={() => window.location.href = `/suites/${suite.title.toLowerCase().replace(/ /g, '-')}`}
                  className="px-8 py-3 border border-gold/30 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 pointer-events-auto"
                >
                  Explore Suite
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
