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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="header-inner">

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/logo_lg.avif" alt="AUDREY" className="header-logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="header-nav">
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

          {/* Desktop right */}
          <div className="header-right">
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
                flexShrink: 0,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#a50b24')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#CD0F2D')}
            >
              Online Shop
              <i className="ri-external-link-line" style={{ fontSize: '11px' }}></i>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '11px', letterSpacing: '0.1em', color: '#1A1A1A' }}>JA</span>
              <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontSize: '11px', color: 'rgba(139,139,139,0.35)' }}>/</span>
              <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '11px', letterSpacing: '0.1em', color: '#8B8B8B' }}>EN</span>
            </div>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="header-hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="メニュー"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none' }}
          >
            <span className={`hamburger-icon${menuOpen ? ' open' : ''}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                style={{
                  fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  letterSpacing: '0.2em',
                  color: '#1A1A1A',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid rgba(139,139,139,0.15)',
                  cursor: 'pointer',
                  padding: '20px 0',
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </nav>
          <a
            href="https://audrey-web.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              letterSpacing: '0.15em',
              color: '#FFFFFF',
              background: '#CD0F2D',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              height: '52px',
              marginTop: '32px',
            }}
          >
            Online Shop
            <i className="ri-external-link-line" style={{ fontSize: '12px' }}></i>
          </a>
        </div>
      )}

      <style>{`
        .header-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header-logo { width: 160px; height: auto; display: block; }
        .header-nav { display: flex; align-items: center; gap: 32px; }
        .header-right { display: flex; align-items: center; gap: 20px; }
        .header-hamburger { display: none !important; }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #FFFFFF;
          z-index: 99;
          padding: 0 24px 40px;
          overflow-y: auto;
        }

        .hamburger-icon {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 22px;
        }
        .hamburger-icon span {
          display: block;
          height: 1.5px;
          background: #1A1A1A;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
        .hamburger-icon.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .hamburger-icon.open span:nth-child(2) { opacity: 0; }
        .hamburger-icon.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        @media (max-width: 767px) {
          .header-inner { padding: 0 20px; }
          .header-logo { width: 120px; }
          .header-nav { display: none !important; }
          .header-right { display: none !important; }
          .header-hamburger { display: flex !important; }
          .mobile-menu { display: block; }
        }
      `}</style>
    </>
  );
}
