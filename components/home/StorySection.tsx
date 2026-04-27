'use client';

export default function StorySection() {
  return (
    <section id="story" style={{ width: '100%', padding: '160px 0', background: '#FFFFFF', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '96px' }}>

          <div style={{ width: '44%', flexShrink: 0, position: 'relative' }}>
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4', borderRadius: '0' }}>
              <img
                src="https://readdy.ai/api/search-image?query=elegant%20Japanese%20luxury%20confectionery%20brand%20story%20visual%2C%20beautiful%20strawberry%20sweets%20bouquet%20arrangement%2C%20white%20and%20red%20tones%2C%20delicate%20flowers%2C%20premium%20gift%20packaging%20with%20red%20ribbon%2C%20warm%20natural%20light%2C%20dreamy%20romantic%20atmosphere%2C%20clean%20white%20background%2C%20no%20people%2C%20editorial%20style&width=600&height=800&seq=story_audrey_01&orientation=portrait"
                alt="Brand Story"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>

            <div style={{ position: 'absolute', bottom: '-24px', right: '-24px', width: '180px', height: '180px', overflow: 'hidden', border: '4px solid #FFFFFF', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
              <img
                src="https://readdy.ai/api/search-image?query=close%20up%20fresh%20vivid%20red%20strawberries%20with%20white%20chocolate%20drizzle%20on%20pure%20white%20background%2C%20luxury%20Japanese%20confectionery%20detail%2C%20macro%20photography%2C%20elegant%20food%20styling%2C%20premium%20dessert%2C%20no%20text&width=200&height=200&seq=story_audrey_02&orientation=squarish"
                alt="Strawberry detail"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>

            <div style={{ position: 'absolute', top: '24px', left: '-16px', background: '#FFFFFF', padding: '8px 20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(139, 139, 139, 0.15)' }}>
              <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '10px', letterSpacing: '0.25em', color: '#CD0F2D' }}>
                EST. 2009
              </span>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '48px', paddingTop: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '10px', letterSpacing: '0.4em', color: '#8B8B8B' }}>
                BRAND STORY
              </span>
              <h2 style={{ fontFamily: '"Futura Std", "Futura", "Helvetica Neue", Arial, sans-serif', fontWeight: 500, fontSize: '48px', letterSpacing: '0.05em', color: '#000000', lineHeight: 1.2, margin: 0 }}>
                The Story of<br />
                <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Audrey</span>
              </h2>
              <div style={{ width: '48px', height: '1px', background: '#CD0F2D', marginTop: '8px' }} />
            </div>

            <div style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '16px', color: '#1A1A1A', lineHeight: 1.95, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ margin: 0 }}>苺が大好きな女の子、オードリー。</p>
              <p style={{ margin: 0 }}>
                彼女はいつも、周りの人を甘酸っぱいスイーツで笑顔にしたいと願っています。
                記念日の花束のように、小さなブーケのように、
                キラキラした宝石のような愛らしいスイーツを、
                大切な人へ届けたい。
              </p>
              <p style={{ margin: 0 }}>
                そんなオードリーの想いから生まれたのが、このブランドです。
                洗練された愛らしさと、甘酸っぱい幸せを、
                あなたの大切な瞬間に添えて。
              </p>
            </div>

            <div style={{
              background: '#000000',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
                backgroundSize: '16px 16px',
                opacity: 0.04,
              }} />
              <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontSize: '9px', letterSpacing: '0.35em', color: '#8B8B8B' }}>
                BRAND MESSAGE
              </span>
              <p style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 300, fontSize: '28px', letterSpacing: '0.1em', color: '#FFFFFF', margin: 0, fontStyle: 'italic' }}>
                "With All My Love"
              </p>
              <p style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.95, margin: 0 }}>
                愛を込めて、あなたへ。<br />
                オードリーのスイーツは、贈る人の想いと<br />
                受け取る人の笑顔をつなぐ、甘い架け橋です。
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '8px' }}>
                <div style={{ width: '32px', height: '1px', background: '#64B9AF' }} />
                <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontSize: '9px', letterSpacing: '0.25em', color: '#64B9AF' }}>
                  PLAISIR CO., LTD.
                </span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { icon: 'ri-heart-line', label: '愛らしさ', sub: 'Adorable' },
                { icon: 'ri-sparkling-line', label: 'キラキラ', sub: 'Sparkling' },
                { icon: 'ri-gift-line', label: 'ギフト', sub: 'Gift' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '24px 16px', border: '1px solid rgba(139, 139, 139, 0.15)', transition: 'border-color 0.3s', cursor: 'default' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#CD0F2D')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(139, 139, 139, 0.15)')}
                >
                  <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CD0F2D' }}>
                    <i className={item.icon} style={{ fontSize: '20px' }}></i>
                  </div>
                  <span style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '14px', color: '#1A1A1A' }}>{item.label}</span>
                  <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontSize: '9px', letterSpacing: '0.2em', color: '#8B8B8B' }}>{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
