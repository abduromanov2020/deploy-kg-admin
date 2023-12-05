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
  input2Props: InputProps;
  input3Props: InputProps;
}
export const EditorComponent: React.FC<EditorProps> = ({
  input1Props,
  input2Props,
  input3Props,
}) => {
  return (
    <div>
      <div className='bg-slate-50 rounded px-5 py-5'>
        <div>
          <h1>Mata Kuliah Ajar 1</h1>

          <div className=' grid grid-cols-3 gap-5 pt-5'>
            <ComboBoxProramStudi />
            <InputComponent
              {...input2Props}
              styleWrapper='w-full col-span-1 flex flex-col'
            />
            <InputComponent
              {...input3Props}
              styleWrapper='w-full col-span-1 flex flex-col'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
