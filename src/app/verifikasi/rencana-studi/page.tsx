import { Metadata } from 'next';
import * as React from 'react';

import BaseLayout from '@/components/layouts/base-layout';

export const metadata: Metadata = {
  title: 'Verifikasi Rencana Stud',
};

export default function VerifikasiRencanaStudiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <BaseLayout>Rencana Studi</BaseLayout>
      </div>
    </main>
  );
}
