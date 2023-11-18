'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import IcLogin from '~/svg/IcLogin.svg';
import IcLogo from '~/svg/IcLogo.svg';

type Inputs = {
  email: string;
  password: string;
};

const LoginModule = () => {
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState<string | undefined | null>(undefined);
  const router = useRouter();
  const userInfoSchema = z.object({
    email: z.string().email({ message: 'Masukkan Email' }),
    password: z.string().min(1, { message: 'Masukkan password' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(userInfoSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (data, e) => {
    setLoading(true);
    try {
      const response = await signIn('login', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response?.url === null) {
        setError(response?.error);
      }

      if (response?.ok && response?.url !== null) {
        router.push('/beranda');
      } else {
        setError(response?.error);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  });

  return (
    <ErrorBoundary fallback={<>{getError}</>}>
      <div className='flex justify-center items-center min-h-screen'>
        <div
          className='flex flex-col md:flex-row sm:mx-8 mx-5  rounded-md p-8 '
          style={{ backgroundColor: '#e9f6fd', width: '1080px' }}
        >
          <div className='p-4 relative flex justify-center md:w-1/2 '>
            <div className='absolute left-5'>
              <IcLogo className='w-[100px] h-[100px]' />
            </div>
            <IcLogin className='w-[253px] h-[245px] mt-16' />
          </div>
          <div className='md:w-1/2 md:p-7 p-4'>
            {getError && (
              <div className='bg-error-100 mb-4 text-error-600 w-full font-[700] text-1xl p-4 rounded-lg border-2 border-error-500 flex justify-between'>
                <strong>{getError}</strong>
                <span onClick={() => setError('')} className='text-right'>
                  x
                </span>
              </div>
            )}
            <h2 className='text-2xl font-bold mb-4 text-center tracking-wide'>
              Masuk
            </h2>
            <h3 className='text-[13px] font-semibold mb-4 text-center'>
              Silahkan masuk menggunakan email dan kata sandi yang terdaftar
            </h3>
            <form onSubmit={onSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='mt-1 p-2 w-full border rounded-md'
                  placeholder='Email'
                  disabled={isSubmitting}
                  {...register('email')}
                />
                {errors.email?.message && <p>{errors.email?.message}</p>}
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  className='mt-1 p-2 w-full border rounded-md'
                  placeholder='Password'
                  disabled={isSubmitting}
                  {...register('password')}
                />
                {errors.password?.message && <p>{errors.password?.message}</p>}
              </div>
              <button
                type='submit'
                disabled={isSubmitting}
                style={{ backgroundColor: '#0B568D' }}
                className='text-white p-2 rounded-md hover:bg-blue-600 w-full mt-3'
              >
                {loading ? 'Sedang Masuk...' : 'Masuk'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default LoginModule;
