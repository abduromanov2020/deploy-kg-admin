import React from 'react';

import { cn } from '@/lib/utils';

interface InputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  styleWrapper: string;
  styleInput: string;
  styleTitle: string;
}

export const InputComponent: React.FC<InputProps> = ({
  title,
  value,
  onChange,
  placeholder,
  styleInput,
  styleTitle,
  styleWrapper,
}) => {
  return (
    <div className={`${styleWrapper}`}>
      <label className={`${styleTitle}`} htmlFor={`${title}`}>
        {title}
      </label>
      <input
        className={`${styleInput}`}
        value={value}
        onChange={onChange}
        placeholder={`${placeholder}`}
        type='text'
      />
    </div>
  );
};

export interface InputPropsCustom
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputPropsCustom>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
