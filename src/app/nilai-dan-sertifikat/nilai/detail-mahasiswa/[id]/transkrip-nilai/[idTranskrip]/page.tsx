import TranskripNilaiMahasiswaModule from '@/modules/nilai-sertifikat/nilai/transkrip-nilai/module';
import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Transkrip Nilai Mahasiswa',
};

export default function NilaiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <TranskripNilaiMahasiswaModule />
      </div>
    </main>
  );
}
