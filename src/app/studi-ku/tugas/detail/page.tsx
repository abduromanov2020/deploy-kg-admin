import BaseLayout from '@/components/layouts/base-layout';

import DetailTugasModule from '@/modules/studi-ku/tugas/detail';

export default function HomePage() {
  return (
    <main>
      <BaseLayout>
        <DetailTugasModule />
      </BaseLayout>
    </main>
  );
}
