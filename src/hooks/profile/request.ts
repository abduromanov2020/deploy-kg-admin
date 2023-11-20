import { api } from '@/lib/api';

import { USER_PROFILE_ME } from '@/constant/api';

import { TUserDetailResponse } from '@/types/profile';

export const profileRequest = async (): Promise<
  TUserDetailResponse | undefined
> => {
  const { data } = await api.get(USER_PROFILE_ME);

  return data;
};
