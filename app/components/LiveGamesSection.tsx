import Image from 'next/image';
import Link from 'next/link';

/* poster_type = 10 (live casino) from CDN */
const CASINO_GAMES = [
  { src: '/posters/1737831359.jpg', alt: 'Live Casino Game 1' },
  { src: '/posters/1737831434.jpg', alt: 'Live Casino Game 2' },
  { src: '/posters/1737831498.jpg', alt: 'Live Casino Game 3' },
  { src: '/posters/1737831545.jpg', alt: 'Live Casino Game 4' },
];

/* poster_type = 9 (promotion) */
const PROMOS = [
  { src: '/posters/1690009592.png', alt: '1100 Welcome Bonus' },
];

export default function LiveGamesSection() {
  return (
    <section className="live-and-promotions-sec">
      <div className="container">
        <div className="row align-items-start">

          {/* Left: Live Games + New Games */}
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="live-owlupdown-slider row">

              {/* Live Games row */}
              <div className="col-12">
                <div className="live-and-promo-heading">
                  <h3>Live Games</h3>
                </div>
                <div className="live-Casino-contant">
                  <div className="live-games-grid">
                    {CASINO_GAMES.map((g) => (
                      <div key={g.src} className="casino-img live-casino-bx">
                        <Link href="/login">
                          <figure className="Casino-resize live-img">
                            <Image
                              src={g.src}
                              alt={g.alt}
                              width={110}
                              height={110}
                              className="live-casino-image"
                            />
                          </figure>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Promotions */}
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="live-and-promo-sec">
              <div className="live-and-promo-heading live-and-promo-img">
                <h3>Promotion</h3>
              </div>
              <div className="promotion-slider banner-content Free-bonus-sec">
                {PROMOS.map((p) => (
                  <div key={p.src} className="item">
                    <div className="pro-banner-img main-slider-img">
                      <figure>
                        <Image
                          src={p.src}
                          alt={p.alt}
                          width={600}
                          height={400}
                          className="promotion-image w-100"
                          style={{ borderRadius: '10px', width: '100%', height: 'auto' }}
                        />
                      </figure>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
