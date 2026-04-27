'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FooterTransitionSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const latticeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ラティス柄：opacity 0 → 1 でじわっと浮き上がる
      gsap.from(latticeRef.current, {
        opacity: 0,
        duration: 0.75,
        ease: 'power1.inOut',
        scrollTrigger: { trigger: wrapRef.current, start: 'top 90%' },
      });

      // テキスト：letter-spacing が縮んで広がる演出
      gsap.from(textRef.current, {
        opacity: 0,
        letterSpacing: '0.8em',
        duration: 0.65,
        ease: 'power2.out',
        scrollTrigger: { trigger: wrapRef.current, start: 'top 88%' },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      data-section-bridge="true"
      style={{
        width: '100%',
        height: '120px',
        background: '#FAF8F5',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Lattice background */}
      <div
        ref={latticeRef}
        className="lattice-pattern"
        data-parallax="0.5"
        data-lattice-weave
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />

      {/* WITH ALL MY LOVE */}
      <span ref={textRef} style={{
        position: 'relative',
        zIndex: 1,
        fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.4em',
        color: '#CD0F2D',
      }}>
        WITH ALL MY LOVE
      </span>
    </div>
  );
}
