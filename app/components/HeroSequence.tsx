'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 192;

export default function HeroSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Helper function to simulate 'object-fit: cover' geometrically on HTML5 Canvas
  const drawImageProp = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // 1. Preload Image Sequence (1 to 192) into memory array
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      const numStr = i.toString().padStart(4, '0');
      img.src = `/images/frame_${numStr}.jpg`;
      images.push(img);
    }

    // 2. State object for GSAP to animate
    const currentFrameObj = { frame: 0 };

    // Resize canvas smoothly on window reshape
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const currentImage = images[currentFrameObj.frame];
      if (currentImage && currentImage.complete && currentImage.naturalHeight !== 0) {
        drawImageProp(context, currentImage);
      }
    };
    window.addEventListener('resize', resizeCanvas);

    // Initial draw once first frame loads
    if (images[0]) {
      images[0].onload = () => {
        resizeCanvas();
      };
    }

    // 3. Setup GSAP Scrubbing
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=2500', // Increased pin duration to stretch out the 192 frames smoothly!
          pin: true,
          scrub: 0.5,
          anticipatePin: 1
        }
      });

      // Tie the frame obj property strictly to the timeline (from 0 to 191 index)
      tl.to(currentFrameObj, {
        frame: FRAME_COUNT - 1,
        snap: "frame", // Snap to whole integers only
        ease: "none",
        duration: 1, // Timeline relative duration
        onUpdate: () => {
          const img = images[currentFrameObj.frame];
          if (img && img.complete) {
            drawImageProp(context, img);
          }
        }
      }, 0); // Start at the beginning of timeline

      // Fade in text dynamically over the timeline (the gates start opening around 25%)
      tl.fromTo(textRef.current,
        { autoAlpha: 0, scale: 0.9, y: 50 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        0.2 // Starts fading the text in when 20% down the scroll
      );

    }, containerRef);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-charcoal flex items-center justify-center overflow-hidden">
      {/* Background dark gradient fallback */}
      <div className="absolute inset-0 z-0 bg-charcoal pointer-events-none" />

      {/* Frame Container */}
      <div className="absolute inset-0 z-0 w-full h-full">

        {/* The HTML5 Video-like Frame Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block z-10 pointer-events-none"
        />

        {/* Animated Text (Overlaying the Canvas) */}
        <div ref={textRef} className="absolute top-[20%] left-0 w-full text-center z-20 pointer-events-none invisible">
          <h1 className="text-5xl md:text-8xl font-serif text-cream drop-shadow-2xl">
            The Royal Palace
          </h1>
          <p className="text-xl md:text-2xl font-sans font-light tracking-[0.3em] text-gold mt-4">
            A LEGACY OF TIMELESS ELEGANCE
          </p>
        </div>

        {/* Overlay gradient to blend bottom edge flawlessly into the next black section */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-charcoal to-transparent z-20 pointer-events-none" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 z-20 pointer-events-auto">
        <span className="text-gold text-xs tracking-[0.2em] uppercase font-sans animate-pulse mb-3">Scroll to Enter</span>
        <div className="w-px h-12 bg-linear-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
