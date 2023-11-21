'use client';

import { useParams } from 'next/navigation';
import * as React from 'react';

// export const metadata: Metadata = {
//   title: 'Verifikasi Rencana Stud',
// };
import { DetailRencanaStudiModule } from '@/modules/verifikasi/rencana-studi/detail-rencana-studi';

export default function DetailRencanaStudi() {
  const params = useParams();
  const { id } = params;
  return (
    <main>
      <div className='w-full'>
        <DetailRencanaStudiModule id={id[0]} />
      </div>
    </main>
  );
}
