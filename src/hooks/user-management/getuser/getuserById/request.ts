import { api } from '@/lib/api';
import { TUserDataByIdResponse } from '@/hooks/user-management/getuser/getuserById/type';

export const userByIdRequest = async (
  id: string,
): Promise<TUserDataByIdResponse> => {
  const { data } = await api.get(`v1/admin/users/${id}`);

  return data;
};
