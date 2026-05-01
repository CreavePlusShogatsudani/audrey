'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const bgRef = useRef<HTMLImageElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 初期状態：非表示
    gsap.set([taglineRef.current, line1Ref.current, line2Ref.current, subRef.current, scrollIndicatorRef.current], {
      opacity: 0,
      y: 20,
    });

    // 順番に登場
    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(taglineRef.current, {
      opacity: 1, y: 0,
      duration: 0.7,
      ease: 'power2.out',
    })
    .to(line1Ref.current, {
      opacity: 1, y: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.3')
    .to(line2Ref.current, {
      opacity: 1, y: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.35')
    .to(subRef.current, {
      opacity: 0.75, y: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.2')
    .to(scrollIndicatorRef.current, {
      opacity: 0.5, y: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.1');

    return () => {
      tl.kill();
    };
  }, []);

  const handleScrollDown = () => {
    document.querySelector('#brand-message')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="hero"
      data-scroll-section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFFFF',
      }}
    >
      {/* Layer 1: GLACIA product photo — background */}
      <div className="hero-bg-image" style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden' }}>
        <img
          ref={bgRef}
          src="/hero_main.png"
          alt="AUDREY GLACIA"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center right',
            display: 'block',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Layer 2: Lattice pattern */}
      <div
        className="hero-lattice-bg"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          backgroundImage: [
            'repeating-linear-gradient(45deg, rgba(205,15,45,0.04) 0, rgba(205,15,45,0.04) 1px, transparent 1px, transparent 30px)',
            'repeating-linear-gradient(-45deg, rgba(205,15,45,0.04) 0, rgba(205,15,45,0.04) 1px, transparent 1px, transparent 30px)',
          ].join(','),
          pointerEvents: 'none',
        }}
      />

      {/* Layer 3: White gradient overlay */}
      <div
        className="hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.3) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Center text container */}
      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 20,
          maxWidth: '1200px',
          width: '100%',
          padding: '0 48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Tagline */}
        <p
          ref={taglineRef}
          className="hero-tagline"
          style={{
            fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
            fontWeight: 500,
            fontSize: '18px',
            letterSpacing: '0.4em',
            color: '#CD0F2D',
            display: 'block',
            margin: '0 0 56px',
          }}
        >
          WITH ALL MY LOVE
        </p>

        {/* Main copy */}
        <h1
          className="hero-main-copy"
          style={{
            fontFamily: '"Yu Gothic Medium", "游ゴシック体", YuGothic, "Yu Gothic", sans-serif',
            fontWeight: 500,
            fontSize: '80px',
            lineHeight: 1.4,
            color: '#1A1A1A',
            margin: '0 0 56px',
            letterSpacing: '0.01em',
            textAlign: 'center',
            whiteSpace: 'normal',
          }}
        >
          <span ref={line1Ref} className="line" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            苺とチョコが織りなす、
          </span>
          <span ref={line2Ref} className="line" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            甘酸っぱい魔法。
          </span>
        </h1>

        {/* Sub copy */}
        <p
          ref={subRef}
          className="hero-sub"
          style={{
            fontFamily: '"Yu Gothic Medium", "游ゴシック体", YuGothic, "Yu Gothic", sans-serif',
            fontWeight: 500,
            fontSize: '15px',
            letterSpacing: '0.1em',
            color: '#1A1A1A',
            margin: 0,
            lineHeight: 1.8,
            textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
          }}
        >
          ― 女の子の大好きが詰まった、宝石のようなスイーツ ―
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="hero-scroll-indicator"
        onClick={handleScrollDown}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          zIndex: 20,
          cursor: 'pointer',
        }}
      >
        <span style={{
          fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
          fontWeight: 500,
          fontSize: '11px',
          letterSpacing: '0.3em',
          color: '#8B8B8B',
        }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '48px',
          background: 'linear-gradient(to bottom, #8B8B8B, transparent)',
          animation: 'scrollLine 1.8s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { opacity: 1; }
          50%  { opacity: 0.3; }
          100% { opacity: 1; }
        }
        @media (max-width: 1279px) and (min-width: 768px) {
          .hero-main-copy { font-size: 56px !important; }
        }
        @media (max-width: 767px) {
          .hero-main-copy { font-size: 36px !important; }
        }
      `}</style>
    </section>
  );
}
