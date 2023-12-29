import { api } from '@/lib/api';
import {
  TEditAdminPayload,
  TEditAdminResponse,
} from '@/hooks/user-management/editadmin/type';

export const EditAdminRequest = async (
  id: string,
  payload: TEditAdminPayload,
): Promise<TEditAdminResponse> => {
  const { data } = await api.put(`v1/admin/users/${id}`, payload);

  return data;
};
