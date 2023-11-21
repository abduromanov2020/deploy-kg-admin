import { api } from '@/lib/api';
import { TUserDataResponse } from '@/hooks/user-management/getuser/type';

export const userRequest = async (
  page: number,
  limit: number,
  search: string,
  role: string,
): Promise<TUserDataResponse> => {
  const { data } = await api.get(
    `v1/admin/users?page=${page}&limit=${limit}&search=${search}&role=${role}`,
  );

  return data;
};
