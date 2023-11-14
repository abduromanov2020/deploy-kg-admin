'use client';

import Head from 'next/head';
import * as React from 'react';

import BaseLayout from '@/components/layouts/base-layout';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <div className='min-h-screen w-full'>
        <BaseLayout>halo</BaseLayout>
      </div>
    </main>
  );
}
