'use client';
import { ReactElement, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import {
  Controller,
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

type TInputBagde<T extends FieldValues> = UseControllerProps<T> & {
  children?: React.ReactNode;
  label?: string;
  status?: 'success' | 'error' | 'warning' | 'none';
  required?: boolean;
  name: string;
  message?: string;
  placeholder?: string;
  defaultValue?: Array<string>;
  className?: string;
  updateTags?: (newTags: string[]) => void;
};

const InputBadge = <T extends FieldValues>({
  children,
  label,
  status = 'none',
  defaultValue,
  placeholder,
  className,
  updateTags,
  ...props
}: TInputBagde<T>): ReactElement => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState<Array<string>>(
    defaultValue ? defaultValue : [],
  );
  const inputRef = useRef<HTMLInputElement>(null);
  // console.log(items);

  useEffect(() => {
    setItems(defaultValue ? defaultValue : []);
  }, [defaultValue]);

  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  // const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   // Cek apakah input aktif
  //   const isInputActive = document.activeElement === inputRef.current;

  //   if (e.key === 'Enter' && !isInputActive) {
  //     if (inputText.trim() !== '') {
  //       setItems([...items, inputText]);

  //       setInputText('');
  //     }
  //     e.preventDefault();
  //   }
  // };

  const messageStatus = clsx({
    'text-error-base': status === 'error',
    'text-warning-base': status === 'warning',
    'text-success-base': status === 'success',
    hidden: status === 'none',
  });
  const inputStatus = clsx({
    'focus:ring-1 focus:ring-error-base bg-error-100 placeholder:text-white ring-1 ring-error-base text-sm':
      status === 'error',
    'focus:ring-1 focus:ring-success-base bg-success-100 text-sm':
      status === 'success',
    'focus:ring-1 focus:ring-warning-base bg-warning-100 text-sm':
      status === 'warning',
    'border-[0.5px] border-neutral-400 shadow-sm':
      status === 'none' || status === undefined,
  });
  const { field } = useController({
    ...props,
    rules: {
      required: props.required,
    },
  });

  const deleteItem = (index: number) => {
    // Duplikat array items ke dalam newItems
    const newItems = [...items];

    // Gunakan metode splice untuk menghapus elemen pada indeks tertentu
    newItems.splice(index, 1);

    // Atur state items dengan array yang telah dimodifikasi
    setItems(newItems);
    const newTags = newItems.join(','); // Assuming tags are comma-separated
    if (updateTags) {
      updateTags(newTags.split(','));
    }
  };

  return (
    <section className='space-y-3'>
      <h1 className='font-bold'>
        {label}
        <span className='text-warning-700'>*</span>
      </h1>
      <Controller
        // {...{ ...field, ...props }}
        name={props.name}
        control={props.control}
        rules={{ required: props.required }}
        render={({ field }) => (
          <div
            className={`overflow-y-clip w-full border-1 h-[40px] rounded-lg flex bg-white justify-center items-center border-[0.5px] border-neutral-400${inputStatus}`}
          >
            {items?.length > 0 && (
              <>
                <div className='flex gap-1 text-black px-2'>
                  {items?.map((item: string, index: number) => (
                    <div
                      className={
                        index % 2 === 0
                          ? 'bg-primary-100 text-primary-600 rounded px-1 py-1 text-sm'
                          : 'bg-yellow-100 text-yellow-700 rounded px-1 py-1 text-sm'
                      }
                      key={index}
                    >
                      <div className='flex gap-2'>
                        <span>{item}</span>
                        <button
                          onClick={() => {
                            deleteItem(index);
                          }}
                          className='font-bold hover:text-white'
                          type='button'
                        >
                          x
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {children}
            <input
              {...field}
              className='w-full opacity-100% h-full focus:outline-none text-black px-2 py-2'
              type='text'
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                // Cek apakah input aktif
                const isInputActive =
                  document.activeElement === inputRef.current;

                if (e.key === 'Enter' && !isInputActive) {
                  if (inputText.trim() !== '') {
                    setItems([...items, inputText]);

                    field.onChange([...items, inputText].toString());
                    setInputText('');
                  }
                  e.preventDefault();
                }
              }}
              placeholder={placeholder}
            />
          </div>
        )}
      />

      <span className={`${messageStatus} text-xs`}>{props.message}</span>
    </section>
  );
};

export default InputBadge;
