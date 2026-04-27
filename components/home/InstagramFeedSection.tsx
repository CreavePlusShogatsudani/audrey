'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://readdy.ai/api/search-image?query=Japanese%20luxury%20strawberry%20confectionery%20flat%20lay%20on%20white%20marble%20surface%2C%20refined%20food%20photography%2C%20soft%20diffused%20light%2C%20minimal%20composition%2C%20no%20text%2C%20no%20people&width=400&height=400&seq=insta_v3_01&orientation=squarish',
  'https://readdy.ai/api/search-image?query=fresh%20red%20strawberries%20with%20white%20chocolate%20on%20pure%20white%20background%2C%20elegant%20macro%20food%20photography%2C%20Japanese%20premium%20sweets%2C%20soft%20natural%20light%2C%20no%20text%2C%20no%20people&width=400&height=400&seq=insta_v3_02&orientation=squarish',
  'https://readdy.ai/api/search-image?query=Japanese%20luxury%20sweets%20gift%20box%20with%20red%20ribbon%20on%20white%20surface%2C%20premium%20confectionery%20packaging%2C%20soft%20diffused%20light%2C%20refined%20composition%2C%20no%20text%2C%20no%20people&width=400&height=400&seq=insta_v3_03&orientation=squarish',
  'https://readdy.ai/api/search-image?query=elegant%20white%20confectionery%20shop%20interior%20display%2C%20luxury%20sweets%20arrangement%2C%20soft%20warm%20light%2C%20refined%20Japanese%20aesthetic%2C%20no%20text%2C%20no%20people&width=400&height=400&seq=insta_v3_04&orientation=squarish',
  'https://readdy.ai/api/search-image?query=strawberry%20langue%20de%20chat%20cookies%20arranged%20on%20white%20surface%2C%20Japanese%20premium%20confectionery%2C%20soft%20diffused%20light%2C%20minimal%20food%20photography%2C%20no%20text%2C%20no%20people&width=400&height=400&seq=insta_v3_05&orientation=squarish',
  'https://readdy.ai/api/search-image?query=delicate%20white%20flowers%20and%20red%20strawberries%20on%20pure%20white%20background%2C%20Japanese%20luxury%20brand%20aesthetic%2C%20soft%20natural%20light%2C%20refined%20composition%2C%20no%20text%2C%20no%20people&width=400&height=400&seq=insta_v3_06&orientation=squarish',
];

function InstagramCard({ img, index }: { img: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://instagram.com/audrey_jp"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: '1 / 1',
        overflow: 'hidden',
        display: 'block',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      <img
        src={img}
        alt={`Instagram ${index + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          transition: 'transform 0.3s ease',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />

      {/* White overlay on hover */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(255,255,255,0.2)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="ri-instagram-line" style={{ fontSize: '24px', color: '#FFFFFF' }}></i>
        </div>
      </div>
    </a>
  );
}

export default function InstagramFeedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0, y: 18,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });

      const cells = gridRef.current?.children;
      if (cells) {
        gsap.from(Array.from(cells), {
          opacity: 0, scale: 0.96,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.07,
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="instagram"
      style={{ width: '100%', padding: '160px 0', background: '#FAF8F5' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>

        {/* Header — centered */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
            fontWeight: 500,
            fontSize: '36px',
            letterSpacing: '0.05em',
            color: '#1A1A1A',
            margin: 0,
            lineHeight: 1,
          }}>
            @audrey_jp
          </h2>
          <p style={{
            fontFamily: '"Yu Gothic Medium", "游ゴシック体", YuGothic, "Yu Gothic", sans-serif',
            fontWeight: 500,
            fontSize: '14px',
            color: '#8B8B8B',
            margin: '8px 0 0',
            letterSpacing: '0.06em',
          }}>
            ― Instagramで世界観をお届け ―
          </p>
        </div>

        {/* Grid — 6 columns, 1:1 squares, gap 12px */}
        <div ref={gridRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '12px',
          marginBottom: '0',
        }}>
          {images.map((img, i) => (
            <InstagramCard key={i} img={img} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <a
            href="https://instagram.com/audrey_jp"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.15em',
              color: '#1A1A1A',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              width: '260px',
              height: '56px',
              border: '1px solid #1A1A1A',
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
            Follow on Instagram
            <i className="ri-arrow-right-line" style={{ fontSize: '13px' }}></i>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1279px) and (min-width: 768px) {
          #instagram .insta-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          #instagram .insta-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
