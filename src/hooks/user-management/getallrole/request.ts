import { api } from '@/lib/api';
import { TGetAllRoleResponse } from '@/hooks/user-management/getallrole/type';

export const GetAllRoleRequest = async (): Promise<TGetAllRoleResponse> => {
  const { data } = await api.get(`v1/admin/roles`);

  return data;
};
