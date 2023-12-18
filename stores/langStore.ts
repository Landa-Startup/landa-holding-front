import { create } from 'zustand';
import { CookieValueTypes, getCookie } from 'cookies-next';

import { useTranslation } from "app/i18n/client";

function roleFinder(lang: string) {
    const { t } = useTranslation(lang, "ourTeam");

    return t('roles', { returnObjects: true });
}


type State = {
  lang: string | CookieValueTypes | undefined;
  setLanguage: (language: string) => void;
};

const langCookie = getCookie("i18next");

export const useLang = create<State>((set) => ({
  lang: langCookie ? langCookie : "en",
  setLanguage: (lang) => set(() => ({ lang }))
}));
