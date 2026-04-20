'use client';

import InternalHero from './InternalHero';
import PremiumFooter from './PremiumFooter';

interface LegalPageProps {
  title: string;
  content: string[];
}

export default function PalaceLegalPage({ title, content }: LegalPageProps) {
  return (
    <main className="bg-charcoal min-h-screen text-cream">
      <InternalHero 
        title={title}
        subtitle="The Palace Protocols"
        image="/images/hotel_lobby.png"
      />

      <section className="py-24 px-6 md:px-24 max-w-4xl mx-auto space-y-12">
         {content.map((paragraph, i) => (
           <p key={i} className="text-lg font-light text-cream/70 leading-relaxed">
             {paragraph}
           </p>
         ))}
      </section>

      <PremiumFooter />
    </main>
  );
}
