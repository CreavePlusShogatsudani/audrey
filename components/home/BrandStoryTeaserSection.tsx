'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BrandStoryTeaserSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  // labelRef は data-reveal に委譲したため削除
  const catch1Ref = useRef<HTMLSpanElement>(null);
  const catch2Ref = useRef<HTMLSpanElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const body1Ref = useRef<HTMLSpanElement>(null);
  const body2Ref = useRef<HTMLSpanElement>(null);
  const body3Ref = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 画像が下からゆっくり浮き上がる
      gsap.from(imgRef.current, {
        opacity: 0, y: 40,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });

      // テキスト要素を stagger で登場（label は data-reveal に委譲）
      gsap.from([catch1Ref.current, catch2Ref.current, ruleRef.current], {
        opacity: 0, y: 18,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
      });

      gsap.from([body1Ref.current, body2Ref.current, body3Ref.current], {
        opacity: 0, y: 14,
        duration: 0.55,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 62%' },
      });

      gsap.from(ctaRef.current, {
        opacity: 0, y: 10,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 55%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="brand-story"
      style={{ width: '100%', padding: '160px 0', background: '#FFFFFF', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', gap: '96px' }}>

        {/* Left: Visual */}
        <div style={{ width: '45%', flexShrink: 0, position: 'relative' }}>
          <div
            className="lattice-pattern"
            data-parallax="0.6"
            data-lattice-weave
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          <div style={{ overflow: 'hidden', position: 'relative', zIndex: 1, lineHeight: 0 }}>
            <img
              ref={imgRef}
              data-product-parallax="true"
              data-image-reveal="true"
              src="https://readdy.ai/api/search-image?query=artistic%20editorial%20photography%20of%20fresh%20red%20strawberries%20and%20white%20flowers%20arranged%20on%20pure%20white%20surface%2C%20Japanese%20luxury%20confectionery%20brand%20aesthetic%2C%20soft%20diffused%20natural%20light%2C%20minimal%20composition%2C%20refined%20and%20quiet%20atmosphere%2C%20no%20text%2C%20no%20people&width=600&height=740&seq=story_teaser_v2&orientation=portrait"
              alt="Brand Story"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block',
                willChange: 'transform',
              }}
            />
          </div>
        </div>

        {/* Right: Text */}
        <div style={{ width: '55%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          {/* data-reveal: 横線が伸びてラベルが現れる */}
          <div data-reveal style={{ marginBottom: '48px' }}>
            <div
              className="reveal-line"
              style={{ width: '32px', height: '1px', background: '#CD0F2D', marginBottom: '10px' }}
            />
            <span
              className="reveal-text"
              style={{
                fontFamily: '"Futura Std", "Futura", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 500,
                fontSize: '11px',
                letterSpacing: '0.3em',
                color: '#CD0F2D',
                display: 'block',
              }}
            >
              Our Story
            </span>
          </div>

          <h2
            className="story-catch"
            style={{
              fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
              fontSize: '48px',
              fontWeight: 500,
              lineHeight: 1.4,
              color: '#1A1A1A',
              margin: '0 0 40px',
              letterSpacing: '0.02em',
            }}
          >
            <span ref={catch1Ref} className="line" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              記念日の花束のような、
            </span>
            <span ref={catch2Ref} className="line" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              特別な瞬間を。
            </span>
          </h2>

          <div ref={ruleRef} style={{ width: '32px', height: '1px', background: '#1A1A1A', marginBottom: '40px' }} />

          <p
            className="story-body"
            style={{
              fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              lineHeight: 2.2,
              color: '#1A1A1A',
              margin: '0 0 56px',
              letterSpacing: '0.04em',
            }}
          >
            <span ref={body1Ref} className="line" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              苺が大好きな女の子、オードリー。
            </span>
            <span ref={body2Ref} className="line" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              彼女が摘みとった宝石のような苺を、
            </span>
            <span ref={body3Ref} className="line" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              愛らしいお菓子に変えて、大切なあなたへ届けます。
            </span>
          </p>

          <a
            ref={ctaRef}
            href="#"
            onClick={e => e.preventDefault()}
            style={{
              fontFamily: '"Futura Std", "Futura", "Helvetica Neue", Arial, sans-serif',
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
            Read More
            <i className="ri-arrow-right-line" style={{ fontSize: '12px' }}></i>
          </a>
        </div>
      </div>
    </section>
  );
}
