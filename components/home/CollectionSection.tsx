'use client';

const products = [
  {
    id: 1,
    name: 'グレイシア',
    nameEn: 'Glacia',
    category: 'SIGNATURE',
    desc: '苺とホワイトチョコの雪のような口どけ',
    img: 'https://readdy.ai/api/search-image?query=elegant%20Japanese%20strawberry%20white%20chocolate%20confectionery%20gift%20box%2C%20delicate%20white%20packaging%20with%20red%20ribbon%2C%20luxury%20premium%20sweets%2C%20pure%20white%20background%2C%20soft%20natural%20light%2C%20beautiful%20presentation%2C%20no%20text%2C%20no%20people&width=400&height=520&seq=coll_audrey_01&orientation=portrait',
  },
  {
    id: 2,
    name: 'フルーレット',
    nameEn: 'Fleurette',
    category: 'FLOWER COLLECTION',
    desc: '花束のように美しい、苺のフィナンシェ',
    img: 'https://readdy.ai/api/search-image?query=Japanese%20flower%20shaped%20strawberry%20financier%20cookies%20elegant%20gift%20box%2C%20mint%20green%20and%20white%20packaging%2C%20luxury%20confectionery%2C%20soft%20natural%20light%2C%20premium%20sweets%20photography%2C%20clean%20white%20background%2C%20no%20text%2C%20no%20people&width=400&height=520&seq=coll_audrey_02&orientation=portrait',
  },
  {
    id: 3,
    name: 'ルビーショコラ',
    nameEn: 'Ruby Chocolat',
    category: 'CHOCOLATE',
    desc: 'ルビーチョコと苺の宝石のような輝き',
    img: 'https://readdy.ai/api/search-image?query=ruby%20chocolate%20strawberry%20bonbons%20luxury%20gift%20box%2C%20elegant%20red%20and%20white%20packaging%2C%20premium%20Japanese%20confectionery%2C%20beautiful%20presentation%2C%20soft%20warm%20light%2C%20clean%20white%20background%2C%20no%20text%2C%20no%20people&width=400&height=520&seq=coll_audrey_03&orientation=portrait',
  },
  {
    id: 4,
    name: 'ブーケサブレ',
    nameEn: 'Bouquet Sablé',
    category: 'SABLÉ',
    desc: '小さな花束を模した、繊細なサブレ',
    img: 'https://readdy.ai/api/search-image?query=delicate%20flower%20shaped%20sable%20cookies%20bouquet%20arrangement%2C%20Japanese%20luxury%20confectionery%2C%20elegant%20white%20packaging%20with%20ribbon%2C%20premium%20gift%20sweets%2C%20soft%20light%2C%20clean%20white%20background%2C%20no%20text%2C%20no%20people&width=400&height=520&seq=coll_audrey_04&orientation=portrait',
  },
  {
    id: 5,
    name: 'フレーズノワール',
    nameEn: 'Fraise Noire',
    category: 'PREMIUM',
    desc: '黒いチョコと苺の大人の甘酸っぱさ',
    img: 'https://readdy.ai/api/search-image?query=dark%20chocolate%20strawberry%20luxury%20Japanese%20confectionery%2C%20elegant%20black%20and%20red%20packaging%2C%20premium%20gift%20box%2C%20sophisticated%20sweets%20photography%2C%20clean%20minimal%20white%20background%2C%20no%20text%2C%20no%20people&width=400&height=520&seq=coll_audrey_05&orientation=portrait',
  },
];

export default function CollectionSection() {
  return (
    <section id="collection" style={{ width: '100%', padding: '160px 0', background: '#FAF8F5', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '80px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '10px', letterSpacing: '0.4em', color: '#8B8B8B' }}>
              SWEET COLLECTION
            </span>
            <h2 style={{ fontFamily: '"Futura Std", "Futura", "Helvetica Neue", Arial, sans-serif', fontWeight: 500, fontSize: '48px', letterSpacing: '0.05em', color: '#000000', lineHeight: 1.2, margin: 0 }}>
              Sweet Collection
            </h2>
            <p style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '18px', color: '#1A1A1A', margin: 0, lineHeight: 1.9 }}>
              オードリーの愛らしいスイーツたち
            </p>
          </div>
          <a
            href="https://audrey-web.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#1A1A1A',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.3s',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#CD0F2D')}
            onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
          >
            VIEW ALL
            <i className="ri-arrow-right-line" style={{ fontSize: '14px' }}></i>
          </a>
        </div>

        <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '8px' }} className="scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              style={{ flexShrink: 0, width: '260px', background: '#FFFFFF', cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', height: '320px', overflow: 'hidden', background: '#FAF8F5' }}>
                <img
                  src={product.img}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.7s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '9px', letterSpacing: '0.25em', color: '#8B8B8B' }}>
                  {product.category}
                </span>
                <h3 style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '18px', color: '#1A1A1A', margin: '8px 0 6px', fontWeight: 500 }}>
                  {product.name}
                </h3>
                <p style={{ fontFamily: '"Yu Gothic Medium", YuGothic, sans-serif', fontSize: '13px', color: '#8B8B8B', margin: 0, lineHeight: 1.9, letterSpacing: '0.05em' }}>
                  {product.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(139, 139, 139, 0.15)' }}>
                  <div style={{ width: '16px', height: '1px', background: '#CD0F2D' }} />
                  <span style={{ fontFamily: '"Futura Std", Futura, "Century Gothic", sans-serif', fontWeight: 500, fontSize: '10px', letterSpacing: '0.15em', color: '#CD0F2D' }}>
                    {product.nameEn}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
          {products.map((_, i) => (
            <div
              key={i}
              style={{ height: '1px', width: i === 0 ? '32px' : '16px', background: i === 0 ? '#CD0F2D' : 'rgba(139, 139, 139, 0.25)', transition: 'all 0.3s' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
