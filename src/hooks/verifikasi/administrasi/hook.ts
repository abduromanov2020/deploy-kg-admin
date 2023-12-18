import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

import {
  accAdministration,
  pengajuanAdmDataDiriGetRequest,
  pengajuanAdmGetRequest,
  rejectAdministration,
} from '@/hooks/verifikasi/administrasi/request';

import { TMetaErrorResponse } from '@/types';
import {
  TConfirmAdministrasiResponse,
  TPengajuanAdmResponse,
  TPengajuanDataDiriAdmResponse,
} from '@/types/verifikasi/administrasi';

export const useGetPengjuanAdm = (
  page: number,
  search: string,
  limit: number,
  sort_by: string,
): UseQueryResult<TPengajuanAdmResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['get-pengajuan-adm-user', page, search, limit, sort_by],
    queryFn: async () =>
      await pengajuanAdmGetRequest(page, search, limit, sort_by),
  });

export const useGetPengjuanAdmDataDiri = (
  id: string,
): UseQueryResult<TPengajuanDataDiriAdmResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['get-pengajuan-adm-data-diri-user', id],
    queryFn: async () => await pengajuanAdmDataDiriGetRequest(id),
  });

export const useAccAdministrasi = (): UseMutationResult<
  TConfirmAdministrasiResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['acc-administrasi'],
    mutationFn: async (payload) => await accAdministration(payload),
  });
};

export const useRejectAdministrasi = (): UseMutationResult<
  TConfirmAdministrasiResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['reject-administrasi'],
    mutationFn: async (payload) => await rejectAdministration(payload),
  });
};
