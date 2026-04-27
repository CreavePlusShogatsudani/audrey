'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  { date: '2026.04.15', tag: '限定販売', title: '次回オンライン販売のご案内' },
  { date: '2026.04.10', tag: '新商品', title: '春限定グレイシア登場' },
  { date: '2026.04.01', tag: 'メディア', title: '雑誌○○に掲載されました' },
];

const dividerStyle: React.CSSProperties = {
  width: '100%',
  height: '1px',
  background: '#E8E8E8',
};

export default function NewsSection() {
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
          opacity: 0, y: 14,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.09,
          scrollTrigger: { trigger: listRef.current, start: 'top 78%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="news"
      style={{ width: '100%', padding: '160px 0', background: '#FFFFFF' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>

        {/* Header — left-aligned */}
        <div ref={headerRef} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '64px' }}>
          <div>
            <p style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.35em',
              color: '#8B8B8B',
              margin: '0 0 16px',
            }}>
              NEWS & UPDATES
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
              News
            </h2>
          </div>
          <p style={{
            fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
            fontSize: '13px',
            color: '#8B8B8B',
            margin: 0,
            letterSpacing: '0.06em',
          }}>
            お知らせ
          </p>
        </div>

        {/* News list */}
        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', marginBottom: '64px' }}>
          <div style={dividerStyle} />

          {newsItems.map((item, i) => (
            <div key={i}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  padding: '20px 0',
                  cursor: 'pointer',
                  transition: 'opacity 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {/* Date — 120px, Futura Std Medium 14px, #8B8B8B, period separator */}
                <span style={{
                  fontFamily: '"Futura Std", "Futura", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  letterSpacing: '0.05em',
                  color: '#8B8B8B',
                  flexShrink: 0,
                  width: '120px',
                }}>
                  {item.date}
                </span>

                {/* Tag — RED bg, white text, 12px, auto width */}
                <span style={{
                  fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  background: '#CD0F2D',
                  padding: '4px 12px',
                  flexShrink: 0,
                  letterSpacing: '0.04em',
                  lineHeight: 1.5,
                  whiteSpace: 'nowrap',
                }}>
                  {item.tag}
                </span>

                {/* Title — 游ゴシック 16px #1A1A1A, single line with ellipsis */}
                <span style={{
                  fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#1A1A1A',
                  flex: 1,
                  letterSpacing: '0.04em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {item.title}
                </span>

                <i className="ri-arrow-right-line" style={{ fontSize: '14px', color: '#8B8B8B', flexShrink: 0 }} />
              </div>
              <div style={dividerStyle} />
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
          View All News
          <i className="ri-arrow-right-line" style={{ fontSize: '12px' }}></i>
        </a>
      </div>
    </section>
  );
}
