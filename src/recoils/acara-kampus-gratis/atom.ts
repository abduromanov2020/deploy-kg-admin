import { atom } from 'recoil';

export const activeTabAtom = atom({
  key: 'active-tab',
  default: 'cover',
});

export const coverFilledAtom = atom({
  key: 'cover-filled',
  default: false,
});

export const CoverDataAtom = atom({
  dangerouslyAllowMutability: true,
  key: 'cover-data',
  default: {
    name: '',
    price: '',
    date_start: '',
    date_end: '',
    thumbnail: null,
  },
});
