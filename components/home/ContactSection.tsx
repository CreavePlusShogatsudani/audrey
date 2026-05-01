'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const children = innerRef.current?.children;
      if (children) {
        gsap.from(Array.from(children), {
          opacity: 0, y: 20,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        width: '100%',
        padding: '160px 0',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div ref={innerRef} className="contact-inner" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '640px',
        width: '100%',
        padding: '0 48px',
      }}>

        {/* English title */}
        <h2 className="contact-heading" style={{
          fontFamily: '"Futura Std", "Futura", "Helvetica Neue", Arial, sans-serif',
          fontWeight: 500,
          fontSize: '40px',
          letterSpacing: '0.05em',
          color: '#1A1A1A',
          margin: 0,
          lineHeight: 1,
        }}>
          Get in Touch
        </h2>

        {/* Japanese subtitle */}
        <p style={{
          fontFamily: '"Yu Gothic Medium", "游ゴシック体", YuGothic, "Yu Gothic", sans-serif',
          fontWeight: 500,
          fontSize: '14px',
          color: '#8B8B8B',
          margin: '20px 0 0',
          letterSpacing: '0.1em',
        }}>
          ― お問い合わせ ―
        </p>

        {/* Description */}
        <p style={{
          fontFamily: '"Yu Gothic Medium", "游ゴシック体", YuGothic, "Yu Gothic", sans-serif',
          fontWeight: 500,
          fontSize: '15px',
          color: '#1A1A1A',
          margin: '32px 0 0',
          lineHeight: 2.0,
          letterSpacing: '0.05em',
        }}>
          商品・ギフト・法人のご相談など、<br />
          お気軽にお問い合わせください。
        </p>

        {/* CTA button */}
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="contact-cta"
          style={{
            fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
            fontWeight: 500,
            fontSize: '14px',
            letterSpacing: '0.15em',
            color: '#FFFFFF',
            background: hovered ? '#CD0F2D' : '#1A1A1A',
            border: 'none',
            width: '240px',
            height: '56px',
            marginTop: '40px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'background 0.3s ease',
            whiteSpace: 'nowrap',
          }}
        >
          Contact Page
          <i className="ri-arrow-right-line" style={{ fontSize: '14px' }}></i>
        </button>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-inner { padding: 0 20px !important; }
          .contact-heading { font-size: 28px !important; }
          .contact-cta { width: 100% !important; max-width: 280px; }
        }
      `}</style>
    </section>
  );
}
