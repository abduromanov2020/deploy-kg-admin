import React from 'react';

import { InputComponent } from '@/components/input';

import { ComboBoxProramStudi } from '@/modules/user-management/dosen/editdata/component/combobox';

interface InputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  styleInput: string;
  styleTitle: string;
}

interface EditorProps {
  input1Props: InputProps;
  titleMajor?: string;
}
export const EditorComponent: React.FC<EditorProps> = ({
  input1Props,
  titleMajor,
}) => {
  return (
    <div>
      <div className='bg-slate-50 rounded px-5 py-5'>
        <div>
          <h1>{titleMajor}</h1>

          <div className=' grid grid-cols-2 gap-5 pt-5'>
            <div className='flex flex-col space-y-3'>
              <label htmlFor=''>Program Studi*</label>
              <ComboBoxProramStudi />
            </div>
            <InputComponent
              {...input1Props}
              styleWrapper='w-full col-span-1 flex flex-col'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
