import { api } from '@/lib/api';
import { TPengajuanAdmResponse } from '@/types/verifikasi/administrasi';

export const pengajuanAdmGetRequest = async (
  page: number,
  search: string,
  limit: number,
  sort_by: string
): Promise<TPengajuanAdmResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      page,
      search,
      limit,
      sort_by,
    },
    url: 'v1/admin/administrations',
  });

  return data;
};