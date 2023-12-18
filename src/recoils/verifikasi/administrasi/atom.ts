import { atom } from 'recoil';

export const selectedIdsState = atom<string[]>({
  key: 'selectedIdsState',
  default: [], 
});