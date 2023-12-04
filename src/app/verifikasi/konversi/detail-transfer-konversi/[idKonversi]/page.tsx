
import DetailTransferKonversiModule from '@/modules/verifikasi/konversi/detail-transfer-konversi/module';
import { Metadata } from 'next';
import * as React from 'react';


export const metadata: Metadata = {
  title: 'Detail Transfer Konversi SKS',
};

export default function VerifikasiTransferKonversiPage({ params }: { params: { idKonversi: string } }) {
  const { idKonversi } = params;
  return (
    <main>
      <div className='min-h-screen w-full'>
        <DetailTransferKonversiModule idKonversi={idKonversi} />
      </div>
    </main>
  );
}