import { Metadata } from 'next';
import * as React from 'react';

import LihatInformasiModule from '@/modules/verifikasi/administrasi/lihat-informasi/module';

export const metadata: Metadata = {
  title: 'Lihat Informasi Administrasi',
};

export default function VerifikasiAdministrasiPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <main>
      <div className='min-h-screen w-full'>
        <LihatInformasiModule id={id}/>
      </div>
    </main>
  );
}
