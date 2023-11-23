import { zodResolver } from '@hookform/resolvers/zod';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { UploadFile } from '@/components/upload-file';

import { EditorCoverComponent } from '@/modules/studi-ku/daftar-modul/component/EditorCoverComponent';
import { TAMBAH_MODULE_BREADCRUMBS } from '@/modules/studi-ku/daftar-modul/constant';

import { EditorComponent } from './component/EditorComponent'; // Sesuaikan path dengan file Anda

export const DaftarModul = () => {
  const ValidationSchemaCoverModul = z.object({
    input1: z.string(),
    input2: z.string(),
  });

  const form = useForm<z.infer<typeof ValidationSchemaCoverModul>>({
    resolver: zodResolver(ValidationSchemaCoverModul),
  });

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

  const [editorStateCover, setEditorStateCover] = useState<Array<EditorState>>([
    EditorState.createEmpty(),
  ]);
  const [inputCover, setInputCover] = useState<
    Array<{
      input1: string;
      input2: string;
    }>
  >([
    {
      input1: '',
      input2: '',
    },
  ]);

  const handleInputCover1 = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newInputs = [...inputCover];
    newInputs[index].input1 = e.target.value;
    setInputCover(newInputs);
  };

  const handleEditorChangeCover = (editorState: EditorState, index: number) => {
    const newEditorStates = [...editorStates];
    newEditorStates[index] = editorState;
    setEditorStateCover(newEditorStates);
    const newInputs = [...inputCover];

    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);

    newInputs[index].input2 = htmlContent;
    setInputCover(newInputs);
  };

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

  function onSubmit(data: z.infer<typeof ValidationSchemaCoverModul>) {
    toast.success('Form submitted!');
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb items={TAMBAH_MODULE_BREADCRUMBS} className='!p-0 ' />
      </div>
      <Form {...form}>
        <form
          {...form}
          onSubmit={form.handleSubmit(onSubmit)}
          className='bg-white flex flex-col gap-5 rounded-md pb-5 '
        >
          <div className='flex justify-between w-full  border-b border-slate-200 p-4 items-center'>
            <p className='text-dark-900 font-semibold '>
              Daftar Modul Mata Kuliah Manajemen Keuangan
            </p>
          </div>
          <div className='px-5'>
            <div className='flex-col flex bg-dark-200 p-5 rounded-md'>
              <h3 className='font-semibold text-xl mb-4 text-dark-900'>
                Cover
              </h3>
              <div className='flex flex-col gap-8'>
                {inputCover.map((input, index) => (
                  <div key={index}>
                    <EditorCoverComponent
                      key={index}
                      editorStyle='gap-3 flex flex-col'
                      input1Props={{
                        title: `Judul Modul ${index + 1}`,
                        value: input.input1,
                        onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                          handleInputCover1(e, index),
                        placeholder: `Masukan Judul Modul ${index + 1}`,
                        styleInput:
                          'border-2 mt-3 border-dark-300 px-4 py-1 rounded-md',
                        styleTitle: 'text-dark',
                      }}
                      editorInput={{
                        editorState: editorStateCover[index],
                        setEditorState: (editorState: EditorState) =>
                          handleEditorChangeCover(editorState, index),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='px-5'>
            <div className='flex-col flex bg-dark-200 p-5 rounded-md'>
              <h3 className='font-semibold text-xl mb-4 text-dark-900'>
                Video Pembelajaran
              </h3>
              <div className='flex flex-col gap-8'>
                {inputs.map((input, index) => (
                  <div key={index}>
                    <EditorComponent
                      key={index}
                      editorStyle='gap-3 flex flex-col'
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
              </div>
              <button
                className='flex justify-end items-center text-primary-500 font-semibold mt-3'
                onClick={tambahModul}
              >
                Tambah Vidio
              </button>
            </div>
          </div>
          <div className='px-5'>
            <div className='flex flex-col bg-dark-200 p-5 rounded-md'>
              <h3 className='font-semibold text-xl mb-4 text-dark-900'>
                Dokumen Pembelajaran
              </h3>
              <div className='flex-col flex gap-3 bg-dark-200 rounded-md'>
                {uploadFile.map((file, index) => (
                  <div className='gap-2 flex flex-col' key={index}>
                    <label className='text-dark font-semibold' htmlFor=''>
                      Dokument {index + 1}
                    </label>
                    <UploadFile
                      title='Upload File'
                      onChange={(file: File | null) =>
                        handleFileChange(file, index)
                      }
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
          </div>
          <div className='flex w-full justify-end gap-5 px-5'>
            <Button variant='primaryOutline'>Kembali</Button>
            <Button
              variant='primary'
              type='submit'
              className='bg-primary-500 text-white px-4 py-2 rounded-md'
            >
              Simpan Perubahan
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
