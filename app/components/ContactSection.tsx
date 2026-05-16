import Image from 'next/image';

/* Real social links from iframe-data.json */
const WHATSAPP = 'https://wa.me/94740968614';
const TELEGRAM = 'https://t.me/APBOOKORIGINAL';

const SOCIALS = [
  { img: '/lp-images/wt1.png',      alt: 'WhatsApp', href: WHATSAPP },
  { img: '/lp-images/telegram.png', alt: 'Telegram', href: TELEGRAM },
];

export default function ContactSection() {
  return (
    <section className="contact-us-sec">
      <div className="container">
        <div className="choose-heading-text">
          <h2>Connect With Us</h2>
        </div>
        <div className="supprt-text">
          <p>
            It is never too late to reach out to our customer support team. We are available at any
            time of the day/night to assist you with any queries.
          </p>
        </div>
        <div className="socail-icons-container">
          <ul className="socail-list-name side-socail">
            {SOCIALS.map(({ img, alt, href }) => (
              <li key={alt}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={alt} width={52} height={52} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
