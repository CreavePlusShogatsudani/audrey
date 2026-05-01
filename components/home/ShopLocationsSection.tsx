'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const shops = [
  { number: '01', name: '日本橋高島屋', floor: 'B1F' },
  { number: '02', name: '西武池袋本店', floor: '1F' },
  { number: '03', name: '横浜高島屋', floor: 'B1F' },
  { number: '04', name: 'グランスタ東京', floor: '1F' },
  { number: '05', name: '羽田空港第1ターミナル', floor: '2F' },
];

export default function ShopLocationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0, y: 20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });

      const rows = listRef.current?.children;
      if (rows) {
        gsap.from(Array.from(rows), {
          opacity: 0, y: 16,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: { trigger: listRef.current, start: 'top 78%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="shops"
      style={{ width: '100%', padding: '160px 0', background: '#FAF8F5', position: 'relative', overflow: 'hidden' }}
    >
      {/* Single lattice — bottom-right, very faint */}
      <div
        className="lattice-pattern"
        data-parallax="0.5"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="shops-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: '80px' }}>
          <p style={{
            fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '0.35em',
            color: '#8B8B8B',
            margin: '0 0 16px',
          }}>
            SHOP LOCATIONS
          </p>
          <h2 className="shops-heading" style={{
            fontFamily: '"Futura Std", "Futura", "Helvetica Neue", Arial, sans-serif',
            fontWeight: 500,
            fontSize: '48px',
            letterSpacing: '0.05em',
            color: '#1A1A1A',
            margin: 0,
            lineHeight: 1,
          }}>
            Find Our Shops
          </h2>
        </div>

        {/* Shop list — as a clean table-like layout */}
        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', marginBottom: '72px' }}>
          {shops.map((shop) => (
            <div key={shop.name}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '28px 0',
                cursor: 'pointer',
                transition: 'opacity 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <span style={{
                    fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                    fontWeight: 500,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: '#CD0F2D',
                    width: '24px',
                  }}>
                    {shop.number}
                  </span>
                  <span style={{
                    fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
                    fontSize: '17px',
                    fontWeight: 500,
                    color: '#1A1A1A',
                    letterSpacing: '0.04em',
                  }}>
                    {shop.name}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <span style={{
                    fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                    fontWeight: 500,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: '#8B8B8B',
                  }}>
                    {shop.floor}
                  </span>
                  <i className="ri-arrow-right-line" style={{ fontSize: '14px', color: '#8B8B8B' }}></i>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', background: 'rgba(139, 139, 139, 0.2)' }} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          style={{
            fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: '#1A1A1A',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            paddingBottom: '4px',
            borderBottom: '1px solid #1A1A1A',
            transition: 'opacity 0.3s',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          All Shop List
          <i className="ri-arrow-right-line" style={{ fontSize: '12px' }}></i>
        </a>
      </div>

      <style>{`
        .shops-container { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
        @media (max-width: 767px) {
          .shops-container { padding: 0 20px; }
          .shops-heading { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}
