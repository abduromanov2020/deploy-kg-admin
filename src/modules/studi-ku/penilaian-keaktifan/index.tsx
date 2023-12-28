'use client';

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { TitleModule } from '@/modules/studi-ku/modul/tambah/TitleModule';
import { PENILAIAN_KEAKTIFAN_BREADCRUMBS } from '@/modules/studi-ku/penilaian-keaktifan/constant';

export default function PenilaianKeaktifanModule() {
  return (
    <div className='flex flex-col gap-6'>
      <Card>
        <CardHeader>
          <BreadCrumb
            items={PENILAIAN_KEAKTIFAN_BREADCRUMBS}
            className='!p-0 '
          />
        </CardHeader>
      </Card>
      <Card>
        <TitleModule title='Nilai Keaktifan : Pertemuan 1' />
        <CardContent className='py-6'>
          <div className='flex flex-row gap-4'>
            <div className='w-1/3 relative'>
              <Input
                type='text'
                placeholder='Cari Mahasiswa'
                className='pl-10'
              />
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <AiOutlineSearch className='text-gray-400' size={20} />
              </div>
            </div>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Pilih Mahasiswa' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='mahasiswa'>Mahasiswa 1</SelectItem>
                <SelectItem value='mahasiswa'>Mahasiswa 2</SelectItem>
                <SelectItem value='mahasiswa'>Mahasiswa 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='border border-gray-300 my-4 rounded-sm'>
            <div className='border-b border-gray-300 px-6 py-4'>
              <p className='font-medium'>Erif Michael</p>
            </div>
            <div className='flex flex-col gap-6 p-6'>
              <p className='font-medium'>
                Inisiatif menyampaikan gagasan dalam forum
              </p>
              <div>
                <RadioGroup defaultValue='sangat-baik'>
                  <div className='grid grid-cols-4 gap-4'>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='sangat-baik'
                        id='sangat-baik'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='sangat-baik'>
                          Sangat Baik
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta memahami topik diskusi dan menyampaikan
                          gagasan, pendapat, atau pertanyaan yang sesuai dengan
                          topik diskusi secara jelas dan lugas. Isi gagasan
                          mengandung pemikiran baru dari peserta.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='baik'
                        id='baik'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='baik'>
                          Baik
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta menyampaikan gagasan, pendapat, atau
                          pertanyaan yang sesuai dengan topik diskusi tanpa
                          ditunjuk. Isi gagasan lebih berupa pengulangan materi
                          tanpa ada pemikiran baru yang ditambahkan.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='cukup'
                        id='cukup'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='cukup'>
                          Cukup
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta menyampaikan gagasan, pendapat, atau
                          pertanyaan saat diminta atau dipersilakan. Isi gagasan
                          lebih berupa pengulangan materi tanpa ada pemikiran
                          baru yang ditambahkan.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='buruk'
                        id='buruk'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='buruk'>
                          Buruk
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta tidak menyampaikan gagasan, pendapat, atau
                          pertanyaan sama sekali
                        </p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className='flex flex-col gap-6 p-6 bg-gray-200'>
              <p className='font-medium'>Merespon gagasan dalam artikel </p>
              <div>
                <RadioGroup defaultValue='sangat-baik'>
                  <div className='grid grid-cols-4 gap-4'>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='sangat-baik'
                        id='sangat-baik'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='sangat-baik'>
                          Sangat Baik
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta mendengarkan orang lain sampai selesai
                          menyampaikan gagasannya, kemudian memberikan respons,
                          pendapat, atau jawaban yang sesuai dengan pertanyaan
                          atau topik diskusi secara bernas, reflektif, serta
                          memberikan apresiasi terhadap pendapat orang lain.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='baik'
                        id='baik'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='baik'>
                          Baik
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta mendengarkan orang lain sampai selesai
                          menyampaikan gagasannya, kemudian memberikan respons,
                          pendapat, atau jawaban yang sesuai dengan pertanyaan
                          atau topik diskusi, walaupun tidak dijabarkan dengan
                          bernas. Peserta memberikan apresiasi terhadap pendapat
                          orang lain
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='cukup'
                        id='cukup'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='cukup'>
                          Cukup
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta mendengarkan orang lain sampai selesai
                          menyampaikan gagasannya, namun respons yang diberikan
                          minimal, misalnya "Oke", "Setuju dengan pendapat
                          Bapak/ Ibu", "Mantap", "Sip", dll.
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='buruk'
                        id='buruk'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='buruk'>
                          Buruk
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta tidak memberikan respons apapun, atau
                          cenderung menyela/ menginterupsi/ memotong saat orang
                          lain tengah menyampaikan pendapat.
                        </p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className='flex flex-col gap-6 p-6'>
              <p className='font-medium'>Komitmen Diri</p>
              <div>
                <RadioGroup defaultValue='sangat-baik'>
                  <div className='grid grid-cols-4 gap-4'>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='sangat-baik'
                        id='sangat-baik'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='sangat-baik'>
                          Sangat Baik
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta mengikuti instruksi dalam penyelesaian tugas,
                          menyelesaikan tugas tepat waktu, dan memperlihatkan
                          antusiasme belajar dalam setiap aktivitas kegiatan
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='baik'
                        id='baik'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='baik'>
                          Baik
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta mengikuti instruksi dalam penyelesaian tugas,
                          menyelesaikan tugas di batas akhir tenggat waktu
                          pengumpulan
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='cukup'
                        id='cukup'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='cukup'>
                          Cukup
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta beberapa kali menanyakan instruksi dalam
                          penyelesaian tugas, menyelesaikan tugas di batas akhir
                          tenggat waktu pengumpulan atau melewati tenggat waktu
                          dengan menginfokan ke Pengajar
                          Praktik/Fasilitator/Instruktur
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='buruk'
                        id='buruk'
                        className='self-start border-blue-700 text-blue-700'
                      />
                      <div className='flex h-full gap-1.5 flex-col'>
                        <Label className='font-medium' htmlFor='buruk'>
                          Buruk
                        </Label>
                        <p className='text-sm font-light'>
                          Peserta tidak mengikuti instruksi dalam penyelesaian
                          tugas, tidak menyelesaikan tugas sama sekali.
                        </p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className='flex flex-col gap-6 p-6 bg-gray-200'>
              <p className='font-medium'>Total Nilai Keaktifan : 100 </p>
            </div>
          </div>
          <div className='flex justify-end gap-2.5'>
            <Button variant='primaryOutline'>Simpan Perubahan</Button>
            <Button variant='primary'>Simpan & Lanjutkan</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
