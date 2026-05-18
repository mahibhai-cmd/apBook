import type { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Login | APBook – Online Betting Exchange India',
  description:
    'Log in to APBook – India\'s most trusted betting exchange. Access your account, place bets on cricket, football & casino games. Instant login with mobile number or user ID.',
  keywords: 'APBook login, apbok.in login, apbook.in login, betting exchange login India, online betting login',
  alternates: { canonical: 'https://www.apbok.in/login' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Login | APBook – Most Trusted Betting Exchange India',
    description: 'Log in to APBook – India\'s most trusted online betting exchange.',
    url: 'https://www.apbok.in/login',
    siteName: 'APBook',
    images: [{ url: '/banner.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function LoginPage() {
  return <LoginForm />;
}
