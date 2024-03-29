'use client';

import { ReactElement, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { TUploadFieldProps } from '@/types/components/input';

export const UploadField = <T extends FieldValues>(
  props: TUploadFieldProps<T>,
): ReactElement => {
  const { field } = useController(props);
  const [getName, setName] = useState('');
  return (
    <section className='flex flex-col w-auto my-1 gap-y-2 '>
      {props.label && (
        <label
          htmlFor={props.name}
          className={`text-[#000] ${
            props.variant === 'lg'
              ? 'text-[18px] font-bold'
              : props.variant === 'md'
                ? 'text-[16px] font-bold'
                : props.variant === 'sm'
                  ? 'text-[14px] font-bold'
                  : ''
          } `}
        >
          {props.label}
          {props.required && (
            <span className='ml-1 font-bold  text-red-600'>*</span>
          )}
        </label>
      )}

      <label className='mb-2' htmlFor={props.name}>
        <section
          className={`${
            props.status === 'error' && ' border-red-700'
          } flex overflow-hidden border mb-1 rounded-lg ${props.className}`}
        >
          <div className='w-full flex items-center bg-white'>
            <h1
              className={`${
                props.disabled
                  ? 'bg-dark-500 cursor-not-allowed'
                  : 'bg-dark-900 hover:bg-dark-700 cursor-pointer'
              } w-fit text-white h-full    transition-colors ease-in-out duration-300 px-4 rounded-l-lg flex items-center`}
            >
              Pilih File
            </h1>
            <p
              className={`${
                props.status === 'error' ? 'text-red-500 italic' : ''
              } px-4 text-xs`}
            >
              {getName || props.files ? (
                <span>
                  {getName || props.files}
                  {props.status === 'error' && `(${props.message})`}
                </span>
              ) : (
                'Tidak ada file yang dipilih'
              )}
            </p>
          </div>
          <div className='min-w-[120px] lg:min-w-[150px]'>
            <p className='px-4 py-3 lg:py-3 bg-dark-300 text-neutral-600 text-xs lg:text-sm'>
              {props.accepted}
            </p>
          </div>
        </section>
        <span
          className={`${
            props.status === 'error'
              ? 'text-red-700'
              : props.status === 'success'
                ? 'text-green-base'
                : props.status === 'warning'
                  ? 'text-warning-base'
                  : ''
          } text-xs`}
        >
          {props.message}
        </span>
      </label>

      <input
        {...props}
        onChange={(event) => {
          field.onChange(event.target.files);
          setName(event.target?.files?.[0]?.name as string);
          props?.onChange?.(event);
        }}
        id={props.name}
        type='file'
        defaultValue={props.defaultValue}
        className={`
            ${
              props.status === 'error' &&
              'focus:ring-1 focus:ring-red-base bg-red-100 placeholder:text-white ring-1 ring-red-base text-sm'
            }

            ${
              props.status === 'success' &&
              'focus:ring-1 focus:ring-green-base bg-green-100 text-sm'
            }

            ${
              props.status === 'warning' &&
              'focus:ring-1 focus:ring-warning-base bg-warning-100 text-sm'
            }

            ${
              !props.status ||
              (props.status === 'none' &&
                `border-[0.5px] border-neutral-400 shadow-sm ${props.className}`)
            }

           rounded-lg p-4 outline-none focus:outline-none sr-only
        `}
        // hidden
      />
    </section>
  );
};
