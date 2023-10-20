import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type BirthDateType = {
  day: number;
  month: number;
  year: number;
};

type BirthDateStoreType = {
  birthDate: BirthDateType | null;
  setBirthDate: (birthDate: BirthDateType) => void;
  clearBirthDate: () => void;
};

const useBirthDateStore = create<BirthDateStoreType>()(
  persist(
    (set) => ({
      birthDate: null,
      setBirthDate: (birthDate: BirthDateType) => set({ birthDate }),
      clearBirthDate: () => set({ birthDate: null }),
    }),
    {
      name: 'birthdate-storage',
    }
  )
);

export default useBirthDateStore;
