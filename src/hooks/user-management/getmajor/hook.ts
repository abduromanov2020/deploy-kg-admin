import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { MajorRequest } from '@/hooks/user-management/getmajor/request';
import { TGetMajorResponse } from '@/hooks/user-management/getmajor/type';

import { TMetaErrorResponse } from '@/types';

export const useMajor = (): UseQueryResult<
  TGetMajorResponse,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ['get-major'],
    queryFn: async () => await MajorRequest(),
  });
};
