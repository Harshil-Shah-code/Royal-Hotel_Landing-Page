import InternalHero from '../components/InternalHero';
import PremiumFooter from '../components/PremiumFooter';

export default function ContactPage() {
  return (
    <main className="bg-charcoal min-h-screen text-cream outline-none">
      <InternalHero 
        title="Concierge & Contact"
        subtitle="We are at your service"
        image="/images/hotel_contact.png"
      />

      <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          
          {/* Contact Details */}
          <div className="space-y-16">
            <div className="space-y-4">
              <span className="text-gold text-xs tracking-[0.4em] uppercase">The Palace Address</span>
              <p className="text-2xl font-serif leading-relaxed">
                Piazza del Grandi Splendori, 1 <br />
                50123 Florence, Italy
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-gold text-xs tracking-[0.4em] uppercase">Direct Lines</span>
              <p className="text-2xl font-serif">
                Reception: +39 055 123 4567 <br />
                Concierge: +39 055 123 4568
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-gold text-xs tracking-[0.4em] uppercase">Global Inquiries</span>
              <p className="text-2xl font-serif">concierge@royalpalace.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/10 backdrop-blur-sm p-12 border border-gold/10">
            <h2 className="text-gold text-xs tracking-[0.4em] uppercase mb-12">Submit an Inquiry</h2>
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors text-lg font-light" placeholder="E.g. Julian Montgomery" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors text-lg font-light" placeholder="julian@excellence.com" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-cream/40">Inquiry Type</label>
                <select className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors text-lg font-light appearance-none text-cream/60">
                   <option className="bg-charcoal">Resort Reservations</option>
                   <option className="bg-charcoal">Spa & Wellness</option>
                   <option className="bg-charcoal">Dining Reservations</option>
                   <option className="bg-charcoal">Private Events</option>
                </select>
              </div>

              <div className="space-y-2 pt-8">
                <button className="w-full py-5 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-500 uppercase tracking-[0.4em] text-xs font-bold">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      <PremiumFooter />
    </main>
  );
}
