'use client';

import * as React from 'react';

// export const metadata: Metadata = {
//   title: 'Verifikasi Rencana Stud',
// };
import { VerifikasiRencanaStudiModule } from '@/modules/verifikasi/rencana-studi';

export default function VerifikasiRencanaStudiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <VerifikasiRencanaStudiModule />
      </div>
    </main>
  );
}
