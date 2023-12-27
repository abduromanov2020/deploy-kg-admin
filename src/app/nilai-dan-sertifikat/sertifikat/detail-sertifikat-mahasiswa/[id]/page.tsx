import DetailSertifikatModule from '@/modules/nilai-sertifikat/sertifikat/detail-sertifikat-mahasiswa/module';
import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Detail Sertifikat Mahasiswa',
};

export default function SertifikatPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <DetailSertifikatModule />
      </div>
    </main>
  );
}
