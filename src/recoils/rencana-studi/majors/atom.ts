import { atom } from 'recoil';

import { TResponseAllMajors } from '@/types/rencana-studi/majors/types';

export const majorDataState = atom<TResponseAllMajors>({
  key: 'majors',
  default: {
    code: 0,
    status: '',
    message: '',
    data: {
       
  },
  meta: {
    page: 1,
    per_page: 0,
    page_size: 0,
    total_data: 0,
  }
  },
});