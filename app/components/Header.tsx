'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const handleCartAdd = () => {
      setPulse(true);
      setTimeout(() => setPulse(false), 500);
    };

    window.addEventListener('added-to-cart', handleCartAdd);
    return () => window.removeEventListener('added-to-cart', handleCartAdd);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-100 px-6 py-4 flex justify-between items-center mix-blend-difference pointer-events-none text-cream text-[14px]">
      <div className="font-serif tracking-widest pointer-events-auto">
        <a href="/">LUXORA</a>
      </div>
    </header>
  );
}
