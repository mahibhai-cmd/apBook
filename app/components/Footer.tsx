'use client';
import Link from 'next/link';

const year = new Date().getFullYear();
const WHATSAPP = 'https://wa.me/94740968614';
const TELEGRAM = 'https://t.me/APBOOKORIGINAL';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">

        {/* 24/7 CS */}
        <div className="footer-group-sec">
          <div className="footer-group-contant cs-me quality-sec">
            <div className="group-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/lp-images/icon-24hr.png" alt="24hr" width={56} height={56} />
            </div>
            <div className="group-content">
              <h4>Online CS</h4>
              <p>Provides 24/7 Quality service</p>
              <a className="contact-us" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Contact CS
              </a>
            </div>
          </div>
        </div>

        {/* Responsible + Payment */}
        <div className="footer-partner-wrapper">
          <div className="partner-sec">
            <div className="row">
              <div className="col-lg-4">
                <div className="partner-content">
                  <p>Responsible Gaming</p>
                  <div className="partner-content-img Responsible-sec">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="partner-img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/lp-images/layouts/safe${n}.svg`} alt={`safe${n}`} width={48} height={48} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 payment-warpper">
                <div className="partner-content payment-methods">
                  <p>Payment Methods</p>
                  <div className="payment-contant partner-content-img Payment-sec">
                    {['UPI', 'PhonePe', 'GPay', 'Paytm', 'IMPS', 'NEFT'].map((m) => (
                      <span key={m} className="payment-label">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* License + Links + Copyright */}
        <div className="footer-partner-wrapper">
          <div className="partner-sec">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-3">
                <div className="footer-logo-sec logo-sec license-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/lp-images/license-logo.png" alt="License" width={100} height={52} />
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-9 justify-content-end">
                <div className="footer-menu">
                  <ul className="know-more">
                    <li><Link href="/about-us">About us</Link></li>
                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                    <li><Link href="/rules">Rules &amp; Regulations</Link></li>
                  </ul>
                </div>
                <div className="copy-right">
                  <div className="partner-content text-end about-heading">
                    <p>
                      &copy;{year}{' '}
                      <span className="text-capitalize">APBook</span>{' '}
                      Copyrights. All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* WhatsApp float */}
      <section className="whatsapp-fix-wrapper">
        <div className="whatsapp-img-con">
          <a href={WHATSAPP} id="footerWhatsupLink" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="whatsapp-imges whatsup" src="/lp-images/whatsapp-img.svg" alt="whatsup" />
            <div className="whatsapp-con">
              <h5 className="blinking">1 click register</h5>
            </div>
          </a>
        </div>
      </section>

      {/* Back to top */}
      <a id="button" className="go-to-top-btn" title="Go to top" href="#" onClick={scrollToTop}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/lp-images/angles-up-solid.svg" alt="" />
      </a>
    </footer>
  );
}
