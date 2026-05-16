import Link from "next/link";

export default function Login() {
  return (
    <div className="login-wrapper" style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#e9e9f0' }}>
      <div className="login-left" style={{ flex: 1, padding: '40px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '40px' }}>
          <Link href="/">
            <div style={{ backgroundColor: '#474799', padding: '10px 20px', display: 'inline-block', borderRadius: '4px' }}>
              <img src="/logo.png" alt="APBook" style={{ height: '30px' }} />
            </div>
          </Link>
        </div>

        <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%' }}>
          <h1 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', color: '#000' }}>Login</h1>
          
          <div style={{ display: 'flex', marginBottom: '20px', borderRadius: '4px', overflow: 'hidden' }}>
            <button style={{ flex: 1, padding: '12px', backgroundColor: '#474799', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Mobile Number</button>
            <button style={{ flex: 1, padding: '12px', backgroundColor: '#f0f0f0', color: '#666', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>User ID</button>
          </div>

          <div style={{ display: 'flex', marginBottom: '15px', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #ddd' }}>
            <div style={{ padding: '12px 15px', borderRight: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <img src="https://flagcdn.com/w20/in.png" alt="IN" style={{ width: '20px' }} />
              <span>+91</span>
              <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }}></i>
            </div>
            <input type="text" placeholder="Enter Mobile Number*" style={{ flex: 1, padding: '12px', border: 'none', outline: 'none' }} />
          </div>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '15px', fontSize: '14px', color: '#000' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
              <input type="radio" name="authType" defaultChecked style={{ accentColor: '#000' }} /> Password
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
              <input type="radio" name="authType" style={{ accentColor: '#000' }} /> OTP
            </label>
          </div>

          <div style={{ position: 'relative', marginBottom: '10px' }}>
            <i className="fa-solid fa-lock" style={{ position: 'absolute', left: '15px', top: '15px', color: '#999' }}></i>
            <input type="password" placeholder="Enter Password*" style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #ddd', borderRadius: '4px', outline: 'none' }} />
            <i className="fa-solid fa-eye-slash" style={{ position: 'absolute', right: '15px', top: '15px', color: '#999', cursor: 'pointer' }}></i>
          </div>

          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <a href="#" style={{ color: '#474799', fontSize: '12px', textDecoration: 'none' }}>Forgot Password?</a>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button style={{ flex: 1, padding: '12px', backgroundColor: '#ffba00', color: '#000', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Demo Log In</button>
            <button style={{ flex: 1, padding: '12px', backgroundColor: '#ffba00', color: '#000', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>Get your ready-made ID from whatsapp</p>
            <button style={{ width: '100%', padding: '12px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }}></i> Whatsapp Now
            </button>
          </div>

          <div style={{ textAlign: 'center', position: 'relative', marginBottom: '20px' }}>
            <hr style={{ border: 'none', borderTop: '1px solid #ddd' }} />
            <span style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#e9e9f0', padding: '0 10px', fontSize: '12px', color: '#666' }}>or login with</span>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#0088cc', borderRadius: '50%', color: '#fff', fontSize: '20px', textDecoration: 'none' }}>
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>

          <div style={{ textAlign: 'center', fontSize: '14px', color: '#000' }}>
            Don't have an account? <Link href="/register" style={{ color: '#474799', textDecoration: 'none', fontWeight: 'bold' }}>Register</Link>
          </div>
        </div>
      </div>
      
      <div className="login-right" style={{ flex: 1, backgroundImage: 'url(/login-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
    </div>
  );
}
