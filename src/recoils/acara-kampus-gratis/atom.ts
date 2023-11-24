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
  key: 'cover-data',
  default: null,
});
