import React from 'react';

import MajorModule from '@/modules/rencana-studi/major/module';

const MajorPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <MajorModule id={id} />;
};

export default MajorPage;
