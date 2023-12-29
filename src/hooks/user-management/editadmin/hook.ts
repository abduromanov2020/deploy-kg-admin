import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { EditAdminRequest } from '@/hooks/user-management/editadmin/request';
import {
  TEditAdminPayload,
  TEditAdminResponse,
} from '@/hooks/user-management/editadmin/type';

import { TMetaErrorResponse } from '@/types';

export const useEditAdmin = (
  id: string,
): UseMutationResult<
  TEditAdminResponse,
  TMetaErrorResponse,
  TEditAdminPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['get-major', id],
    mutationFn: async (payload) => await EditAdminRequest(id, payload),
  });
};
