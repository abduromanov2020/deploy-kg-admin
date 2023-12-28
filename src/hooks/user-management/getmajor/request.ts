import { api } from '@/lib/api';
import { TGetMajorResponse } from '@/hooks/user-management/getmajor/type';

export const MajorRequest = async (): Promise<TGetMajorResponse> => {
  const { data } = await api.get(`v1/major`);

  return data;
};
