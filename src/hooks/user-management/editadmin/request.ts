import { api } from '@/lib/api';
import {
  TEditAdminPayload,
  TEditAdminResponse,
} from '@/hooks/user-management/editadmin/type';

export const GetAllRoleRequest = async (
  id: string,
  payload: TEditAdminPayload,
): Promise<TEditAdminResponse> => {
  const { data } = await api.get(`v1/admin/users/${id}`);

  return data;
};
