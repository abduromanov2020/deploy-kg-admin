import { pengajuanAdmDataDiriGetRequest, pengajuanAdmGetRequest } from "@/hooks/verifikasi/administrasi/request";
import { TMetaErrorResponse } from "@/types";
import { TPengajuanAdmResponse, TPengajuanDataDiriAdmResponse } from "@/types/verifikasi/administrasi";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetPengjuanAdm = (page: number,
  search: string,
  limit: number,
  sort_by: string): UseQueryResult<TPengajuanAdmResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['get-pengajuan-adm-user', page, search, limit, sort_by],
    queryFn: async () => await pengajuanAdmGetRequest(page, search, limit, sort_by),
  });

  export const useGetPengjuanAdmDataDiri = (
    id: string
  ): UseQueryResult<TPengajuanDataDiriAdmResponse, TMetaErrorResponse> =>
    useQuery({
      queryKey: ['get-pengajuan-adm-data-diri-user', id],
      queryFn: async () => await pengajuanAdmDataDiriGetRequest(id),
    });