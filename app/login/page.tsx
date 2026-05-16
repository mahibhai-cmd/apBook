'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    alert('Login submitted');
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-left-sec">
        {/* Logo */}
        <div className="login-logo">
          <Link href="/">
            <Image src="/logo.png" alt="APBook" width={130} height={45} />
          </Link>
        </div>

        <div className="login-form-container">
          <h1 className="login-title">Login</h1>

          {/* Phone / UserID tabs */}
          <div className="login-tab-group">
            <button
              className={`login-tab${loginMethod === 'phone' ? ' active' : ''}`}
              onClick={() => setLoginMethod('phone')}
            >
              Mobile Number
            </button>
            <button
              className={`login-tab${loginMethod === 'userid' ? ' active' : ''}`}
              onClick={() => setLoginMethod('userid')}
            >
              User ID
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Phone input */}
            {loginMethod === 'phone' && (
              <div className="input-group-flag">
                <div className="flag-prefix">
                  <Image src="https://flagcdn.com/w20/in.png" alt="IN" width={20} height={14} unoptimized />
                  <span>+91</span>
                  <i className="fa-solid fa-chevron-down" />
                </div>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="Enter Mobile Number*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="form-control login-input"
                />
              </div>
            )}

            {/* User ID input */}
            {loginMethod === 'userid' && (
              <div className="input-icon-wrap">
                <i className="fa-solid fa-user input-icon" />
                <input
                  type="text"
                  placeholder="Enter User ID*"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="form-control login-input"
                />
              </div>
            )}

            {/* Password / OTP toggle */}
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="auth" checked={authMethod === 'password'} onChange={() => setAuthMethod('password')} />
                Password
              </label>
              <label className="radio-label">
                <input type="radio" name="auth" checked={authMethod === 'otp'} onChange={() => setAuthMethod('otp')} />
                OTP
              </label>
            </div>

            {/* Password field */}
            {authMethod === 'password' && (
              <div className="input-icon-wrap" style={{ position: 'relative' }}>
                <i className="fa-solid fa-lock input-icon" />
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control login-input"
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPass((v) => !v)}
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  <i className={`fa-solid ${showPass ? 'fa-eye' : 'fa-eye-slash'}`} />
                </button>
              </div>
            )}

            {/* OTP field */}
            {authMethod === 'otp' && loginMethod === 'phone' && (
              <div className="otp-group">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="form-control login-input"
                />
                <button type="button" className="btn otp-btn">Get OTP</button>
              </div>
            )}

            <div className="forgot-link">
              <Link href="/forgot-password">Forgot Password?</Link>
            </div>

            {error && <p className="error-msg">{error}</p>}

            <div className="login-btn-group">
              <button type="button" className="btn demo-btn">Demo Log In</button>
              <button type="submit" className="btn login-btn">Login</button>
            </div>
          </form>

          <p className="whatsapp-hint">Get your ready-made ID from whatsapp</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp-btn"
          >
            <i className="fa-brands fa-whatsapp" />
            Whatsapp Now
          </a>

          <div className="or-divider"><span>or login with</span></div>

          <div className="social-login">
            <a href="https://t.me/apbook" target="_blank" rel="noopener noreferrer" className="telegram-icon">
              <i className="fa-brands fa-telegram" />
            </a>
          </div>

          <p className="register-link">
            Don&apos;t have an account?{' '}
            <Link href="/register">Register</Link>
          </p>
        </div>
      </div>

      <div
        className="login-right-sec"
        style={{ backgroundImage: 'url(/image_59.webp)' }}
        aria-hidden="true"
      />
    </div>
  );
}
