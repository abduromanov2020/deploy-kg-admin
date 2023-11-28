import dynamic from 'next/dynamic';
import React from 'react';

import { InputComponent } from '@/components/input';
import { DraftEditorProps } from '@/components/text-editor';

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

  editorStyle: string;
  editorInput: DraftEditorProps;
}
const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});
export const EditorCoverComponent: React.FC<EditorProps> = ({
  input1Props,

  editorStyle,
  editorInput,
}) => {
  return (
    <div className={editorStyle}>
      <div className='gap-2 w-full grid grid-cols-1'>
        <InputComponent
          {...input1Props}
          styleWrapper='w-full col-span-1 flex flex-col'
        />
      </div>
      <p className='text-dark'>Deskripsi Modul</p>
      <DraftEditor {...editorInput} />
    </div>
  );
};
