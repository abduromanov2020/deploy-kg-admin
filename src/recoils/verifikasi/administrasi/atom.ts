import { atom } from 'recoil';

export const selectedIdsState = atom<string[]>({
  key: 'selectedIdsState',
  default: [], 
});

export const isOpenModalAcc = atom({
  key: 'is-open-modal-acc',
  default: false,
});

export const isOpenModalReject = atom({
  key: 'is-open-modal-reject',
  default: false,
});