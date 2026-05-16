import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={roboto.variable}>
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="/css/bootstrap-icons.css" />
      <link rel="stylesheet" href="/css/fontAwesome-all.css" />
      <link rel="stylesheet" href="/css/lp20-style.css" />
      <link rel="stylesheet" href="/css/lp20-responsive.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        crossOrigin="anonymous"
      />
      {children}
    </div>
  );
}
