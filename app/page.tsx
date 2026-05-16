export default function Home() {
  return (
    <>
      <noscript>
        <strong>We're sorry but click doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
      </noscript>
      <iframe
        id="landingPageIframe"
        src="https://landingpage.apbook.in/T1/index.html?v=20849"
        seamless
        allowFullScreen
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', border: 'none', zIndex: 1 }}
      ></iframe>

      <div className="modal fade history-filter-modal forgetwithdrawModal-cl" id="ChangeAndWithdrawPassword" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-keyboard="false">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="thm-heading">
                <h3>Change password</h3>
              </div>
            </div>
            <div className="modal-body">
              <form className="withdraw_password_content">
                <div className="cmn_withdraw_cl position-relative">
                  <div className="input-relative">
                    <img src="/img/input-password.af2a574a.svg" alt="input-password" className="input-icn-img" />
                    <input type="password" placeholder="Enter Current Password*" className="form-control profit-input" />
                    <i className="fas togglePassword fa-eye-slash"></i>
                  </div>
                </div>
                <div className="cmn_withdraw_cl position-relative">
                  <div className="input-relative">
                    <img src="/img/input-password.af2a574a.svg" alt="input-password" className="input-icn-img" />
                    <input type="password" minLength={8} maxLength={20} required autoComplete="off" placeholder="Enter New Password*" className="form-control profit-input" />
                    <i className="fas togglePassword fa-eye-slash"></i>
                  </div>
                </div>
                <div className="cmn_withdraw_cl position-relative">
                  <div className="input-relative">
                    <img src="/img/input-password.af2a574a.svg" alt="input-password" className="input-icn-img" />
                    <input type="password" className="form-control profit-input" placeholder="Enter Confirm New Password" required autoComplete="off" minLength={8} maxLength={20} />
                    <i className="fas togglePassword fa-eye-slash"></i>
                  </div>
                </div>
                <div className="cmn_withdraw_cl position-relative">
                  <div className="input-relative">
                    <img src="/img/input-password.af2a574a.svg" alt="input-password" className="input-icn-img" />
                    <input type="password" maxLength={20} className="form-control profit-input" placeholder="Enter Withdraw Password*" />
                    <i className="fas togglePassword fa-eye-slash"></i>
                  </div>
                </div>
                <div className="cmn_withdraw_cl position-relative">
                  <div className="input-relative">
                    <img src="/img/input-password.af2a574a.svg" alt="input-password" className="input-icn-img" />
                    <input type="password" maxLength={20} placeholder="Enter Confirm Withdraw Password*" className="form-control profit-input" />
                    <i className="fas togglePassword fa-eye-slash"></i>
                  </div>
                </div>
                <button type="button" className="btn_submit_cl">Change Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade Betamount" id="userid_Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5>User ID</h5>
              <button type="button" className="btn-close" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="userid-celebration-img">
                <img src="/img/user-id.50b43539.webp" alt="user-id" />
              </div>
              <div className="modal-userid-sec">
                <div className="c_text">
                  <div className="flex_between copy-user-text-sec">
                    <h5 className="payment_op"></h5>
                    <button className="copy_btn" type="button"> Copy </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade androidPoster-modal" id="andriodposter" tabIndex={-1} aria-labelledby="exampleModalLabel" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
            </div>
          </div>
        </div>
      </div>

      <div className="install-apk-model">
        <div className="modal fade" id="install-apk-model" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="thm-heading">
                  <h3>Steps For Downloading Android & iOS App</h3>
                </div>
              </div>
              <div className="modal-body">
                <div className="install-app-content">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Android</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" tabIndex={-1}>iOS</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="how-install-content">
                        <img loading="lazy" src="/img/android-apk-img.f0f94c19.jpg" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div className="how-install-content">
                        <img loading="lazy" src="/img/ios-apk-img.cc46f868.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn close-btn" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
