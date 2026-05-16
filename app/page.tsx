import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import StepsSection from './components/StepsSection';
import LiveGamesSection from './components/LiveGamesSection';
import DownloadSection from './components/DownloadSection';
import WhyChooseSection from './components/WhyChooseSection';
import GameCounterSection from './components/GameCounterSection';
import ContactSection from './components/ContactSection';

export const metadata: Metadata = {
  title: 'APBook – Most Trusted Online Betting Exchange in India | Best Odds',
  description:
    "APBook is India's most trusted online betting exchange. Get the best odds on cricket, football & casino. Instant withdrawals, 24/7 support, 700+ games. Register now & get a welcome bonus.",
  keywords:
    'APBook, online betting India, betting exchange, cricket betting, live casino India, online casino India, sports betting, apbook.in',
  alternates: { canonical: 'https://www.apbook.in/' },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <StepsSection />
        <DownloadSection />
        <LiveGamesSection />
        <WhyChooseSection />
        <GameCounterSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
