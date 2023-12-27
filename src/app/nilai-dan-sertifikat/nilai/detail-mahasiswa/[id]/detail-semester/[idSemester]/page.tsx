
import DetailSemesterModule from '@/modules/nilai-sertifikat/nilai/detail-semester/module';
import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Detail Semester Mahasiswa',
};

export default function NilaiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <DetailSemesterModule />
      </div>
    </main>
  );
}
