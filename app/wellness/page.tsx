import InternalHero from '../components/InternalHero';
import PremiumFooter from '../components/PremiumFooter';

export default function WellnessPage() {
  return (
    <main className="bg-charcoal min-h-screen text-cream">
      <InternalHero 
        title="Wellness & Spa"
        subtitle="A journey of restoration"
        image="/images/hotel_spa.png"
      />

      <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto space-y-32">
        
        {/* The Philosophy */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="text-gold text-xs tracking-[0.4em] uppercase">The Philosophy</span>
          <h2 className="text-4xl md:text-7xl font-serif leading-tight">The Alchemist’s Path</h2>
          <p className="text-xl font-light text-cream/70 leading-relaxed italic">
            "In every drop of water, in every scent of cedar, there is a chance for transformation."
          </p>
        </div>

        {/* Features Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1 relative aspect-[4/5] bg-black/20 group overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-linear-to-b from-transparent to-charcoal/80" />
          </div>
          
          <div className="order-1 md:order-2 space-y-12">
            <h3 className="text-3xl md:text-5xl font-serif">A Sanctuary for the Senses</h3>
            <div className="space-y-8">
              {[
                { title: "Thermal Circuit", desc: "Experience the alternating ritual of heat and cold in our marble steam rooms and ice-plunge pools." },
                { title: "The Salt Chamber", desc: "Pure Himalayan salt air to detoxify the respiratory system and revitalize the skin." },
                { title: "Signature Massage", desc: "Customized therapeutic bodywork using hand-pressed Tuscan botanical oils." }
              ].map((service, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-gold text-[10px] tracking-widest uppercase">{service.title}</h4>
                  <p className="text-cream/60 font-light leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
            <button className="px-12 py-5 border border-gold/30 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 uppercase tracking-[0.3em] text-xs font-bold">
               Download Treatment Menu
            </button>
          </div>
        </div>

      </section>

      <PremiumFooter />
    </main>
  );
}
