import Image from 'next/image';

const STATS = [
  { img: '/lp-images/revenue.c38d0307.png',   label: 'Total Customers',        value: '1M+'    },
  { img: '/lp-images/1st.a4dec475.png',        label: 'Total Active Customers', value: '50000+' },
  { img: '/lp-images/jackpot.506204dd.png',    label: 'Total Games',            value: '700+'   },
];

export default function GameCounterSection() {
  return (
    <section className="game-conter-sec">
      <div className="container">
        <div className="choose-heading-text">
          <h2>Game Counter</h2>
        </div>
        <div className="main-grid-container">
          {STATS.map(({ img, label, value }) => (
            <div key={label} className="grid-sub-container">
              <div className="cmn-container123" style={{ minHeight: '120px', flexDirection: 'row' }}>
                <div className="cg-support-and-help" style={{ width: '100%' }}>
                  <figure className="img-wrapper" style={{ height: '60px', marginBottom: 0 }}>
                    <Image src={img} alt={label} width={60} height={60} />
                  </figure>
                  <div className="heading-3" style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '15px', lineHeight: '1.4' }}>
                      {label}
                      <br />
                      <strong style={{ fontSize: '22px', color: '#029DE0' }}>{value}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
