'use client';
import { useState } from 'react';

interface Props {
  show: boolean;
  onClose: () => void;
  onConfirm: (password: string) => void;
}

export default function WithdrawPasswordModal({ show, onClose, onConfirm }: Props) {
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');

  if (!show) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!password) { setError('Please enter your withdraw password.'); return; }
    onConfirm(password);
    setPassword('');
  };

  const handleClose = () => {
    setPassword('');
    setError('');
    onClose();
  };

  return (
    <>
      <div
        className="modal fade show wdraw-pass-modal"
        style={{ display: 'block' }}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="thm-heading">
                <h3>Withdraw Password</h3>
              </div>
              <button type="button" className="wdraw-pass-close" onClick={handleClose} aria-label="Close">
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="modal-body">
              <p className="wdraw-pass-info">
                Enter your withdrawal password to proceed securely.
              </p>
              {error && <div className="wdraw-pass-error">{error}</div>}
              <form className="withdraw_password_content" onSubmit={handleSubmit}>
                <div className="cmn_withdraw_cl position-relative">
                  <div className="input-relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/img/input-password.af2a574a.svg"
                      alt="input-password"
                      className="input-icn-img"
                    />
                    <input
                      type={showPass ? 'text' : 'password'}
                      placeholder="Enter Withdraw Password*"
                      className="form-control profit-input"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      autoComplete="off"
                    />
                    <i
                      className={`fas togglePassword ${showPass ? 'fa-eye' : 'fa-eye-slash'}`}
                      onClick={() => setShowPass(v => !v)}
                    />
                  </div>
                </div>
                <button type="submit" className="btn_submit_cl">Confirm Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={handleClose} />
    </>
  );
}
