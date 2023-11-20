import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import * as React from 'react';
import { Suspense } from 'react';

import '@/styles/globals.css';

import Provider from '@/components/generals/provider';
import BaseLayout from '@/components/layouts/base-layout';
import { LoadingSpinner } from '@/components/LoadingSpinner';

import { authOptions } from '@/app/api/auth/[...nextauth]/option';
import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },async
  // ],
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body>
        <Suspense fallback={<LoadingSpinner />}>
          <Provider>
            {session ? <BaseLayout>{children}</BaseLayout> : <>{children}</>}
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
