import { Metadata } from 'next';
import * as React from 'react';

import DetailKonversiBalikModule from '@/modules/verifikasi/konversi/detail-konversi-balik/module';

export const metadata: Metadata = {
  title: 'Detail Konversi Balik SKS',
};

export default function VerifikasiKonversiBalikPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <DetailKonversiBalikModule />
      </div>
    </main>
  );
}
