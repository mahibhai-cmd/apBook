import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.apbook.in'),
  title: {
    default: 'APBook – Most Trusted Online Betting Exchange in India',
    template: '%s | APBook',
  },
  description:
    "Bet with the most trusted online betting exchange in India. Get the best odds, instant withdrawals & deposits, 24/7 customer service and refer bonus. Enjoy safe and secure betting.",
  keywords:
    'APBook, apbook.in, online betting India, betting exchange India, cricket betting, casino India, sports betting, live casino, online gambling India',
  authors: [{ name: 'APBook' }],
  creator: 'APBook',
  publisher: 'APBook',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.apbook.in',
    siteName: 'APBook',
    title: 'APBook – Most Trusted Online Betting Exchange in India',
    description:
      'India\'s most trusted betting exchange. Best odds on cricket, football & casino. 700+ games, instant payouts.',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'APBook – Best Online Betting Exchange India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APBook – Most Trusted Online Betting Exchange in India',
    description:
      'India\'s most trusted online betting exchange. 700+ sports & casino games, instant withdrawals.',
    images: ['/banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  verification: {
    google: 'google-site-verification-token',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.apbook.in/#organization',
      name: 'APBook',
      url: 'https://www.apbook.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.apbook.in/logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
      },
      sameAs: [
        'https://t.me/apbook',
        'https://wa.me/919876543210',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.apbook.in/#website',
      url: 'https://www.apbook.in',
      name: 'APBook',
      description: "India's Most Trusted Online Betting Exchange",
      publisher: { '@id': 'https://www.apbook.in/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.apbook.in/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
}
