import { create } from 'zustand';

type State = {
  lang: string;
  setLanguage: (language: string) => void;
};

export const useLang = create<State>((set) => ({
  lang: 'en',
  setLanguage: (lang) => set(() => ({ lang }))
}));
