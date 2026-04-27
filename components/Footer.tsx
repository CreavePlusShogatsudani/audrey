'use client';

const navLinks = [
  { label: 'About', href: '#story' },
  { label: 'Products', href: '#products' },
  { label: 'Shops', href: '#shops' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = [
  { label: 'プライバシーポリシー', href: '#' },
  { label: '特定商取引法', href: '#' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkStyle: React.CSSProperties = {
    fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
    fontSize: '13px',
    color: 'rgba(0,0,0,0.55)',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'color 0.3s',
    letterSpacing: '0.03em',
    lineHeight: 1.9,
    display: 'block',
  };

  return (
    <footer style={{ width: '100%', background: '#FFFFFF', borderTop: '1px solid rgba(205,15,45,0.5)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 48px 48px' }}>

        {/* Upper: left logo + right nav columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '64px' }}>

          {/* Left: Logo + statement */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <img
                src="/audrey_logo_footer.webp"
                alt="AUDREY"
                style={{
                  width: '160px',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            <p
              style={{
                fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
                fontSize: '13px',
                color: '#1A1A1A',
                lineHeight: 2.0,
                margin: 0,
                letterSpacing: '0.03em',
                maxWidth: '320px',
              }}
            >
              苺が大好きな女の子オードリーが届ける、<br />
              甘酸っぱい苺とチョコのキラキラした愛らしいスイーツ。
            </p>
          </div>

          {/* Right: 4 columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>

            {/* Navigation */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span
                style={{
                  fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                  fontWeight: 500,
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  color: 'rgba(0,0,0,0.35)',
                  marginBottom: '4px',
                }}
              >
                NAVIGATION
              </span>
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1A1A1A')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.55)')}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Online Shop */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span
                style={{
                  fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                  fontWeight: 500,
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  color: 'rgba(0,0,0,0.35)',
                  marginBottom: '4px',
                }}
              >
                ONLINE SHOP
              </span>
              <a
                href="https://audrey-strawberry.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#1A1A1A')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.55)')}
              >
                オンラインショップ
                <i className="ri-external-link-line" style={{ fontSize: '11px', marginLeft: '4px', verticalAlign: 'middle' }}></i>
              </a>
            </div>

            {/* Social */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span
                style={{
                  fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                  fontWeight: 500,
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  color: 'rgba(0,0,0,0.35)',
                  marginBottom: '4px',
                }}
              >
                SOCIAL
              </span>
              <a
                href="https://instagram.com/audrey_jp"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '6px' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1A1A1A')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.55)')}
              >
                <i className="ri-instagram-line" style={{ fontSize: '14px' }}></i>
                Instagram
              </a>
            </div>

            {/* Legal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span
                style={{
                  fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
                  fontWeight: 500,
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  color: 'rgba(0,0,0,0.35)',
                  marginBottom: '4px',
                }}
              >
                LEGAL
              </span>
              {legalLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1A1A1A')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.55)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle divider */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.08)', marginBottom: '32px' }} />

        {/* Lower: company + copyright */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif',
              fontSize: '12px',
              color: 'rgba(0,0,0,0.45)',
              letterSpacing: '0.03em',
            }}
          >
            株式会社プレジール（PLAISIR CO.,LTD.）
          </span>
          <span
            style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: 'rgba(0,0,0,0.45)',
            }}
          >
            © PLAISIR CO.,LTD. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}
