import { TMetaResponseSingle } from '@/types';

export type TUser = {
  user: {
    id: string;
    email: string;
    full_name: string;
    user_name: string;
    gender: string;
    phone_number: string;
    avatar: string;
    email_verified_at: null;
    role: string;
    created_at: string;
    updated_at: string;
  };
};

export type TUserDetailResponse = TMetaResponseSingle<TUser>;
