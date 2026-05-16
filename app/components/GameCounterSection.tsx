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
              <div className="cmn-container123">
                <div className="cg-support-and-help">
                  <figure className="img-wrapper">
                    <Image src={img} alt={label} width={80} height={80} loading="eager" />
                  </figure>
                  <div className="heading-3">
                    <span>{label}<br />{value}</span>
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
