'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const variants = [
  {
    key: 'milk',
    label: 'Milk',
    thumb: 'https://readdy.ai/api/search-image?query=Japanese%20strawberry%20milk%20chocolate%20langue%20de%20chat%20cookie%20close%20up%2C%20pure%20white%20background%2C%20premium%20confectionery%2C%20soft%20diffused%20light%2C%20no%20text&width=80&height=80&seq=glacia_thumb_milk_v2&orientation=squarish',
    mainImg: 'https://readdy.ai/api/search-image?query=Japanese%20GLACIA%20strawberry%20milk%20chocolate%20langue%20de%20chat%20cookies%20arranged%20elegantly%2C%20fresh%20red%20strawberries%2C%20delicate%20white%20chocolate%20wafer%20cookies%2C%20premium%20luxury%20confectionery%2C%20pure%20white%20background%2C%20soft%20diffused%20natural%20light%2C%20refined%20food%20styling%2C%20no%20text%2C%20no%20people&width=700&height=840&seq=glacia_main_milk_v2&orientation=portrait',
  },
  {
    key: 'chocolate',
    label: 'Chocolate',
    thumb: 'https://readdy.ai/api/search-image?query=Japanese%20strawberry%20dark%20chocolate%20langue%20de%20chat%20cookie%20close%20up%2C%20pure%20white%20background%2C%20premium%20confectionery%2C%20soft%20diffused%20light%2C%20no%20text&width=80&height=80&seq=glacia_thumb_choco_v2&orientation=squarish',
    mainImg: 'https://readdy.ai/api/search-image?query=Japanese%20GLACIA%20strawberry%20dark%20chocolate%20langue%20de%20chat%20cookies%20arranged%20elegantly%2C%20fresh%20red%20strawberries%2C%20dark%20chocolate%20wafer%20cookies%2C%20premium%20luxury%20confectionery%2C%20pure%20white%20background%2C%20soft%20diffused%20natural%20light%2C%20refined%20food%20styling%2C%20no%20text%2C%20no%20people&width=700&height=840&seq=glacia_main_choco_v2&orientation=portrait',
  },
];

export default function FeaturedProductSection() {
  const [active, setActive] = useState<'milk' | 'chocolate'>('milk');
  const current = variants.find(v => v.key === active)!;

  const sectionRef = useRef<HTMLElement>(null);
  const imgColRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 画像：左からスライドイン
      gsap.from(imgColRef.current, {
        opacity: 0, x: -40,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });

      // テキスト列：右から各要素 stagger
      const children = textColRef.current?.children;
      if (children) {
        gsap.from(Array.from(children), {
          opacity: 0, x: 30,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="featured"
      style={{ width: '100%', padding: '160px 0', background: '#FAF8F5', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', gap: '96px' }}>

        {/* Left: Product photo — clean, no clutter */}
        <div ref={imgColRef} style={{ width: '50%', flexShrink: 0, position: 'relative' }}>
          {/* Subtle lattice — barely visible */}
          <div
            className="lattice-pattern"
            data-parallax="0.7"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          <div style={{ overflow: 'hidden', position: 'relative', zIndex: 1, lineHeight: 0 }}>
            <img
              data-product-parallax="true"
              src={current.mainImg}
              alt="GLACIA"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
                transition: 'opacity 0.5s ease',
                willChange: 'transform',
              }}
            />
          </div>
        </div>

        {/* Right: Text — spacious, hierarchical */}
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '0' }}>

          {/* data-reveal: 横線が伸びてラベルが現れる */}
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

          <div ref={textColRef} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

          <h2 style={{
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
            fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            color: '#8B8B8B',
            margin: '0 0 40px',
            letterSpacing: '0.08em',
          }}>
            グレイシア
          </p>

          <div style={{ width: '40px', height: '1px', background: '#CD0F2D', marginBottom: '40px' }} />

          <p style={{
            fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
            fontSize: '15px',
            fontWeight: 500,
            lineHeight: 2.2,
            color: '#1A1A1A',
            margin: '0 0 48px',
            letterSpacing: '0.04em',
          }}>
            甘酸っぱい、いちごとミルクチョコクリームを、<br />
            サクサク・ほろほろ食感のラングドシャで包みました。<br />
            箱を開けた瞬間、小さなブーケのような愛らしさが咲きます。
          </p>

          {/* Variant selector — minimal */}
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
          </div>{/* /textColRef */}
        </div>
      </div>
    </section>
  );
}
