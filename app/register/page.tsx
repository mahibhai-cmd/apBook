'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export default function RegisterPage() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [username, setUsername] = useState('');
  const [showCustomId, setShowCustomId] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
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
    if (!password || password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    if (password !== confirmPass) { setError('Passwords do not match.'); return; }
    setError('');
    alert('Registration submitted');
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-left-sec">
        <div className="login-logo">
          <Link href="/">
            <Image src="/logo.png" alt="APBook" width={130} height={45} />
          </Link>
        </div>

        <div className="login-form-container">
          <h1 className="login-title">Register</h1>

          <form onSubmit={handleSubmit}>
            {/* Phone */}
            <div className="input-group-flag">
              <div className="flag-prefix">
                <Image src="https://flagcdn.com/w20/in.png" alt="IN" width={20} height={14} unoptimized />
                <span>+91</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <input
                type="tel"
                maxLength={10}
                placeholder="Enter Mobile Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="form-control login-input"
                style={{ flex: 1 }}
              />
              <button
                type="button"
                className="btn otp-inline-btn"
                onClick={handleGetOtp}
              >
                {otpSent ? 'Resend OTP' : 'Get OTP'}
              </button>
            </div>

            {/* Custom ID toggle */}
            <div style={{ textAlign: 'right', marginBottom: '12px' }}>
              <button
                type="button"
                className="link-btn"
                onClick={() => setShowCustomId((v) => !v)}
              >
                {showCustomId ? 'Hide User ID' : 'Want To Set User ID?'}
              </button>
            </div>

            {showCustomId && (
              <div className="input-icon-wrap">
                <i className="fa-solid fa-user input-icon" />
                <input
                  type="text"
                  placeholder="Enter Custom User ID"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control login-input"
                />
              </div>
            )}

            {/* OTP */}
            <div className="input-icon-wrap">
              <i className="fa-solid fa-key input-icon" />
              <input
                type="text"
                maxLength={6}
                placeholder="Enter OTP *"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="form-control login-input"
              />
            </div>

            {/* Password */}
            <div className="input-icon-wrap" style={{ position: 'relative' }}>
              <i className="fa-solid fa-lock input-icon" />
              <input
                type={showPass ? 'text' : 'password'}
                minLength={8}
                maxLength={20}
                placeholder="Enter Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control login-input"
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPass((v) => !v)}
                aria-label={showPass ? 'Hide' : 'Show'}
              >
                <i className={`fa-solid ${showPass ? 'fa-eye' : 'fa-eye-slash'}`} />
              </button>
            </div>

            {/* Confirm Password */}
            <div className="input-icon-wrap">
              <i className="fa-solid fa-lock input-icon" />
              <input
                type="password"
                minLength={8}
                maxLength={20}
                placeholder="Confirm Password *"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className="form-control login-input"
              />
            </div>

            {error && <p className="error-msg">{error}</p>}

            <button type="submit" className="btn login-btn" style={{ width: '100%', marginTop: '8px' }}>
              Register
            </button>
          </form>

          <p className="whatsapp-hint">Get your ready-made ID from WhatsApp</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn whatsapp-btn"
          >
            <i className="fa-brands fa-whatsapp" />
            Whatsapp Now
          </a>

          <div className="or-divider"><span>or register with</span></div>

          <div className="social-login">
            <a href="https://t.me/apbook" target="_blank" rel="noopener noreferrer" className="telegram-icon">
              <i className="fa-brands fa-telegram" />
            </a>
          </div>

          <p className="register-link">
            Already have an account?{' '}
            <Link href="/login">Login</Link>
          </p>
        </div>
      </div>

      <div
        className="login-right-sec"
        style={{ backgroundImage: 'url(/image_38.webp)' }}
        aria-hidden="true"
      />
    </div>
  );
}
