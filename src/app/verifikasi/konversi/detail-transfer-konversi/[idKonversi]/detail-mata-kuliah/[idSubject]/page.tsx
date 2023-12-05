

import DetailMatakuliahKonversiModule from '@/modules/verifikasi/konversi/detail-matakuliah/module';
import { Metadata } from 'next';
import * as React from 'react';


export const metadata: Metadata = {
  title: 'Detail Matakuliah Konversi',
};

export default function DetailMatakuliahKonversiPage({ params }: { params: { idKonversi: string; idSubject: string } }) {
  const { idKonversi, idSubject } = params;
  return (
    <main>
      <div className='min-h-screen w-full'>
        <DetailMatakuliahKonversiModule idKonversi={idKonversi} idSubject={idSubject}/>
      </div>
    </main>
  );
}