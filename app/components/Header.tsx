'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <section className="header-wapper-main">
      <header className="header-section-fixed">
        <div className="container">
          <div className="navbar-sec">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="head-nav-sec">
                <Link className="navbar-brand" href="/">
                  <figure className="logo-sec">
                    <Image
                      src="/logo.png"
                      alt="APBook"
                      width={130}
                      height={46}
                      className="logo"
                      priority
                      style={{ objectFit: 'contain', height: '46px', width: 'auto' }}
                    />
                  </figure>
                </Link>

                <form className="d-flex cmn-btn123 align-items-center">
                  <div>
                    <Link href="/login">Login</Link>
                  </div>
                  <div className="signUpBtn">
                    <Link href="/register">Register</Link>
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </section>
  );
}
