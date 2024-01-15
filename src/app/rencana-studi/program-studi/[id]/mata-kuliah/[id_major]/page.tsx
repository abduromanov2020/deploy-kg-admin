import { Metadata } from 'next';
import React from 'react';

import SubjectModule from '@/modules/rencana-studi/subject';

export const metadata: Metadata = {
  title: 'Rencana Studi',
};

const SubjectPage = ({ params }: { params: { id_major: string } }) => {
  const { id_major } = params;

  return <SubjectModule id={id_major} />;
};

export default SubjectPage;
