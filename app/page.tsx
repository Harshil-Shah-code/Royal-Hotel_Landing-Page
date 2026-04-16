import HeroSequence from './components/HeroSequence';
import Header from './components/Header';

export default function Home() {
  return (
    <main className="bg-charcoal text-cream min-h-screen">
      <Header />

      {/* Cinematic Image Sequence Unwrapping effect */}
      <HeroSequence />

      {/* Ribbon Scroll and Parallax Product Tilt */}
    </main>
  );
}