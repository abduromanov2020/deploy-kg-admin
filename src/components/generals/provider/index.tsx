'use client';

import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { RecoilEnv, RecoilRoot } from 'recoil';

import { LoadingSpinner } from '@/components/LoadingSpinner';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function Provider({ children }: { children: React.ReactNode }) {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <RecoilRoot>
          <NextUIProvider>
            <Suspense fallback={<LoadingSpinner />}>
              {children}
              <Toaster />
            </Suspense>
          </NextUIProvider>
        </RecoilRoot>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default Provider;
