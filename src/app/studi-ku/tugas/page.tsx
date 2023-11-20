import BaseLayout from '@/components/layouts/base-layout';

import TugasModule from '@/modules/studi-ku/tugas';

export default function HomePage() {
  return (
    <main>
      <BaseLayout>
        <TugasModule />
      </BaseLayout>
    </main>
  );
}
