import { atom } from 'recoil';

import { TQuizDataPayload } from '@/types/studi-ku/quiz';

export const quizDataAtom = atom<TQuizDataPayload[]>({
  key: 'quiz-data',
  default: [
    {
      id: '1',
      number: 0,
      question: '',
      options: [
        {
          correct: false,
          option: '',
        },
        {
          correct: false,
          option: '',
        },
        {
          correct: false,
          option: '',
        },
        {
          correct: false,
          option: '',
        },
      ],
    },
  ],
});
