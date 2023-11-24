import { signOut } from 'next-auth/react';

import { api } from '@/lib/api';

import { LOGIN, LOGOUT, REFRESH } from '@/constant/api';

import {
  TLoginPayload,
  TLoginResponse,
  TRefreshTokenPayload,
  TRefreshTokenResponse,
} from '@/types/authentications/auth';

export const loginRequest = async (
  payload?: TLoginPayload,
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>(LOGIN, payload);

  return data;
};

export const refreshTokenRequest = async (
  payload?: TRefreshTokenPayload,
): Promise<TRefreshTokenResponse> => {
  const { data } = await api.post<TRefreshTokenResponse>(REFRESH, payload);
  return data;
};

export const logoutRequest = async ({
  refresh_token,
}: {
  refresh_token: string;
}) => {
  await api.post(LOGOUT, { refresh_token });
  signOut();
};
