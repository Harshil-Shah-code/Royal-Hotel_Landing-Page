import InternalHero from '../../components/InternalHero';
import PremiumFooter from '../../components/PremiumFooter';
import { notFound } from 'next/navigation';

const SUITES_DATA = {
  'royal-suite': {
    title: 'The Royal Suite',
    subtitle: 'Signature Accommodation',
    image: '/images/hotel_suite.png',
    description: 'Our most prestigious residence, the Royal Suite offers 4,000 square feet of hand-crafted elegance. Featuring original 19th-century gold leaf moldings, a private butler pantry, and a balcony overlooking the palace gardens.',
    amenities: ['Private Butler', 'Panoramic Balcony', 'Chauffeur Service', 'Original Artwork']
  },
  'azure-wing': {
    title: 'The Azure Wing',
    subtitle: 'Poolside Luxury',
    image: '/images/hotel_pool.png',
    description: 'Inspired by the tranquility of the Mediterranean, the Azure Wing combines minimalist marble aesthetic with private garden access. Each room features floor-to-ceiling windows that open directly to our infinity pools.',
    amenities: ['Direct Pool Access', 'Private Garden', 'In-room Spa Services', 'Smart Automation']
  },
  'alchemist-spa': {
    title: 'Alchemist’s Spa',
    subtitle: 'Wellness & Restoration',
    image: '/images/hotel_spa.png',
    description: 'More than just a stay, the Alchemist’s residential wing is a total wellness immersion. Designed with natural stone and cedar, these suites offer a therapeutic environment for deep restoration.',
    amenities: ['Therapeutic Lighting', 'Aromatherapy Menu', 'Private Hydro-pool', 'Thermal Circuit Access']
  }
};

export default async function SuitePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const suite = SUITES_DATA[slug as keyof typeof SUITES_DATA];

  if (!suite) {
    notFound();
  }

  return (
    <main className="bg-charcoal min-h-screen text-cream">
      <InternalHero 
        title={suite.title}
        subtitle={suite.subtitle}
        image={suite.image}
      />

      <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-gold text-xs tracking-[0.4em] uppercase">Overview</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-cream/80">
              {suite.description}
            </p>
          </div>
          
          <div className="bg-black/20 p-12 border border-gold/10">
            <h3 className="text-gold text-xs tracking-[0.4em] uppercase mb-8">Premium Amenities</h3>
            <ul className="space-y-6">
              {suite.amenities.map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-lg font-light tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-24 border-t border-gold/5 flex justify-center">
            <button className="px-12 py-5 bg-gold text-charcoal font-bold tracking-[0.3em] uppercase hover:bg-cream transition-colors duration-300">
                Inquire for Availability
            </button>
        </div>
      </section>

      <PremiumFooter />
    </main>
  );
}
