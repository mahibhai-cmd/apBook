'use client';
import { useState } from 'react';

interface Props {
  show: boolean;
  onClose: () => void;
}

export default function ChangePasswordModal({ show, onClose }: Props) {
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!show) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!currentPass) { setError('Please enter your current password.'); return; }
    if (!newPass || newPass.length < 8) { setError('New password must be at least 8 characters.'); return; }
    if (newPass !== confirmPass) { setError('New passwords do not match.'); return; }
    setSuccess('Password changed successfully.');
    setCurrentPass(''); setNewPass(''); setConfirmPass('');
  };

  return (
    <>
      <div className="modal fade show chng-pass-modal" style={{ display: 'block' }} tabIndex={-1} aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="thm-heading">
                <h3>Change password</h3>
              </div>
              <button type="button" className="chng-pass-close" onClick={onClose} aria-label="Close">
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="modal-body">
              {error && <div className="chng-pass-error">{error}</div>}
              {success && <div className="chng-pass-success">{success}</div>}
              <form className="withdraw_password_content" onSubmit={handleSubmit}>
                <div className="cmn_withdraw_cl position-relative">
                  <div className="input-relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/input-password.af2a574a.svg" alt="input-password" className="input-icn-img" />
                    <input
                      type={showCurrent ? 'text' : 'password'}
                      placeholder="Enter Current Password*"
                      className="form-control profit-input"
                      value={currentPass}
                      onChange={e => setCurrentPass(e.target.value)}
                    />
                    <i
                      className={`fas togglePassword ${showCurrent ? 'fa-eye' : 'fa-eye-slash'}`}
                      onClick={() => setShowCurrent(v => !v)}
                    />
                  </div>
                </div>
                <div className="cmn_withdraw_cl position-relative">
                  <div className="input-relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/input-password.af2a574a.svg" alt="input-password" className="input-icn-img" />
                    <input
                      type={showNew ? 'text' : 'password'}
                      minLength={8}
                      maxLength={20}
                      required
                      autoComplete="off"
                      placeholder="Enter New Password*"
                      className="form-control profit-input"
                      value={newPass}
                      onChange={e => setNewPass(e.target.value)}
                    />
                    <i
                      className={`fas togglePassword ${showNew ? 'fa-eye' : 'fa-eye-slash'}`}
                      onClick={() => setShowNew(v => !v)}
                    />
                  </div>
                </div>
                <div className="cmn_withdraw_cl position-relative">
                  <div className="input-relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/input-password.af2a574a.svg" alt="input-password" className="input-icn-img" />
                    <input
                      type={showConfirm ? 'text' : 'password'}
                      className="form-control profit-input"
                      placeholder="Enter Confirm New Password"
                      required
                      autoComplete="off"
                      minLength={8}
                      maxLength={20}
                      value={confirmPass}
                      onChange={e => setConfirmPass(e.target.value)}
                    />
                    <i
                      className={`fas togglePassword ${showConfirm ? 'fa-eye' : 'fa-eye-slash'}`}
                      onClick={() => setShowConfirm(v => !v)}
                    />
                  </div>
                </div>
                <button type="submit" className="btn_submit_cl">Change Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose} />
    </>
  );
}
