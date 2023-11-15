import { Metadata } from 'next';
import * as React from 'react';

import BaseLayout from '@/components/layouts/base-layout';

import { VerifikasiRencanaStudiModule } from '@/modules/verifikasi/rencana-studi';

export const metadata: Metadata = {
  title: 'Verifikasi Rencana Studi',
};

export default function VerifikasiRencanaStudiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <BaseLayout>
          <VerifikasiRencanaStudiModule />
        </BaseLayout>
      </div>
    </main>
  );
}
