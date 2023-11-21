import { Metadata } from 'next';
import React from 'react';

import SekilasIlmuModule from '@/modules/sekilas-ilmu';

export const metedata: Metadata = {
  title: 'Sekilas Ilmu',
};

const SekilasIlmuPage = () => {
  return <SekilasIlmuModule />;
};

export default SekilasIlmuPage;
