'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

/* poster_type = 1 banners from the real CDN */
const BANNERS = [
  { src: '/posters/1737477172.jpg', alt: 'APBook – Casino Play to Win' },
  { src: '/posters/1737477278.jpg', alt: 'APBook – Best Odds Sports Betting' },
  { src: '/posters/1737477334.jpg', alt: 'APBook – Live Casino India' },
  { src: '/posters/1737477387.jpg', alt: 'APBook – Instant Withdrawals' },
];

export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setActive((i) => (i + 1) % BANNERS.length), []);

  useEffect(() => {
    timer.current = setInterval(next, 3500);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [next]);

  return (
    <section className="banner-bg header-banner">
      <div
        id="banner-slider"
        className="banner-content"
        style={{ position: 'relative', overflow: 'hidden', lineHeight: 0 }}
      >
        {BANNERS.map((b, i) => (
          <div
            key={i}
            className={`slider-image-sec banner-img item${i === active ? ' active' : ''}`}
            style={{ display: i === active ? 'block' : 'none' }}
          >
            <Image
              src={b.src}
              alt={b.alt}
              width={1440}
              height={540}
              className="main-slider-img d-block w-100"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority={i === 0}
            />
          </div>
        ))}

        {/* Dot indicators */}
        <div className="carousel-dots">
          {BANNERS.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
