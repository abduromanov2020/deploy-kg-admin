import DetailMahasiswaModule from '@/modules/nilai-sertifikat/nilai/detail-mahasiswa/module';
import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Detail Nilai Mahasiswa',
};

export default function NilaiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <DetailMahasiswaModule />
      </div>
    </main>
  );
}
