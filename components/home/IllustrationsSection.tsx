'use client';

const illustrations = [
  {
    id: 1,
    title: 'オードリーと苺',
    titleEn: 'AUDREY & STRAWBERRY',
    desc: 'ブランドの象徴、苺を愛する女の子オードリー',
    img: 'https://readdy.ai/api/search-image?query=delicate%20fine%20line%20art%20illustration%20of%20cute%20girl%20with%20strawberries%20and%20flowers%2C%20elegant%20hand%20drawn%20style%2C%20minimal%20thin%20black%20lines%20on%20pure%20white%20background%2C%20Japanese%20fashion%20illustration%2C%20whimsical%20and%20adorable%2C%20fine%20art%20print%20quality%2C%20no%20color%20fill%2C%20sketch%20style&width=400&height=520&seq=illus_audrey_01&orientation=portrait',
    accentColor: '#CD0F2D',
  },
  {
    id: 2,
    title: '記念日の花束',
    titleEn: 'ANNIVERSARY BOUQUET',
    desc: '大切な人へ贈る、甘酸っぱい花束',
    img: 'https://readdy.ai/api/search-image?query=elegant%20hand%20drawn%20botanical%20illustration%20of%20strawberry%20flowers%20bouquet%20with%20leaves%2C%20delicate%20fine%20line%20art%2C%20minimal%20style%2C%20thin%20black%20ink%20lines%20on%20pure%20white%20background%2C%20fine%20detail%20botanical%20print%2C%20romantic%20and%20feminine%2C%20no%20color%20fill&width=400&height=600&seq=illus_audrey_02&orientation=portrait',
    accentColor: '#64B9AF',
  },
  {
    id: 3,
    title: 'キラキラの宝石',
    titleEn: 'SPARKLING JEWELS',
    desc: '宝石のように輝く、愛らしいスイーツ',
    img: 'https://readdy.ai/api/search-image?query=whimsical%20hand%20drawn%20illustration%20of%20sparkling%20gem%20shaped%20sweets%20and%20strawberries%20with%20stars%2C%20delicate%20fine%20line%20art%20style%2C%20minimal%20thin%20black%20lines%20on%20white%20background%2C%20cute%20and%20elegant%20Japanese%20illustration%2C%20no%20color%20fill&width=400&height=520&seq=illus_audrey_03&orientation=portrait',
    accentColor: '#000000',
  },
];

export default function IllustrationsSection() {
  return (
    <section id="illustrations" style={{ width: '100%', padding: '160px 0', background: '#FFFFFF', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>

        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '10px', letterSpacing: '0.4em', color: '#8B8B8B' }}>
            ILLUSTRATIONS
          </span>
          <h2 style={{ fontFamily: '"Futura Std", "Futura", "Helvetica Neue", Arial, sans-serif', fontWeight: 500, fontSize: '48px', letterSpacing: '0.05em', color: '#000000', margin: '16px 0 12px' }}>
            World of Audrey
          </h2>
          <p style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '18px', color: '#8B8B8B', margin: 0, lineHeight: 1.9 }}>
            繊細な手書き風の線画が紡ぐ、オードリーの愛らしい物語
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
            <div style={{ width: '48px', height: '1px', background: 'rgba(139, 139, 139, 0.25)' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#CD0F2D' }} />
            <div style={{ width: '48px', height: '1px', background: 'rgba(139, 139, 139, 0.25)' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', alignItems: 'start' }}>
          {illustrations.map((item, index) => (
            <div
              key={item.id}
              style={{ marginTop: index === 1 ? '48px' : '0', cursor: 'pointer' }}
            >
              <div style={{ background: '#FAF8F5', overflow: 'hidden', transition: 'box-shadow 0.4s' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: index === 1 ? '3/4' : '4/5' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.7s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                <div style={{ padding: '32px' }}>
                  <div style={{ width: '24px', height: '1px', background: item.accentColor, marginBottom: '16px' }} />
                  <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '9px', letterSpacing: '0.3em', color: '#8B8B8B' }}>
                    {item.titleEn}
                  </span>
                  <h3 style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '18px', color: '#1A1A1A', margin: '8px 0 8px', fontWeight: 500 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '13px', color: '#8B8B8B', margin: 0, lineHeight: 1.9, letterSpacing: '0.05em' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1.5px, transparent 0, transparent 50%)`,
            backgroundSize: '18px 18px',
            opacity: 0.06,
          }} />
          <div style={{ background: '#000000', padding: '64px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '10px', letterSpacing: '0.4em', color: '#64B9AF' }}>
                LATTICE PATTERN
              </span>
              <h3 style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '36px', letterSpacing: '0.1em', color: '#FFFFFF', margin: 0 }}>
                ラティス柄の物語
              </h3>
              <p style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.95, margin: 0, maxWidth: '480px' }}>
                オードリーのアイコニックなラティス柄（黒の斜め格子）は、
                ブランドのアイデンティティを象徴するパターン。
                洗練された幾何学的な美しさと、愛らしさが交差する場所。
              </p>
            </div>
            <div style={{
              width: '160px',
              height: '160px',
              backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 2px, transparent 0, transparent 50%)`,
              backgroundSize: '20px 20px',
              opacity: 0.15,
              flexShrink: 0,
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
