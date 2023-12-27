import * as React from 'react';
import { Metadata } from 'next';
import NilaiModule from '@/modules/nilai-sertifikat/nilai/module';

export const metadata: Metadata = {
  title: 'Nilai Mahasiswa',
};

export default function NilaiPage() {
  return <main>
  <div className='min-h-screen w-full'>
    <NilaiModule />
  </div>
</main>;
}
