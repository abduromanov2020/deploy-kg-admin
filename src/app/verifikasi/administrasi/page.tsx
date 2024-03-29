import { Metadata } from 'next';
import * as React from 'react';

import VerifikasiAdministrasiModule from '../../../modules/verifikasi/administrasi/module';

export const metadata: Metadata = {
  title: 'Verifikasi Administrasi',
};

export default function VerifikasiAdministrasiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <VerifikasiAdministrasiModule/>
      </div>
    </main>
  );
}
