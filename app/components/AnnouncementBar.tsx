'use client';

export default function AnnouncementBar({ message = 'Welcome to APBook – India\'s Most Trusted Betting Exchange! Get the best odds & instant withdrawals.' }) {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #054146, #0a626a)',
        color: '#fff',
        padding: '8px 0',
        overflow: 'hidden',
        borderBottom: '1px solid #12bcca',
      }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marquee 25s linear infinite',
        }}
      >
        <span style={{ fontSize: '13px', paddingRight: '80px' }}>📢 {message}</span>
        <span style={{ fontSize: '13px', paddingRight: '80px' }}>📢 {message}</span>
      </div>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
