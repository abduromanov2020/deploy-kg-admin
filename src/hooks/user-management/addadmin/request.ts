import { api } from '@/lib/api';
import { TAddAdminResponse } from '@/hooks/user-management/addadmin/type';

export type TAddAdminPayload = {
  full_name: string;
  email: string;
  password: string;
  role_id: string;
};

export const AddAdminRequest = async (
  payload: TAddAdminPayload,
): Promise<TAddAdminResponse> => {
  const { data } = await api.post(`v1/admin/users/create`, payload);

  return data;
};
