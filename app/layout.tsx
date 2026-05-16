import type { Metadata } from 'next';
import './globals.css';

const BASE = 'https://www.apbook.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  applicationName: 'APBook',
  title: {
    default: 'APBook – Most Trusted Online Betting Exchange in India',
    template: '%s | APBook',
  },
  description:
    'Bet with the most trusted online betting exchange in India. Get the best odds on cricket, football & live casino. Instant withdrawals & deposits, 24/7 customer support, refer bonus. 700+ games. Join APBook today!',
  keywords: [
    'APBook', 'apbook.in', 'online betting India', 'betting exchange India',
    'cricket betting', 'live casino India', 'sports betting India',
    'online gambling India', 'best betting odds India', 'instant withdrawal betting',
    'online casino India', 'IPL betting', 'football betting India',
    'APBook register', 'APBook login',
  ],
  authors: [{ name: 'APBook', url: BASE }],
  creator: 'APBook',
  publisher: 'APBook',
  category: 'Sports Betting & Online Casino',
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: BASE,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE,
    siteName: 'APBook',
    title: 'APBook – Most Trusted Online Betting Exchange in India',
    description:
      "India's most trusted betting exchange. Best odds on cricket, football & casino. 700+ games, instant payouts, 24/7 support.",
    images: [
      {
        url: `${BASE}/banner.jpg`,
        width: 1200,
        height: 630,
        alt: 'APBook – Best Online Betting Exchange India',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@APBook',
    creator: '@APBook',
    title: 'APBook – Most Trusted Online Betting Exchange in India',
    description:
      "India's most trusted online betting exchange. 700+ sports & casino games, instant withdrawals, best odds.",
    images: [`${BASE}/banner.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: 'any' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'google-site-verification-token',
  },
  other: {
    'msapplication-TileColor': '#4851a8',
    'theme-color': '#4851a8',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE}/#organization`,
      name: 'APBook',
      url: BASE,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE}/logo.png`,
        width: 200,
        height: 60,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
      },
      sameAs: [
        'https://t.me/APBOOKORIGINAL',
        'https://wa.me/94740968614',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'APBook',
      description: "India's Most Trusted Online Betting Exchange",
      publisher: { '@id': `${BASE}/#organization` },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${BASE}/#webpage`,
      url: BASE,
      name: 'APBook – Most Trusted Online Betting Exchange in India',
      isPartOf: { '@id': `${BASE}/#website` },
      about: { '@id': `${BASE}/#organization` },
      description: "India's most trusted betting exchange. Best odds on cricket, football & casino.",
      inLanguage: 'en-IN',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: BASE,
          },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
      </head>
      <body>
        <div id="app">{children}</div>
      </body>
    </html>
  );
}
