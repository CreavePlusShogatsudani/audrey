'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BrandMessageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const illustRef = useRef<HTMLImageElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 縦線が伸びる
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      // WITH ALL MY LOVE
      gsap.from(taglineRef.current, {
        opacity: 0, y: 16,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
        },
      });

      // 本文
      gsap.from(messageRef.current, {
        opacity: 0, y: 20,
        duration: 0.65,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      });

      // イラスト
      gsap.from(illustRef.current, {
        opacity: 0, y: 12,
        duration: 0.55,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      });

      // CTA
      gsap.from(ctaRef.current, {
        opacity: 0, y: 12,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 55%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="brand-message"
      style={{
        width: '100%',
        padding: '160px 0',
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Lattice weave + parallax */}
      <div
        className="lattice-pattern"
        data-parallax="0.5"
        data-lattice-weave
        style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      />
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: '640px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>

          {/* WITH ALL MY LOVE */}
          <p ref={taglineRef} style={{
            fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
            fontWeight: 500,
            fontSize: '40px',
            letterSpacing: '0.15em',
            color: '#CD0F2D',
            margin: '0 0 48px',
            lineHeight: 1,
          }}>
            WITH ALL MY LOVE
          </p>

          {/* Thin vertical rule */}
          <div ref={lineRef} style={{
            width: '1px',
            height: '48px',
            background: 'rgba(139, 139, 139, 0.3)',
            margin: '0 auto 48px',
          }} />

          {/* Main message */}
          <p ref={messageRef} style={{
            fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: 2.2,
            color: '#1A1A1A',
            margin: '0 0 64px',
            letterSpacing: '0.06em',
          }}>
            苺が大好きな女の子、オードリー。<br />
            甘酸っぱい苺をいろんなスイーツと組み合わせて、<br />
            キラキラした宝石のような愛らしいお菓子をお届けします。
          </p>

          {/* Illustration */}
          <img
            ref={illustRef}
            src="https://readdy.ai/api/search-image?query=delicate%20hand%20drawn%20line%20art%20illustration%20of%20a%20graceful%20girl%20silhouette%20holding%20a%20single%20strawberry%2C%20extremely%20minimal%20thin%20black%20ink%20lines%20on%20pure%20white%20background%2C%20refined%20Japanese%20fashion%20sketch%2C%20no%20color%20fill%2C%20no%20shading%2C%20elegant%20and%20restrained&width=160&height=200&seq=brand_msg_illust_v2&orientation=portrait"
            alt=""
            style={{
              width: '64px',
              height: 'auto',
              objectFit: 'contain',
              margin: '0 0 56px',
              opacity: 0.7,
            }}
          />

          {/* CTA button */}
          <a
            ref={ctaRef}
            href="#brand-story"
            onClick={e => {
              e.preventDefault();
              document.querySelector('#brand-story')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.2em',
              color: '#1A1A1A',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: '240px',
              height: '56px',
              border: '1px solid #1A1A1A',
              background: 'transparent',
              transition: 'background 0.3s ease, color 0.3s ease',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#1A1A1A';
              (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.color = '#1A1A1A';
            }}
          >
            About AUDREY
            <i className="ri-arrow-right-line" style={{ fontSize: '13px' }}></i>
          </a>
        </div>
      </div>
    </section>
  );
}
