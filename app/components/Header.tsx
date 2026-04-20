'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-100 px-12 py-8 flex justify-between items-center transition-all duration-500 pointer-events-none text-cream ${scrolled ? 'bg-charcoal/80 backdrop-blur-md py-4' : 'bg-linear-to-b from-black/50 to-transparent'}`}>
      <div className="font-serif tracking-[0.4em] pointer-events-auto text-xl cursor-pointer" onClick={() => { router.push('/'), scrollToSection('home') }}>
        THE ROYAL PALACE
      </div>
      <div className="hidden md:flex space-x-12 tracking-[0.3em] uppercase text-[10px] pointer-events-auto">
        <button onClick={() => router.push('/suites/royal-suite')} className="hover:text-gold transition-colors cursor-pointer">Suites</button>
        <button onClick={() => router.push('/dining')} className="hover:text-gold transition-colors cursor-pointer">Dining</button>
        <button onClick={() => router.push('/wellness')} className="hover:text-gold transition-colors cursor-pointer">Wellness</button>
        <button onClick={() => router.push('/reservations')} className="hover:text-gold transition-colors cursor-pointer">Reservations</button>
      </div>
    </header>
  );
}
