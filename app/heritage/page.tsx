import InternalHero from '../components/InternalHero';
import PremiumFooter from '../components/PremiumFooter';

export default function HeritagePage() {
  return (
    <main className="bg-charcoal min-h-screen text-cream">
      <InternalHero 
        title="Our Heritage"
        subtitle="Legacy since 1892"
        image="/images/hotel_lobby.png"
      />

      <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto space-y-32">
        
        <div className="max-w-4xl space-y-12">
          <span className="text-gold text-xs tracking-[0.4em] uppercase">The Story</span>
          <h2 className="text-4xl md:text-7xl font-serif leading-tight">A Palace for <br /> the Ages</h2>
          <p className="text-2xl md:text-3xl font-light text-cream/80 leading-relaxed font-serif italic">
            "We do not inherit the palace from our ancestors; we borrow it from our children."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-8 text-lg font-light text-cream/60 leading-relaxed">
            <p>
              Founded in 1892 by the Marchese di Villadorata, The Royal Palace was originally intended as a summer residence for the Florentine nobility. Its soaring arches and hand-carved columns were inspired by the timeless geometry of the Renaissance, balanced with the emerging comforts of the 19th century.
            </p>
            <p>
              Throughout the early 1900s, the palace became a cultural crossroads, hosting diplomats, artists, and royalty from across the globe. It survived the tumultuous mid-century with its spirit intact, preserved by a lineage of caretakers dedicated to the Marchese’s original vision.
            </p>
          </div>
          <div className="space-y-8 text-lg font-light text-cream/60 leading-relaxed">
             <p>
              In 2020, we undertook a three-year restoration project, employing over 350 local artisans to painstakingly refresh the gold leaf moldings, stabilize the frescoed ceilings, and modernize the infrastructure without disturbing a single historical stone.
             </p>
             <p>
              Today, The Royal Palace stands as a testament to the enduring power of history. We invite you to be part of our continuing narrative.
             </p>
          </div>
        </div>

        {/* Timeline placeholder */}
        <div className="pt-24 border-t border-gold/10 grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
                { year: "1892", event: "Foundation laying by the Marchese." },
                { year: "1924", event: "Grand Ballroom expansion completion." },
                { year: "1960", event: "Preservation as a historical landmark." },
                { year: "2023", event: "Grand Modernization & Reopening." }
            ].map((item, i) => (
                <div key={i} className="space-y-4">
                    <p className="text-gold font-serif text-4xl">{item.year}</p>
                    <p className="text-xs uppercase tracking-widest text-cream/40 leading-loose">{item.event}</p>
                </div>
            ))}
        </div>

      </section>

      <PremiumFooter />
    </main>
  );
}
