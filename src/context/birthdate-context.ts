import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type BirthDateStoreType = {
  birthDate: string | null;
  setBirthDate: (birthDate: string) => void;
  clearBirthDate: () => void;
};

const useBirthDateStore = create<BirthDateStoreType>()(
  persist(
    (set) => ({
      birthDate: null,
      setBirthDate: (birthDate: string) => set({ birthDate }),
      clearBirthDate: () => set({ birthDate: null }),
    }),
    {
      name: 'birthdate-storage',
    }
  )
);

export default useBirthDateStore;
