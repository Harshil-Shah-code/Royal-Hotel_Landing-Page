import InternalHero from '../components/InternalHero';
import PremiumFooter from '../components/PremiumFooter';

export default function ReservationsPage() {
  return (
    <main className="bg-charcoal min-h-screen text-cream">
      <InternalHero 
        title="Reservations"
        subtitle="Secure your sanctuary"
        image="/images/hotel_suite.png"
      />

      <section className="py-24 px-6 md:px-24 max-w-5xl mx-auto">
        <div className="bg-black/10 backdrop-blur-sm p-12 md:p-24 border border-gold/10 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-gold text-xs tracking-[0.4em] uppercase">Private Booking</h2>
            <p className="text-3xl md:text-5xl font-serif">A Personalized Stay</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40">Check-in Date</label>
              <input type="date" className="w-full bg-transparent border-b border-gold/20 py-4 outline-none focus:border-gold transition-colors text-cream select-none" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40">Check-out Date</label>
              <input type="date" className="w-full bg-transparent border-b border-gold/20 py-4 outline-none focus:border-gold transition-colors text-cream" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40">Preferred Suite</label>
              <select className="w-full bg-transparent border-b border-gold/20 py-4 outline-none focus:border-gold transition-colors text-cream/60 appearance-none">
                <option className="bg-charcoal">The Royal Suite</option>
                <option className="bg-charcoal">The Azure Wing</option>
                <option className="bg-charcoal">Alchemist’s Spa Residency</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40">Guests</label>
              <select className="w-full bg-transparent border-b border-gold/20 py-4 outline-none focus:border-gold transition-colors text-cream/60 appearance-none">
                <option className="bg-charcoal">1 Guest</option>
                <option className="bg-charcoal" selected>2 Guests</option>
                <option className="bg-charcoal">3 Guests</option>
                <option className="bg-charcoal">4 Guests or More</option>
              </select>
            </div>
          </div>

          <div className="pt-12 text-center">
            <button className="px-16 py-6 bg-gold text-charcoal font-bold tracking-[0.4em] uppercase text-xs hover:bg-cream transition-all duration-300">
               Check Availability
            </button>
            <p className="mt-8 text-cream/30 text-[10px] tracking-widest uppercase">
              Secure payments powered by Palace Vault
            </p>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  );
}
