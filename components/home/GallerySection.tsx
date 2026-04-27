'use client';

const galleryItems = [
  {
    id: 1,
    img: 'https://readdy.ai/api/search-image?query=luxury%20Japanese%20strawberry%20sweets%20gift%20box%20opened%20beautifully%2C%20vivid%20red%20strawberries%2C%20elegant%20white%20packaging%20with%20red%20ribbon%2C%20premium%20confectionery%20photography%2C%20soft%20natural%20light%2C%20clean%20white%20background%2C%20no%20text%2C%20no%20people&width=600&height=600&seq=gal_audrey_01&orientation=squarish',
    colSpan: 2,
    rowSpan: 2,
    label: 'グレイシア',
  },
  {
    id: 2,
    img: 'https://readdy.ai/api/search-image?query=delicate%20red%20strawberry%20chocolate%20bonbons%20arranged%20beautifully%20on%20white%20surface%2C%20Japanese%20luxury%20sweets%2C%20macro%20photography%2C%20premium%20confectionery%2C%20no%20text%2C%20no%20people&width=400&height=300&seq=gal_audrey_02&orientation=landscape',
    colSpan: 1,
    rowSpan: 1,
    label: 'ルビーショコラ',
  },
  {
    id: 3,
    img: 'https://readdy.ai/api/search-image?query=elegant%20Japanese%20confectionery%20boutique%20interior%2C%20white%20and%20red%20decor%2C%20luxury%20sweets%20display%20case%2C%20beautiful%20store%20design%2C%20soft%20warm%20lighting%2C%20no%20text%2C%20no%20people&width=400&height=300&seq=gal_audrey_03&orientation=landscape',
    colSpan: 1,
    rowSpan: 1,
    label: 'ショップ',
  },
  {
    id: 4,
    img: 'https://readdy.ai/api/search-image?query=beautiful%20strawberry%20flower%20bouquet%20arrangement%20with%20sweets%2C%20Japanese%20gift%20presentation%2C%20elegant%20white%20and%20red%20tones%2C%20luxury%20packaging%2C%20romantic%20style%2C%20white%20background%2C%20no%20text%2C%20no%20people&width=400&height=600&seq=gal_audrey_04&orientation=portrait',
    colSpan: 1,
    rowSpan: 2,
    label: 'フルーレット',
  },
  {
    id: 5,
    img: 'https://readdy.ai/api/search-image?query=Japanese%20luxury%20sweets%20gift%20wrapping%20with%20elegant%20red%20ribbon%2C%20white%20packaging%2C%20premium%20confectionery%20brand%2C%20soft%20light%2C%20no%20text%2C%20no%20people&width=400&height=300&seq=gal_audrey_05&orientation=landscape',
    colSpan: 1,
    rowSpan: 1,
    label: 'ギフトラッピング',
  },
  {
    id: 6,
    img: 'https://readdy.ai/api/search-image?query=fresh%20vivid%20red%20strawberries%20with%20white%20chocolate%20coating%2C%20elegant%20food%20photography%2C%20Japanese%20premium%20sweets%2C%20clean%20white%20background%2C%20macro%20detail%2C%20no%20text%2C%20no%20people&width=400&height=300&seq=gal_audrey_06&orientation=landscape',
    colSpan: 1,
    rowSpan: 1,
    label: 'ブーケサブレ',
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" style={{ width: '100%', padding: '160px 0', background: '#FAF8F5', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '64px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '10px', letterSpacing: '0.4em', color: '#8B8B8B' }}>
              GALLERY
            </span>
            <h2 style={{ fontFamily: '"Futura Std", "Futura", "Helvetica Neue", Arial, sans-serif', fontWeight: 500, fontSize: '48px', letterSpacing: '0.05em', color: '#000000', margin: 0, lineHeight: 1.2 }}>
              Gallery
            </h2>
            <p style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '18px', color: '#1A1A1A', margin: 0, lineHeight: 1.9 }}>
              オードリーのキラキラした世界
            </p>
          </div>
          <p style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '13px', color: '#8B8B8B', textAlign: 'right', lineHeight: 1.9, letterSpacing: '0.05em', margin: 0 }}>
            愛らしいスイーツたちが織りなす、<br />
            甘酸っぱい物語のひとこまを。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 220px)', gap: '12px' }}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              style={{
                gridColumn: `span ${item.colSpan}`,
                gridRow: `span ${item.rowSpan}`,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <img
                src={item.img}
                alt={item.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.7s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', transition: 'background 0.4s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0)')}
              />
              <div style={{ position: 'absolute', bottom: '16px', left: '16px' }}>
                <div style={{ background: 'rgba(255,255,255,0.92)', padding: '6px 16px', display: 'inline-block' }}>
                  <span style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '11px', letterSpacing: '0.1em', color: '#1A1A1A' }}>
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '80px', background: '#CD0F2D', padding: '64px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '9px', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.6)' }}>
              CUSTOMER VOICE
            </span>
            <blockquote style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '20px', color: '#FFFFFF', lineHeight: 1.95, margin: 0, maxWidth: '560px' }}>
              「記念日に贈ったら、とても喜んでもらえました。
              パッケージも可愛くて、まるで小さな花束みたい。」
            </blockquote>
            <p style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: 0, letterSpacing: '0.05em' }}>
              — 東京都 / 30代女性
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '24px', flexShrink: 0 }}>
            <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontSize: '80px', color: 'rgba(255,255,255,0.15)', lineHeight: 1, fontStyle: 'italic' }}>"</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[1,2,3,4,5].map((s) => (
                <div key={s} style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                  <i className="ri-star-fill" style={{ fontSize: '12px' }}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
