import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "APBook - Most Trusted Online Betting Exchange in India",
  description: "Bet with the most trusted online betting exchange in India. Get the best odds, instant withdrawals & deposits, 24/7 customer service and refer bonus. Enjoy safe and secure betting.",
  keywords: "APBook, online betting, betting exchange, casino, sports betting, India",
  authors: [{ name: "APBook" }],
  openGraph: {
    title: "APBook - Most Trusted Online Betting Exchange in India",
    description: "Bet with the most trusted online betting exchange in India. Get the best odds, instant withdrawals & deposits, 24/7 customer service and refer bonus.",
    url: "https://www.apbook.in/",
    siteName: "APBook",
    images: [
      {
        url: "https://www.apbook.in/logo.png",
        width: 800,
        height: 600,
        alt: "APBook Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/css/app.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <div id="app" data-v-app="">{children}</div>
      </body>
    </html>
  );
}
