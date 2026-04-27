'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initParallax } from '@/lib/animations/parallax';
import { initFadeIn } from '@/lib/animations/fade-in';
import { initLatticeWeave } from '@/lib/animations/lattice-weave';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const timer = setTimeout(() => {
      initParallax();
      initFadeIn();
      initLatticeWeave();
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
