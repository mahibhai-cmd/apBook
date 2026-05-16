import Image from 'next/image';

const FEATURES = [
  {
    img: '/lp-images/revenue.c38d0307.png', title: 'Live Games',
    text: "A surprising Range Of 750+ Sports & Casino games! The best place to play is always at home. We're bringing you the best online game streaming experience.",
  },
  {
    img: '/lp-images/staking.357640f7.png', title: 'Live Streaming',
    text: 'Step up your game. Our fast and live streaming of your favorite online games lets you Play Better!',
  },
  {
    img: '/lp-images/token.79b776f8.png', title: 'Enhanced Design',
    text: 'Our Enhanced Design is built to help you get your gaming skills off the ground faster. Focus on growing your earning skill.',
  },
  {
    img: '/lp-images/jackpot.506204dd.png', title: 'Easy to Pay',
    text: 'Making your life simple and gainful. Play online games anywhere and anytime.',
  },
  {
    img: '/lp-images/revenue.c38d0307.png', title: 'Safe & Secured',
    text: "A safe and secure platform built upon a foundation of trust. We're committed to provide a safe environment for everyone.",
  },
  {
    img: '/lp-images/staking.357640f7.png', title: '24x7 Customer Support',
    text: "We know what's best for you! Available for your support 24/7.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="choose-game-sec">
      <div className="container">
        <div className="choose-heading-text">
          <h2>Why Choose Us?</h2>
        </div>
        <div className="choose-game-con">
          <div className="row">
            {FEATURES.map(({ img, title, text }, i) => (
              <div key={title} className="col-sm-12 col-md-6 col-lg-4">
                <div className={i > 2 ? 'wc-main' : ''}>
                  <div className="w-c-main-container">
                    <div className="wc-logo-img">
                      <figure>
                        <Image src={img} alt={title} width={100} height={100} loading="eager" />
                      </figure>
                    </div>
                    <div className="wc-title"><h3>{title}</h3></div>
                    <div className="wc-text"><p>{text}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
