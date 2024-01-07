import { Metadata } from 'next';
import * as React from 'react';

import RencanaStudiDetailFaculty from '@/modules/rencana-studi/faculty/detail/module';

export const metadata: Metadata = {
  title: 'Detail Fakultas',
};

const FacultyDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <RencanaStudiDetailFaculty id={id} />;
};

export default FacultyDetailsPage;
