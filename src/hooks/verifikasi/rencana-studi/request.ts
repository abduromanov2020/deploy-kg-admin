import { api } from '@/lib/api';

import { TAllStudyplanRequestResponse } from '@/types/verifikasi/rencana-studi/types';

export const GetStudyPlanRequest = async (
  page: number,
  search: string,
  limit: number,
  sort_by: string,
): Promise<TAllStudyplanRequestResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      page,
      search,
      limit,
      sort_by,
    },
    url: 'v1/admin/study-plans/requests',
  });
  return data;
};
