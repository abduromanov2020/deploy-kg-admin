import { Metadata } from 'next';

import { RencanaStudiModule } from '@/modules/rencana-studi';

export const metadata: Metadata = {
  title: 'Rencana Studi',
};

export default function RencanaStudiPage() {
  return (
    <main>
      <div className='min-h-screen w-full'>
        <RencanaStudiModule />
      </div>
    </main>
  );
}
