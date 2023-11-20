import BaseLayout from '@/components/layouts/base-layout';

import EditTugasModule from '@/modules/studi-ku/tugas/edit';

export default function HomePage() {
  return (
    <main>
      <BaseLayout>
        <EditTugasModule />
      </BaseLayout>
    </main>
  );
}
