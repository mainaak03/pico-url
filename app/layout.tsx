import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { Providers } from './providers';
import ServiceWorkerRegister from './components/ServiceWorkerRegister';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'pico.url | URL Shortener',
  description:
    'pico.url is a simple and efficient URL shortening service that helps you manage and share links effortlessly. Get shortened URLs instantly!',
  keywords:
    'URL Shortener, Link Management, Shorten Links, URL Shortening Service, Shareable Links',
  applicationName: 'pico.url',
  generator: 'Next.js',
  referrer: 'no-referrer',
  creator: 'pico.url Team',
  publisher: 'vercel',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'pico.url | URL Shortener',
    description: 'Effortlessly shorten and manage your URLs with pico.url.',
    url: 'https://pico-url.vercel.app',
    siteName: 'pico.url',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'pico.url | URL Shortener',
    description: 'Quickly shorten and share your links with pico.url.',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/png'
          href='/favicon-48x48.png'
          sizes='48x48'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
