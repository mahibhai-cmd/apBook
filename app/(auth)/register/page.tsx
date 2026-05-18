import type { Metadata } from 'next';
import RegisterForm from './RegisterForm';

export const metadata: Metadata = {
  title: 'Register | APBook – Join India\'s Most Trusted Betting Exchange',
  description:
    'Create your free APBook account in minutes. Register now and get the best odds on cricket, football, live casino & 700+ games. Instant withdrawals, 24/7 support. Join APBook today!',
  keywords: 'APBook register, apbok.in register, apbook.in signup, betting exchange registration India, online betting account India',
  alternates: { canonical: 'https://www.apbok.in/register' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Register | APBook – Join India\'s Best Betting Exchange',
    description: 'Create your free APBook account. Best odds, instant withdrawals, 700+ games.',
    url: 'https://www.apbok.in/register',
    siteName: 'APBook',
    images: [{ url: '/banner.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function RegisterPage() {
  return <RegisterForm />;
}
