'use client';
import { useState } from 'react';
import Link from 'next/link';

const WHATSAPP = 'https://wa.me/94740968614';
const TELEGRAM = 'https://t.me/APBOOKORIGINAL';

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<'phone' | 'userid'>('phone');
  const [authMethod, setAuthMethod] = useState<'password' | 'otp'>('password');
  const [phone, setPhone] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginMethod === 'phone' && !phone) { setError('Please enter mobile number.'); return; }
    if (loginMethod === 'userid' && !userId) { setError('Please enter user ID.'); return; }
    if (authMethod === 'password' && !password) { setError('Please enter password.'); return; }
    if (authMethod === 'otp' && !otp) { setError('Please enter OTP.'); return; }
    setError('');
  };

  return (
    <>
      {/* ── Auth Header ── */}
      <header className="head-nav">
        <div className="container">
          <div className="main-nav">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Link className="navbar-brand" href="/">
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
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="forget-login">
                <div className="login-now">
                  <h3 className="login-form">login</h3>

                  <form id="login" onSubmit={handleSubmit}>
                    {error && (
                      <div className="toster-wrapper">
                        <div className="toster-wrap error-tost">
                          <div className="toster-content">{error}</div>
                        </div>
                      </div>
                    )}

                    {/* Phone / UserID tabs */}
                    <div className="mak-gin text-danger">
                      <div className="login_tabs_sec">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link${loginMethod === 'phone' ? ' active' : ''}`}
                              type="button"
                              onClick={() => { setLoginMethod('phone'); setError(''); }}
                            >Mobile Number</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className={`nav-link${loginMethod === 'userid' ? ' active' : ''}`}
                              type="button"
                              onClick={() => { setLoginMethod('userid'); setError(''); }}
                            >User ID</button>
                          </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">
                          {/* Phone tab */}
                          {loginMethod === 'phone' && (
                            <div className="tab-pane fade active show">
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
                                  <input
                                    type="text"
                                    maxLength={10}
                                    placeholder="Enter Mobile Number*"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                    className="form-control field-border pl-100"
                                  />
                                </div>
                              </div>

                              {/* Password / OTP toggle */}
                              <div className="flex-between-data" id="password-type">
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="login-option"
                                    checked={authMethod === 'password'} onChange={() => setAuthMethod('password')} id="password-login" />
                                  <label className="form-check-label" htmlFor="password-login">Password</label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="login-option"
                                    checked={authMethod === 'otp'} onChange={() => setAuthMethod('otp')} id="otp-login" />
                                  <label className="form-check-label" htmlFor="otp-login">OTP</label>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* User ID tab */}
                          {loginMethod === 'userid' && (
                            <div className="tab-pane fade active show">
                              <div className="user_input_field_sec">
                                <div className="input-left" id="username">
                                  <input
                                    type="text"
                                    placeholder="Enter User ID*"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="form-control"
                                  />
                                  <div className="user_icon1">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="/lp-images/auth/id-user.png" alt="user" width={20} height={20} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Password + OTP fields share one mak-gin */}
                    <div className="mak-gin">
                      {/* Password Field */}
                      {authMethod === 'password' && (
                        <div id="login-password">
                          <span className="user_icon3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/lp-images/auth/password.png" alt="password" width={18} height={18} />
                          </span>
                          <input
                            type={showPass ? 'text' : 'password'}
                            placeholder="Enter Password*"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
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
                      )}

                      {/* OTP Field */}
                      {authMethod === 'otp' && loginMethod === 'phone' && (
                        <div id="login-otp">
                          <span className="user_icon3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/lp-images/auth/key.png" alt="otp" width={18} height={18} />
                          </span>
                          <input
                            type="text"
                            maxLength={6}
                            placeholder="Enter OTP*"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                            className="form-control"
                          />
                          <button type="button" className="btn cmn-bdr-btn get_otp_btn1">Get OTP</button>
                        </div>
                      )}
                    </div>

                    {/* Forgot Password */}
                    <div className="mak-gin form-check cheak-flex">
                      <div className="cheak" />
                      <div className="forpass" id="forgotPassBtn">
                        <a href="#">
                          <p>Forgot Password?</p>
                        </a>
                      </div>
                    </div>

                    {/* Login buttons */}
                    <div className="login_btn_sec">
                      <button type="button" className="w-50 btn btn-tr-in">Demo Log In</button>
                      <button type="submit" className="btn btn-tr-in w-50">Login</button>
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
                    <span>or login with</span>
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
                    Don&apos;t have an account?{' '}
                    <Link href="/register">Register</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Casino image */}
            <div
              className="col-sm-12 col-md-6 col-lg-6 right-side-img"
              style={{ backgroundImage: "url('/lp-images/auth/login-right-img.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* ── Auth Footer ── */}
      <footer className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-9">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Link className="navbar-brand" href="/">
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
