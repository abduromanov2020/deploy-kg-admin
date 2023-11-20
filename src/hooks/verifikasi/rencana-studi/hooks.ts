import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { GetStudyPlanRequest } from '@/hooks/verifikasi/rencana-studi/request';

import { TAllStudyplanRequestResponse } from '@/types/verifikasi/rencana-studi/types';

export const useGetStudyPlanRequest = (
  page: number,
  search: string,
  limit: number,
  sort_by: string,
): UseQueryResult<TAllStudyplanRequestResponse> =>
  useQuery({
    queryKey: ['get-study-plan-request', page, search, limit, sort_by],
    queryFn: async () =>
      await GetStudyPlanRequest(page, search, limit, sort_by),
  });
