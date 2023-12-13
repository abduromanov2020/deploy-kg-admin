import { TAllArticleResponse } from '@/types/sekilas-ilmu/types';
import { atom } from 'recoil';

export const articleDataState = atom<TAllArticleResponse>({
  key: 'article',
  default: {
    code: 0,
    status: '',
    message: '',
    data: {
        data: [  
        ],
        page_size: 0,
        total_data: 0,
        current_page: 1,
        max_page: 1,
    }
  },
});