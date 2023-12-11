import { create } from "zustand";
import {cookieName } from './app/i18n/setting';
import { parseCookies } from 'nookies';

type State = {
    lang : string;
}

type Action = {
    updateLang: (lang: State['lang']) => void
}

const useLang = create<State & Action>((set) => {
    return {
        lang: "en",
        updateLang: (lang) => set(() => ({ lang: lang })),
    };
});

export { useLang}