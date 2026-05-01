'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Product = {
  num: string;
  nameEn: string;
  nameJa: string;
  desc: string;
  badge: string | null;
  img: string | null;
};

const products: Product[] = [
  {
    num: '01',
    nameEn: 'GLACIA MILK',
    nameJa: 'グレイシア ミルク',
    desc: 'フランス産発酵バター香るラングドシャ（チュイール）に、ミルキーなホワイトチョコクリームを絞り、フリーズドライいちごをトッピング。小さなブーケのような愛らしい見た目がSNSでも話題の看板商品。5・8・12・24本入りあり。',
    badge: '通年',
    img: '/products/glacia_milk.webp',
  },
  {
    num: '02',
    nameEn: 'GLACIA CHOCOLATE',
    nameJa: 'グレイシア チョコレート',
    desc: 'ほろ苦いcocoa生地のチュイールにミルクチョコクリームを巻き、フリーズドライいちごを飾った大人テイスト。ミルクとのアソートセットも人気。2025年9月に生地の食感がさらに改良されリニューアル済。',
    badge: '通年',
    img: '/products/glacia_chocolate.webp',
  },
  {
    num: '03',
    nameEn: 'HELLO BERRY WHITE',
    nameJa: 'ハローベリー ホワイトチョコ',
    desc: 'バター香るクッキー生地をいちごの形に焼き上げたサブレに、ホワイトチョコとフリーズドライいちごをたっぷりコーティング。キュートなフォルムが女性へのギフトとして大人気。',
    badge: '〜5月中旬',
    img: '/products/hello_berry_white.webp',
  },
  {
    num: '04',
    nameEn: 'HELLO BERRY MILK',
    nameJa: 'ハローベリー ミルクチョコレート',
    desc: 'いちごの形に焼き上げたサブレに、ミルクチョコレートをたっぷりコーティングした一品。夏季は販売休止。',
    badge: '〜5月中旬',
    img: '/products/hello_berry_milk.webp',
  },
  {
    num: '05',
    nameEn: 'AUDREY BUTTER',
    nameJa: 'オードリーバター',
    desc: '詳細準備中',
    badge: '準備中',
    img: '/products/audrey_butter.webp',
  },
  {
    num: '06',
    nameEn: 'STRAWBERRY BUTTER',
    nameJa: 'いちごバター',
    desc: '詳細準備中',
    badge: '準備中',
    img: '/products/strawberry_butter.webp',
  },
  {
    num: '07',
    nameEn: 'STRAWBERRY HOLIDAY',
    nameJa: 'ストロベリーホリデー',
    desc: '金・土・日曜日の週末限定販売のパイ菓子。バターの香るパイ生地に、ザラメとフリーズドライ苺をのせた贅沢な一品。',
    badge: '週末限定',
    img: '/products/strawberry_holiday.webp',
  },
  {
    num: '08',
    nameEn: 'ICHIGO NO YAMA',
    nameJa: 'いちごの山',
    desc: '2026年5月3日より販売開始の限定商品。催事限定でのご提供となります。',
    badge: '催事限定',
    img: '/products/ichigo_no_yama.webp',
  },
];

export default function ProductLineupSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0, y: 20,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });

      const cards = gridRef.current?.querySelectorAll('.product-card');
      if (cards) {
        gsap.from(cards, {
          opacity: 0, y: 32,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: { trigger: gridRef.current, start: 'top 78%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      style={{ width: '100%', padding: '160px 0', background: '#FFFFFF' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section header */}
        <div ref={headerRef} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '80px' }}>
          <div>
            <p style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.35em',
              color: '#8B8B8B',
              margin: '0 0 16px',
            }}>
              PRODUCT LINEUP
            </p>
            <h2 style={{
              fontFamily: '"Futura Std", "Futura", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 500,
              fontSize: '48px',
              letterSpacing: '0.05em',
              color: '#1A1A1A',
              margin: 0,
              lineHeight: 1,
            }}>
              Our Sweets
            </h2>
          </div>
          <p style={{
            fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
            fontSize: '13px',
            color: '#8B8B8B',
            margin: 0,
            letterSpacing: '0.06em',
            lineHeight: 1.9,
            textAlign: 'right',
          }}>
            商品ラインナップ
          </p>
        </div>

        {/* Card grid */}
        <div ref={gridRef} className="product-lineup-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          marginBottom: '72px',
        }}>
          {products.map((p, i) => (
            <div
              key={p.num}
              className="product-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0 0 24px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease-out',
                transform: hovered === i ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                minWidth: 0,
                width: '100%',
              }}
            >
              {/* Photo area */}
              <div style={{
                width: '100%',
                aspectRatio: '1 / 1',
                background: '#FAF8F5',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.nameEn}
                    style={{
                      width: '88%',
                      height: '88%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      display: 'block',
                    }}
                  />
                ) : (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    opacity: 0.35,
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      border: '1.5px solid #1A1A1A',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <i className="ri-image-line" style={{ fontSize: '20px', color: '#1A1A1A' }} />
                    </div>
                    <span style={{
                      fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                      fontSize: '9px',
                      letterSpacing: '0.25em',
                      color: '#1A1A1A',
                    }}>
                      COMING SOON
                    </span>
                  </div>
                )}
                {/* Badge */}
                {p.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: p.badge === '準備中' ? '#8B8B8B' : p.badge === '催事限定' ? '#1A1A1A' : '#CD0F2D',
                    color: '#FFFFFF',
                    fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    padding: '4px 10px',
                    whiteSpace: 'nowrap',
                  }}>
                    {p.badge}
                  </div>
                )}
              </div>

              {/* Lattice band — below photo */}
              <div
                style={{
                width: '100%',
                height: '8px',
                backgroundImage: `
                  repeating-linear-gradient(45deg, #CD0F2D 0, #CD0F2D 1px, transparent 1px, transparent 8px),
                  repeating-linear-gradient(-45deg, #CD0F2D 0, #CD0F2D 1px, transparent 1px, transparent 8px)
                `,
                opacity: hovered === i ? 0.6 : 0.3,
                transition: 'opacity 0.3s ease-out',
                marginBottom: '24px',
              }} />

              {/* Number */}
              <span style={{
                fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                fontWeight: 500,
                fontSize: '32px',
                letterSpacing: '0.05em',
                color: '#CD0F2D',
                opacity: 0.85,
                display: 'block',
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                {p.num}
              </span>

              {/* Name EN */}
              <h3 style={{
                fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                fontWeight: 500,
                fontSize: '22px',
                letterSpacing: '0.12em',
                color: '#1A1A1A',
                margin: '4px 0 0',
                lineHeight: 1.2,
              }}>
                {p.nameEn}
              </h3>

              {/* Name JA */}
              <p style={{
                fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
                fontSize: '13px',
                color: '#8B8B8B',
                margin: '4px 0 0',
                letterSpacing: '0.06em',
              }}>
                {p.nameJa}
              </p>

              {/* Red rule */}
              <div style={{
                width: '30px',
                height: '1.5px',
                background: '#CD0F2D',
                margin: '16px 0 0',
              }} />

              {/* Description */}
              <p style={{
                fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                color: '#1A1A1A',
                margin: '16px 0 0',
                lineHeight: 1.9,
                letterSpacing: '0.04em',
              }}>
                {p.desc}
              </p>

              {/* CTA link */}
              <div style={{ marginTop: '20px' }}>
                <span style={{
                  fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                  fontWeight: 500,
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  color: '#1A1A1A',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderBottom: '1px solid #1A1A1A',
                  paddingBottom: '2px',
                  opacity: hovered === i ? 0.5 : 1,
                  transition: 'opacity 0.3s ease-out',
                  whiteSpace: 'nowrap',
                }}>
                  View Details
                  <i className="ri-arrow-right-line" style={{ fontSize: '11px' }}></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            href="https://audrey-web.com"
            target="_blank"
            rel="noopener noreferrer"
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
            View All Products
            <i className="ri-arrow-right-line" style={{ fontSize: '12px' }}></i>
          </a>
        </div>
      </div>

      <style>{`
        .product-card {
          min-width: 0;
          overflow: hidden;
        }
        .product-card h3, .product-card p, .product-card span {
          overflow-wrap: break-word;
          word-break: break-word;
        }
        @media (max-width: 1279px) and (min-width: 768px) {
          .product-lineup-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 767px) {
          .product-lineup-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
