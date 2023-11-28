import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { userByIdRequest } from '@/hooks/user-management/getuser/getuserById/request';
import { TUserDataByIdResponse } from '@/hooks/user-management/getuser/getuserById/type';

import { TMetaErrorResponse } from '@/types';

export const useUserById = (
  id: string | string[],
): UseQueryResult<TUserDataByIdResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-userAdmin', id],
    queryFn: async () => await userByIdRequest(id),
    staleTime: Infinity,
  });
};
