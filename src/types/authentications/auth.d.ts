export type TLoginData = {
  data: {
    access_token: string;
    refresh_token: string;
  };
} & User;

export type TLoginPayload = {
  email?: string;
  password?: string;
  role?: string;
};

export type TLoginResponse = TLoginData;

export type TRefreshTokenPayload = {
  refresh_token: string;
};

export type TRefreshTokenResponse = {
  data: {
    token: {
      access_token: string;
    };
  };
};
