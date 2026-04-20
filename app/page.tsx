import HeroSequence from './components/HeroSequence';
import Header from './components/Header';
import HeritageCollection from './components/HeritageCollection';
import FeaturedMasterpiece from './components/FeaturedMasterpiece';
import CraftsmanshipLegacy from './components/CraftsmanshipLegacy';
import PremiumFooter from './components/PremiumFooter';

export default function Home() {
  return (
    <main className="bg-charcoal text-cream min-h-screen">
      <Header />

      {/* 1. Cinematic Hero Sequence (Image sequence animation) */}
      <div id="home">
        <HeroSequence />
      </div>

      {/* 2. Horizontal Scroll Showcase (GSAP scroll-triggered) */}
      <div id="suites">
        <HeritageCollection />
      </div>

      {/* 3. Narrative Craftsmanship (Split-screen pinned/revealed) */}
      <div id="wellness">
        <CraftsmanshipLegacy />
      </div>

      {/* 4. 3D Tilt Masterpiece (Framer Motion tilt) */}
      <div id="dining">
        <FeaturedMasterpiece />
      </div>

      {/* 5. High-end Footer */}
      <div id="reservations">
        <PremiumFooter />
      </div>
    </main>
  );
}