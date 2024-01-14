import { api } from '@/lib/api';
import {
  TGetUserByRoleResponse,
  TUserDataResponse,
} from '@/hooks/user-management/getuser/type';

export const userRequest = async (
  page: number,
  limit: number,
  role: string,
  search: string,
  majorid: string[],
): Promise<TUserDataResponse> => {
  const { data } = await api.get(
    `v1/admin/users?page=${page}&limit=${limit}&role=${role}&search=${search}&majorids[]=${majorid}`,
  );

  return data;
};

export const GetUserByRoleRequest = async (
  role: string,
): Promise<TGetUserByRoleResponse> => {
  const { data } = await api.get(`v1/admin/users?role=${role}`);

  return data;
};
