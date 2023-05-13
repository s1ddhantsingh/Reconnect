import { atom } from 'recoil';

export const idCounter = atom({
  key: 'idCounter',
  default: 0,
});
