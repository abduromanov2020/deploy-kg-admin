import { Edit } from 'lucide-react';
import React from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';
import {
  DATA_REFLEKSI_EKSPLORASI,
  REFLEKSI_EKSPLORASI_MODULE_BREADCRUMBS,
} from '@/modules/studi-ku/refleksi-eksplorasi/constant';
import QuestionSummarySection from '@/modules/studi-ku/refleksi-eksplorasi/questions-summary';
import ResponseListSection from '@/modules/studi-ku/refleksi-eksplorasi/response-list';

const RefleksiEksplorasiModule = () => {
  const data = DATA_REFLEKSI_EKSPLORASI;
  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-white w-full rounded-md shadow-md p-5'>
        <BreadCrumb
          items={REFLEKSI_EKSPLORASI_MODULE_BREADCRUMBS}
          className='!p-0 '
        />
      </div>
      <div className='bg-white flex flex-col gap-8 rounded-md pb-5 '>
        <div className='flex justify-between items-center'>
          <TitleModule title='Refleksi Eksplorasi' />
        </div>
        <div className='px-5 flex flex-col gap-4'>
          <Table className='rounded-xl border  shadow-sm text-dark-900'>
            <TableBody>
              <TableRow>
                <TableCell className='border-r font-semibold px-5 w-40 text-start align-top'>
                  Pertemuan
                </TableCell>
                <TableCell className=' flex flex-col gap-3'>
                  {data.overview.session}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='border-r font-semibold px-5 w-40 text-start align-top'>
                  Pertanyaan
                </TableCell>
                <TableCell className=' flex flex-col gap-3'>
                  <div
                    className='col-span-4 text-dark-900 text-sm wrapper-dangerously-html'
                    dangerouslySetInnerHTML={{
                      __html: data.overview.questions,
                    }}
                  ></div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='border-r font-semibold px-5 w-40 text-start align-top'>
                  Jumlah Response
                </TableCell>
                <TableCell className=' flex flex-col gap-3'>
                  <div
                    className='col-span-4 text-dark-900 text-sm list-decimal '
                    dangerouslySetInnerHTML={{
                      __html: data.overview.total_response,
                    }}
                  ></div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='border-r font-semibold px-5 w-40 text-start align-top'></TableCell>
                <TableCell className=' flex  gap-3'>
                  <Button
                    variant='primary'
                    type='submit'
                    className='bg-primary-500 text-white px-4 py-2 rounded-md flex gap-2'
                  >
                    <Edit />
                    Edit Pertanyaan
                  </Button>
                  <Button
                    variant='outline'
                    className='text-red-800 border-red-800 flex gap-2 hover:text-white hover:bg-red-800'
                  >
                    Hapus Pertanyaan
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Tabs defaultValue='questions-summary' className='w-full'>
            <TabsList className='mb-5 flex justify-between'>
              <div>
                <TabsTrigger value='questions-summary' className='px-5'>
                  Ringkasan Jawaban
                </TabsTrigger>
                <TabsTrigger value='response-list' className='px-5'>
                  Daftar Response
                </TabsTrigger>
              </div>
            </TabsList>
            <div>
              <TabsContent value='questions-summary'>
                <QuestionSummarySection data={data} />
              </TabsContent>
              <TabsContent value='response-list'>
                <ResponseListSection data={data} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RefleksiEksplorasiModule;
