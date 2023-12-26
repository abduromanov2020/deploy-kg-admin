import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { GetAllRoleRequest } from '@/hooks/user-management/getallrole/request';
import { TGetAllRoleResponse } from '@/hooks/user-management/getallrole/type';

import { TMetaErrorResponse } from '@/types';

export const useRole = (): UseQueryResult<
  TGetAllRoleResponse,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ['get-major'],
    queryFn: async () => await GetAllRoleRequest(),
  });
};
