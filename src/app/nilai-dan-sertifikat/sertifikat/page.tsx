import * as React from 'react';
import { Metadata } from 'next';
import SertifikatModule from '@/modules/nilai-sertifikat/sertifikat/module';

export const metadata: Metadata = {
  title: 'Sertifikat Mahasiswa',
};

export default function SertifikatPage() {
  return <main>
  <div className='min-h-screen w-full'>
    <SertifikatModule />
  </div>
</main>;
}
