import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { loginRequest } from '@/hooks/auth/hook';

import { TLoginData } from '@/types/auth';

// import { TLoginData } from '../../../../types';
// import { loginRequest } from '../../../../hooks/auth/request';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/',
  },
  session: {
    maxAge: 2 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      id: 'login',
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials): Promise<TLoginData> {
        try {
          const data = await loginRequest({
            email: credentials?.email,
            password: credentials?.password,
            role: 'ADMIN',
          });

          return data;
        } catch (error: any) {
          if (error.response.status === 422) {
            throw new Error(error.response.data.message);
          }

          throw new Error(
            typeof error.response.data === 'string'
              ? error.response.data
              : error.response.data?.message,
          );
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (user) return true;

      return false;
    },

    async jwt({ token, user, account }) {
      const currentUser = user as unknown as TLoginData;
      if (account?.provider === 'login' && currentUser) {
        token.access_token = currentUser.data.access_token;
        token.refresh_token = currentUser.data.refresh_token;
        currentUser.name = user.name;
        currentUser.email = user.email;
      }

      return { ...token, ...currentUser };
    },
    async session({ session, token }) {
      const jwt_token = {
        access_token: token?.access_token,
        refresh_token: token?.refresh_token,
      };
      session = {
        expires: token?.expires as string,
        user: {
          id: 'w',
          name: token.name,
          email: token.email,
          token: jwt_token,
        },
      };
      return session;
    },
  },
};
