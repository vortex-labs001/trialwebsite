import type { Metadata } from 'next';
import './globals.css';
import './styles.css';

export const metadata: Metadata = {
  title: 'Webrev — Custom Web Development Studio',
  description:
    'Webrev crafts custom, high-converting websites and modern digital platforms for growing businesses. Fast delivery, bespoke design, and modern web engineering.',
  themeColor: '#071726',
  icons: {
    icon: 'assets/logo-full.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}