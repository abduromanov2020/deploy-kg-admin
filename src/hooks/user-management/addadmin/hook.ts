import { useMutation, UseMutationResult } from '@tanstack/react-query';

import {
  AddAdminRequest,
  TAddAdminPayload,
} from '@/hooks/user-management/addadmin/request';
import { TAddAdminResponse } from '@/hooks/user-management/addadmin/type';

import { TMetaErrorResponse } from '@/types';

export const useAddAdmin = (): UseMutationResult<
  TAddAdminResponse,
  TMetaErrorResponse,
  TAddAdminPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['get-major'],
    mutationFn: async (payload) => await AddAdminRequest(payload),
  });
};
