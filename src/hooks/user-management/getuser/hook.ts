import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { userRequest } from '@/hooks/user-management/getuser/request';
import { TUserDataResponse } from '@/hooks/user-management/getuser/type';

import { TMetaErrorResponse } from '@/types';

export const useUser = (
  page: number,
  limit: number,
  role: string,
  search: string,
  majorid: string[],
): UseQueryResult<TUserDataResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-userAdmin', page, role],
    queryFn: async () => await userRequest(page, limit, role, search, majorid),
    staleTime: Infinity,
  });
};
