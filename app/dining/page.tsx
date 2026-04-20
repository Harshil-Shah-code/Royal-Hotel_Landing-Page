import InternalHero from '../components/InternalHero';
import PremiumFooter from '../components/PremiumFooter';

export default function DiningPage() {
  return (
    <main className="bg-charcoal min-h-screen text-cream">
      <InternalHero 
        title="Gastronomy"
        subtitle="A symphony of rare flavors"
        image="/images/hotel_dining.png"
      />

      <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto space-y-32">
        
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-gold text-xs tracking-[0.4em] uppercase">The Experience</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Mastery in <br /> Every Dish</h2>
            <p className="text-xl font-light text-cream/70 leading-relaxed">
              Our award-winning culinary team, led by Chef Marcello Rossi, transforms local Tuscan ingredients into masterpieces of contemporary gastronomy. Each menu is a seasonal narrative, reflecting the soul of Italy.
            </p>
          </div>
          <div className="aspect-square bg-black/20 relative group overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80 group-hover:scale-110 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-linear-to-tr from-charcoal/60 to-transparent" />
          </div>
        </div>

        {/* Restaurants */}
        <div className="space-y-16">
          <div className="text-center">
            <h3 className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Our Venues</h3>
            <h4 className="text-5xl font-serif">A Space for Every Mood</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { name: "The Moonlit Terrace", style: "Fine Dining", hours: "19:00 - 23:00" },
              { name: "The Alchemist Bar", style: "Artisan Cocktails", hours: "17:00 - 02:00" },
              { name: "Palazzo Breakfast Hall", style: "European Continental", hours: "07:00 - 11:00" }
            ].map((venue, i) => (
              <div key={i} className="p-8 border border-gold/10 bg-black/5 hover:border-gold/30 transition-all duration-300">
                <p className="text-gold text-[10px] tracking-widest uppercase mb-4">{venue.style}</p>
                <h5 className="text-2xl font-serif mb-6">{venue.name}</h5>
                <p className="text-cream/40 text-xs tracking-widest uppercase mb-12">{venue.hours}</p>
                <button className="text-gold text-[10px] tracking-[0.3em] uppercase border-b border-gold/30 pb-1">View Menu</button>
              </div>
            ))}
          </div>
        </div>

      </section>

      <PremiumFooter />
    </main>
  );
}
