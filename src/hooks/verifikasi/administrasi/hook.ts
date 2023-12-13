import { pengajuanAdmGetRequest } from "@/hooks/verifikasi/administrasi/request";
import { TPengajuanAdmResponse } from "@/types/verifikasi/administrasi";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useGetPengjuanAdm = (page: number,
  search: string,
  limit: number,
  sort_by: string): UseQueryResult<TPengajuanAdmResponse> =>
  useQuery({
    queryKey: ['get-pengajuan-adm-user', page, search, limit, sort_by],
    queryFn: async () => await pengajuanAdmGetRequest(page, search, limit, sort_by),
  });