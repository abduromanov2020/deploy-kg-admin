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
  input2Props: InputProps;
  editorStyle: string;
  editorInput: DraftEditorProps;
}
const DraftEditor = dynamic(() => import('@/components/text-editor'), {
  ssr: false,
});
export const EditorComponent: React.FC<EditorProps> = ({
  input1Props,
  input2Props,
  editorStyle,
  editorInput,
}) => {
  return (
    <div className={editorStyle}>
      <div className='flex gap-2 w-full grid grid-cols-2'>
        <InputComponent
          {...input1Props}
          styleWrapper='w-full col-span-1 flex flex-col'
        />
        <InputComponent
          {...input2Props}
          styleWrapper='w-full col-span-1 flex flex-col'
        />
      </div>
      <DraftEditor {...editorInput} />
    </div>
  );
};
