import Image from 'next/image';
import Link from 'next/link';

const STEPS = [
  { num: '01', label: 'Register',   img: '/lp-images/revenue.c38d0307.png'     },
  { num: '02', label: 'Deposit',    img: '/lp-images/1st.a4dec475.png'          },
  { num: '03', label: 'Play & Win', img: '/lp-images/jackpot.506204dd.png'      },
  { num: '04', label: 'Withdrawal', img: '/lp-images/withdrawal-icon.png'       },
];

export default function StepsSection() {
  return (
    <section className="registerd-and-deposit-sec">
      <div className="container">
        <div className="row">
          {STEPS.map(({ num, label, img }) => (
            <div key={num} className="col-lg-3 col-sm-6 col-6">
              <div className="cmn-container123">
                <Link href="/register">
                  <div className="cmn-sec">
                    <figure className="img-wrapper">
                      <Image src={img} alt={label} width={90} height={90} />
                    </figure>
                    <div className="digit-round-bg">
                      <span className="digit-round-text">{num}</span>
                    </div>
                  </div>
                  <div className="heading-3">
                    <span>{label}</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
