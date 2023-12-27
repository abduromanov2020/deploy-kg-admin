

import DetailMatakuliahModule from '@/modules/nilai-sertifikat/nilai/detail-matakuliah/module';
import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Detail Semester Mahasiswa',
};

export default function NilaiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <DetailMatakuliahModule />
      </div>
    </main>
  );
}
