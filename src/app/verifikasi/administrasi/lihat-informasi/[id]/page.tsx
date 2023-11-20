import { Metadata } from 'next';
import * as React from 'react';

import BaseLayout from '@/components/layouts/base-layout';

import LihatInformasiModule from '@/modules/verifikasi/administrasi/lihat-informasi/module';

export const metadata: Metadata = {
  title: 'Lihat Informasi Administrasi',
};

export default function VerifikasiAdministrasiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <BaseLayout><LihatInformasiModule/></BaseLayout>
      </div>
    </main>
  );
}
