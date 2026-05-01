'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const variants = [
  {
    key: 'milk',
    label: 'Milk',
    thumb: '/products/glacia_milk.webp',
    mainImg: '/products/glacia_milk_featured.webp',
    desc: 'フランス産発酵バター香るラングドシャ（チュイール）に、ミルキーなホワイトチョコクリームを絞り、フリーズドライいちごをトッピング。小さなブーケのような愛らしい見た目がSNSでも話題の看板商品。5・8・12・24本入りあり。',
  },
  {
    key: 'chocolate',
    label: 'Chocolate',
    thumb: '/products/glacia_chocolate.webp',
    mainImg: '/products/glacia_chocolate_featured.webp',
    desc: 'ほろ苦いcocoa生地のチュイールにミルクチョコクリームを巻き、フリーズドライいちごを飾った大人テイスト。ミルクとのアソートセットも人気。2025年9月に生地の食感がさらに改良されリニューアル済。',
  },
];

export default function FeaturedProductSection() {
  const [active, setActive] = useState<'milk' | 'chocolate'>('milk');
  const current = variants.find(v => v.key === active)!;

  const sectionRef = useRef<HTMLElement>(null);
  const imgColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgColRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="featured"
      style={{ width: '100%', padding: '160px 0', background: '#FAF8F5', overflow: 'hidden' }}
    >
      <div className="featured-inner">

        {/* Left: Product photo */}
        <div ref={imgColRef} className="featured-img-col" style={{ lineHeight: 0 }}>
          <img
            src={current.mainImg}
            alt="GLACIA"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
              transition: 'opacity 0.5s ease',
            }}
          />
        </div>

        {/* Right: Text */}
        <div className="featured-text-col" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

          {/* Label */}
          <div data-reveal style={{ marginBottom: '40px' }}>
            <div
              className="reveal-line"
              style={{ width: '32px', height: '1px', background: '#CD0F2D', marginBottom: '10px' }}
            />
            <span
              className="reveal-text"
              style={{
                fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                fontWeight: 500,
                fontSize: '11px',
                letterSpacing: '0.3em',
                color: '#CD0F2D',
                display: 'block',
              }}
            >
              Featured Product
            </span>
          </div>

          {/* Product name */}
          <h2 className="featured-title" style={{
            fontFamily: '"Futura Std", "Futura", "Helvetica Neue", Arial, sans-serif',
            fontWeight: 500,
            fontSize: '80px',
            letterSpacing: '0.05em',
            color: '#1A1A1A',
            margin: '0 0 8px',
            lineHeight: 0.9,
          }}>
            GLACIA
          </h2>

          <p style={{
            fontFamily: '"Hiragino Kaku Gothic ProN", "Yu Gothic", YuGothic, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: '#8B8B8B',
            margin: '0 0 40px',
            letterSpacing: '0.08em',
          }}>
            グレイシア
          </p>

          <div style={{ width: '40px', height: '1px', background: '#CD0F2D', marginBottom: '40px' }} />

          {/* Description — always visible, no GSAP opacity */}
          <p style={{
            fontFamily: '"Hiragino Kaku Gothic ProN", "Yu Gothic", YuGothic, sans-serif',
            fontSize: '15px',
            fontWeight: 600,
            lineHeight: 2.2,
            color: '#1A1A1A',
            margin: '0 0 48px',
            letterSpacing: '0.04em',
          }}>
            {current.desc}
          </p>

          {/* Variant selector */}
          <div style={{ marginBottom: '48px' }}>
            <span style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '9px',
              letterSpacing: '0.3em',
              color: '#8B8B8B',
              display: 'block',
              marginBottom: '16px',
            }}>
              VARIETY
            </span>
            <div style={{ display: 'flex', gap: '24px' }}>
              {variants.map(v => (
                <button
                  key={v.key}
                  onClick={() => setActive(v.key as 'milk' | 'chocolate')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0 0 12px',
                    borderBottom: active === v.key ? '1px solid #CD0F2D' : '1px solid transparent',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <img
                    src={v.thumb}
                    alt={v.label}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      opacity: active === v.key ? 1 : 0.45,
                      transition: 'opacity 0.3s',
                    }}
                  />
                  <span style={{
                    fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                    fontWeight: 500,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: active === v.key ? '#1A1A1A' : '#8B8B8B',
                    transition: 'color 0.3s',
                  }}>
                    {v.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://audrey-web.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.25em',
              color: '#FFFFFF',
              background: '#CD0F2D',
              border: 'none',
              padding: '18px 40px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'background 0.3s',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              alignSelf: 'flex-start',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#a50b24')}
            onMouseLeave={e => (e.currentTarget.style.background = '#CD0F2D')}
          >
            View Details
            <i className="ri-arrow-right-line" style={{ fontSize: '12px' }}></i>
          </a>
        </div>
      </div>
      <style>{`
        .featured-inner {
          max-width: 1280px; margin: 0 auto; padding: 0 48px;
          display: flex; align-items: center; gap: 96px;
        }
        .featured-img-col { width: 50%; flex-shrink: 0; }
        .featured-text-col { width: 50%; }

        @media (max-width: 767px) {
          .featured-inner { flex-direction: column; gap: 40px; padding: 0 20px; }
          .featured-img-col { width: 100%; }
          .featured-text-col { width: 100%; }
          .featured-title { font-size: 52px !important; }
        }
      `}</style>
    </section>
  );
}
