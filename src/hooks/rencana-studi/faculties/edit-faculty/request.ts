import { api } from '@/lib/api';

import { TEditFacultyPayload } from '@/types/rencana-studi/faculties/types';
import { TResponseAllFaculties } from '@/types/rencana-studi/faculties/types';

export const EditFacultyRequest = async (
  id: string,
  payload: TEditFacultyPayload,
): Promise<TResponseAllFaculties> => {
  const { data } = await api({
    method: 'put',
    url: `v2/admin/faculties/${id}`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });
  return data;
};
