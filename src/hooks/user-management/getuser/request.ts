import { api } from '@/lib/api';
import { TUserDataResponse } from '@/hooks/user-management/getuser/type';

export const userRequest = async (
  page: number,
  limit: number,
  role: string,
  search: string,
  majorid: string,
): Promise<TUserDataResponse> => {
  const { data } = await api.get(
    `v1/admin/users?page=${page}&limit=${limit}&role=${role}&search=${search}&majorids[]=${majorid}`,
  );

  return data;
};
