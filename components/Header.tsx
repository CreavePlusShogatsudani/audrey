'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '#story' },
  { label: 'Products', href: '#collection' },
  { label: 'Shops', href: '#contact' },
  { label: 'News', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Left: Logo — always BLACK, 160px wide */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img
            src="/logo_lg.avif"
            alt="AUDREY"
            style={{
              width: '160px',
              height: 'auto',
              display: 'block',
            }}
          />
        </Link>

        {/* Center: Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              style={{
                fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                letterSpacing: '0.15em',
                color: '#1A1A1A',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'opacity 0.3s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.45')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Right: Online Shop + Language */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            href="https://audrey-web.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.1em',
              color: '#FFFFFF',
              background: '#CD0F2D',
              border: 'none',
              borderRadius: '2px',
              width: '120px',
              height: '40px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              transition: 'background 0.3s',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#a50b24')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#CD0F2D')}
          >
            Online Shop
            <i className="ri-external-link-line" style={{ fontSize: '11px', lineHeight: 1 }}></i>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: '#1A1A1A',
              cursor: 'default',
            }}>
              JA
            </span>
            <span style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontSize: '11px',
              color: 'rgba(139, 139, 139, 0.35)',
            }}>
              /
            </span>
            <span style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: '#8B8B8B',
              cursor: 'default',
            }}>
              EN
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
