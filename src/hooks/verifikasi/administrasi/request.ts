import { api } from '@/lib/api';
import { TConfirmAdministrasiResponse, TPengajuanAdmResponse, TPengajuanDataDiriAdmResponse, confirmPayload } from '@/types/verifikasi/administrasi';

export const pengajuanAdmGetRequest = async (
  page: number,
  search: string,
  limit: number,
  sort_by: string,
  start_date:string | null,
  end_date:string | null,
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
      start_date,
      end_date,
    },
    url: 'v1/admin/administrations',
  });

  return data;
};

export const pengajuanAdmDataDiriGetRequest = async (
  id: string
): Promise<TPengajuanDataDiriAdmResponse> => {
  const { data } = await api.get(`v1/admin/administrations/${id}`);
  return data;
};

export const accAdministration = async (
  payload: confirmPayload | unknown
): Promise<TConfirmAdministrasiResponse> => {
  const { data } = await api({
    method: 'post',
    url: 'v1/admin/administrations/approve',
    data: payload,
  });
  return data;
};

export const rejectAdministration = async (
  payload: confirmPayload | unknown
): Promise<TConfirmAdministrasiResponse> => {
  const { data } = await api({
    method: 'post',
    url: 'v1/admin/administrations/reject',
    data: payload,
  });
  return data;
};
