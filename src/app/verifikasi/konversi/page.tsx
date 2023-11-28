import { Metadata } from 'next';
import * as React from 'react';

import VerifikasiKonversiModule from '../../../modules/verifikasi/konversi/module';

export const metadata: Metadata = {
  title: 'Verifikasi Konversi',
};

export default function VerifikasiKonversiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <VerifikasiKonversiModule/>
      </div>
    </main>
  );
}
