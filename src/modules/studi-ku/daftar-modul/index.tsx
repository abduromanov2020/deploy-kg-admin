import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { useState } from 'react';

import { UploadFile } from '@/components/upload-file';

import { EditorComponent } from './component'; // Sesuaikan path dengan file Anda
import { z } from 'zod';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  input1: z.string().nonempty(),
  input2: z.string().url(),
  input3: z.string().nonempty(),
});

export const DaftarModul = () => {
  const [uploadFile, setUploadFile] = useState<Array<{ upload: File | null }>>([
    { upload: null },
  ]);
  const [jumlahModul, setJumlahModul] = useState(1);
  const [jumlahUploadFile, setJumlahUploadFile] = useState(1); // [1, 2, 3
  const [editorStates, setEditorStates] = useState<Array<EditorState>>([
    EditorState.createEmpty(),
  ]);
  const [inputs, setInputs] = useState<
    Array<{
      input1: string;
      input2: string;
      input3: string;
    }>
  >([
    {
      input1: '',
      input2: '',
      input3: '',
    },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const handleInput1 = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newInputs = [...inputs];
    newInputs[index].input1 = e.target.value;
    setInputs(newInputs);
  };

  const handleInput2 = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newInputs = [...inputs];
    newInputs[index].input2 = e.target.value;
    setInputs(newInputs);
  };

  const handleEditorChange = (editorState: EditorState, index: number) => {
    const newEditorStates = [...editorStates];
    newEditorStates[index] = editorState;
    setEditorStates(newEditorStates);
    const newInputs = [...inputs];

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    newInputs[index].input3 = htmlContent;
    setInputs(newInputs);
  };

  const tambahModul = () => {
    setJumlahModul(jumlahModul + 1);
    setInputs([
      ...inputs,
      {
        input1: '',
        input2: '',
        input3: '',
      },
    ]);
  };

  const TambahUploadFile = () => {
    setJumlahUploadFile(jumlahUploadFile + 1);
    setUploadFile([
      ...uploadFile,
      {
        upload: null,
      },
    ]);
  };
  const handleFileChange = (file: File | null, index: number) => {
    setUploadFile((prevUploads) => {
      const newUploadFile = [...prevUploads];
      newUploadFile[index] = { upload: file };
      return newUploadFile;
    });
  };

  console.log(inputs);

  return (
    <div className='bg-white p-5 flex flex-col gap-5'>
      <div className='flex-col flex gap-8 bg-dark-200 p-5 rounded-md'>
        {inputs.map((input, index) => (
          <div key={index}>
            <EditorComponent
              key={index}
              editorStyle='gap-5 flex flex-col'
              input1Props={{
                title: `Judul Video ${index + 1}`,
                value: input.input1,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInput1(e, index),
                placeholder: `Masukan Judul Video ${index + 1}`,
                styleInput:
                  'border-2 mt-3 border-dark-300 px-4 py-1 rounded-md',
                styleTitle: 'text-dark',
              }}
              input2Props={{
                title: `Link Video ${index + 1}`,
                value: input.input2,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInput2(e, index),
                placeholder: `Masukan Link Video ${index + 1}`,
                styleInput:
                  'border-2 mt-3 border-dark-300 px-4 py-1 rounded-md',
                styleTitle: 'text-dark',
              }}
              editorInput={{
                editorState: editorStates[index],
                setEditorState: (editorState: EditorState) =>
                  handleEditorChange(editorState, index),
              }}
            />
          </div>
        ))}
        <button
          className='flex justify-end items-center text-primary-500 font-semibold'
          onClick={tambahModul}
        >
          Tambah Vidio
        </button>
      </div>
      <div className='flex-col flex gap-3 bg-dark-200 p-5 rounded-md'>
        {uploadFile.map((file, index) => (
          <div className='gap-2 flex flex-col' key={index}>
            <label className='text-dark font-semibold' htmlFor=''>
              Dokument {index + 1}
            </label>
            <UploadFile
              title='Upload File'
              onChange={(file: File | null) => handleFileChange(file, index)}
              nameFile={file.upload?.name}
              className='bg-white border-2 border-dark-300'
            />
          </div>
        ))}
        <button
          className='flex justify-end items-center text-primary-500 font-semibold'
          onClick={TambahUploadFile}
        >
          Tambah Upload
        </button>
      </div>
    </div>
  );
};
