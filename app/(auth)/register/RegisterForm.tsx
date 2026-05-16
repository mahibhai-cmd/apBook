'use client';
import { useState } from 'react';
import Link from 'next/link';

const WHATSAPP = 'https://wa.me/94740968614';
const TELEGRAM = 'https://t.me/APBOOKORIGINAL';

export default function RegisterForm() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [showCustomId, setShowCustomId] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [showReferCode, setShowReferCode] = useState(false);
  const [referCode, setReferCode] = useState('');
  const [error, setError] = useState('');

  const handleGetOtp = () => {
    if (!phone || phone.length !== 10) { setError('Enter a valid 10-digit mobile number.'); return; }
    setError('');
    setOtpSent(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) { setError('Mobile number is required.'); return; }
    if (!otp) { setError('OTP is required.'); return; }
    if (!password) { setError('Password is required.'); return; }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return; }
    setError('');
  };

  return (
    <>
      {/* ── Auth Header ── */}
      <header className="head-nav">
        <div className="container">
          <div className="main-nav">
            <Link className="navbar-brand" href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="APBook" className="logo-fluid" />
            </Link>
            <div className="header-nav">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="header-sec-contant">
                  <div className="collapse navbar-collapse nev-list">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link" href="/">Home</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="nev-but">
                <form className="d-flex">
                  <div className="log-in">
                    <Link className="btn btn-join-now signUpBtn" href="/register">Register</Link>
                    <Link className="btn btn-log-in" href="/login">Log In</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <section className="login-account">
        <div className="container-fluid">
          <div className="row">

            {/* LEFT: Form */}
            <div className="col-sm-12 col-md-6 col-lg-6 overflow-auto">
              <div className="forget-login">
                <div className="login-now">
                  <h3 className="login-form">Register</h3>

                  <form id="registerForm" onSubmit={handleSubmit}>
                    {error && (
                      <div className="toster-wrapper">
                        <div className="toster-wrap error-tost">
                          <div className="toster-content">{error}</div>
                        </div>
                      </div>
                    )}

                    {/* Phone number */}
                    <div className="number-var mb-2 mb-sm-3">
                      <div className="get-mob">
                        <div className="country-select-card">
                          <div className="flex_box country-icon">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://flagcdn.com/in.svg" alt="IN" style={{ width: 20, height: 14 }} />
                            <span>+91</span>
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                        <div className="whatsup-sec" style={{ flex: 1 }}>
                          <div className="input-left mak-gin mb-0">
                            <input
                              type="text"
                              maxLength={10}
                              placeholder="Enter Mobile Number *"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                              className="form-control pl-100"
                              disabled={otpSent}
                            />
                            <button
                              type="button"
                              className="btn cmn-bdr-btn get_otp_btn1"
                              onClick={handleGetOtp}
                            >
                              {otpSent ? 'Resend OTP' : 'Get OTP'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* OTP field */}
                    {otpSent && (
                      <div className="otp_sec mak-gin">
                        <span className="user_icon3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/lp-images/auth/key.png" alt="otp" width={18} height={18} />
                        </span>
                        <div className="resend-otp">
                          <input
                            type="text"
                            maxLength={6}
                            placeholder="Enter OTP*"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                            className="form-control input-boxes"
                          />
                        </div>
                      </div>
                    )}

                    {/* Want to set User ID */}
                    {!showCustomId && (
                      <p
                        className="text-end text-decoration-underline black-color"
                        style={{ cursor: 'pointer', marginBottom: '12px' }}
                        onClick={() => setShowCustomId(true)}
                      >
                        Want To Set User ID?
                      </p>
                    )}
                    {showCustomId && (
                      <div className="mak-gin">
                        <div className="input-left" id="username">
                          <input
                            type="text"
                            placeholder="Enter User ID"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className="form-control"
                            maxLength={25}
                          />
                          <div className="user_icon1">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/lp-images/auth/id-user.png" alt="user" width={20} height={20} />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Password */}
                    <div className="mak-gin">
                      <span className="user_icon3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/lp-images/auth/password.png" alt="password" width={18} height={18} />
                      </span>
                      <input
                        type={showPass ? 'text' : 'password'}
                        placeholder="Enter Password*"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control toggle-password"
                        maxLength={20}
                      />
                      <span className="password-show-hide" onClick={() => setShowPass(v => !v)} style={{ cursor: 'pointer' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={showPass ? '/lp-images/auth/show-pass.webp' : '/lp-images/auth/hidden.png'}
                          alt="toggle"
                          className="show-hide-icon"
                        />
                      </span>
                    </div>

                    {/* Confirm Password */}
                    <div className="mak-gin">
                      <span className="user_icon3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/lp-images/auth/password.png" alt="password" width={18} height={18} />
                      </span>
                      <input
                        type={showConfirmPass ? 'text' : 'password'}
                        placeholder="Enter Confirm Password*"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="form-control toggle-password"
                        maxLength={20}
                      />
                      <span className="password-show-hide" onClick={() => setShowConfirmPass(v => !v)} style={{ cursor: 'pointer' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={showConfirmPass ? '/lp-images/auth/show-pass.webp' : '/lp-images/auth/hidden.png'}
                          alt="toggle"
                          className="show-hide-icon"
                        />
                      </span>
                    </div>

                    {/* Refer code */}
                    {!showReferCode && (
                      <p
                        className="text-end text-decoration-underline black-color"
                        style={{ cursor: 'pointer', marginBottom: '12px' }}
                        onClick={() => setShowReferCode(true)}
                      >
                        Have a Referral Code?
                      </p>
                    )}
                    {showReferCode && (
                      <div className="mak-gin">
                        <div className="input-left">
                          <input
                            type="text"
                            placeholder="Enter Refer Code (optional)"
                            value={referCode}
                            onChange={(e) => setReferCode(e.target.value)}
                            className="form-control"
                          />
                          <div className="user_icon1">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/lp-images/auth/referal.png" alt="referral" width={20} height={20} />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="login_btn_sec">
                      <button type="submit" className="btn btn-tr-in w-100" id="registerBtn">
                        Register
                      </button>
                    </div>
                  </form>

                  {/* WhatsApp */}
                  <div>
                    <p className="mt-2 mt-sm-3 mb-1">Get your ready-made ID from whatsapp</p>
                    <div className="whatsapp-btn">
                      <a className="btn thm-but" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/lp-images/auth/whatsApp-icon.svg" alt="whatsapp" />
                        <span className="blinking">Whatsapp Now</span>
                      </a>
                    </div>
                  </div>

                  {/* Social logins */}
                  <div className="login-with">
                    <div className="form-line"></div>
                    <span>or register with</span>
                    <div className="form-line"></div>
                  </div>
                  <div className="social_logins">
                    <div className="social_logins-li">
                      <a href={TELEGRAM} target="_blank" rel="noopener noreferrer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/lp-images/auth/telegram.png" alt="Telegram" />
                      </a>
                    </div>
                  </div>

                  <p className="forpass-in pb-0">
                    Already have an account?{' '}
                    <Link href="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Casino image */}
            <div
              className="col-sm-12 col-md-6 col-lg-6 right-side-img"
              style={{ backgroundImage: "url('/lp-images/auth/signup-right-img.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* ── Auth Footer ── */}
      <footer className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-9">
              <Link className="navbar-brand" href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="APBook" className="logo-fluid" />
              </Link>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <div className="footer-nav">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="header-sec-contant">
                    <div className="col-in">
                      <ul className="navbar-nav m-auto mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link" href="/">Home</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
