'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    num: '01',
    nameEn: 'GLACIA',
    nameJa: 'グレイシア',
    desc: '甘酸っぱいいちごとミルクチョコクリームをラングドシャで包んだ、ブランドを象徴する看板商品。',
    img: 'https://readdy.ai/api/search-image?query=Japanese%20strawberry%20milk%20chocolate%20langue%20de%20chat%20cookies%20neatly%20arranged%20on%20off-white%20surface%2C%20premium%20luxury%20confectionery%2C%20minimal%20pure%20white%20background%20with%20soft%20shadow%2C%20refined%20elegant%20food%20photography%2C%20no%20text%2C%20no%20people%2C%20top-down%20view&width=560&height=560&seq=lineup_glacia_v3&orientation=squarish',
  },
  {
    num: '02',
    nameEn: 'AUDELEINE',
    nameJa: 'オードレーヌ',
    desc: 'リボン型のフォルムが愛らしい、いちごコンフィチュールの香るマドレーヌ。',
    img: 'https://readdy.ai/api/search-image?query=Japanese%20ribbon%20shaped%20madeleine%20pastry%20with%20strawberry%20jam%20filling%20on%20off-white%20surface%2C%20premium%20luxury%20confectionery%2C%20minimal%20pure%20white%20background%20with%20soft%20shadow%2C%20refined%20elegant%20food%20photography%2C%20no%20text%2C%20no%20people&width=560&height=560&seq=lineup_audeleine_v3&orientation=squarish',
  },
  {
    num: '03',
    nameEn: 'STRAWBERRY HOLIDAY',
    nameJa: 'ストロベリーホリデー',
    desc: '週末限定。バターの香るパイ生地に、ザラメとフリーズドライ苺をのせた贅沢な一品。',
    img: 'https://readdy.ai/api/search-image?query=Japanese%20butter%20pie%20pastry%20topped%20with%20freeze%20dried%20strawberry%20pieces%20and%20sugar%20crystals%20on%20off-white%20surface%2C%20premium%20luxury%20confectionery%2C%20minimal%20pure%20white%20background%20with%20soft%20shadow%2C%20refined%20elegant%20food%20photography%2C%20no%20text%2C%20no%20people&width=560&height=560&seq=lineup_holiday_v3&orientation=squarish',
  },
  {
    num: '04',
    nameEn: 'AUDREY GIFT SET',
    nameJa: 'オードリーギフトセット',
    desc: '人気商品を詰め合わせた、大切な方へのギフトに最適なアソートセット。',
    img: 'https://readdy.ai/api/search-image?query=Japanese%20luxury%20assorted%20sweets%20gift%20box%20open%20lid%20showing%20elegant%20confectionery%20items%20on%20off-white%20surface%2C%20premium%20red%20ribbon%2C%20minimal%20pure%20white%20background%20with%20soft%20shadow%2C%20refined%20elegant%20food%20photography%2C%20no%20text%2C%20no%20people&width=560&height=560&seq=lineup_giftset_v3&orientation=squarish',
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
