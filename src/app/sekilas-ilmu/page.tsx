import { Metadata } from 'next';
import React from 'react';

import BaseLayout from '@/components/layouts/base-layout';

import SekilasIlmuModule from '@/modules/sekilas-ilmu';

export const metedata: Metadata = {
  title: 'Sekilas Ilmu',
};

const SekilasIlmuPage = () => {
  return (
    <BaseLayout>
      <SekilasIlmuModule />
    </BaseLayout>
  );
};

export default SekilasIlmuPage;
