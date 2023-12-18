import { create } from 'zustand';
import { CookieValueTypes, getCookie } from 'cookies-next';



type State = {
  lang: string | CookieValueTypes | undefined;
  setLanguage: (language: string) => void;
};

const langCookie = getCookie("i18next");

export const useLang = create<State>((set) => ({
  lang: langCookie,
  setLanguage: (lang) => set(() => ({ lang }))
}));
