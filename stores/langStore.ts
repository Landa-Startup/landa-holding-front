import { create } from "zustand";

type State = {
    lang : string;
}

type Action = {
    updateLang: (lang: State['lang']) => void,
    // handleChangeSuccess: () => void,
}

const useLang = create<State & Action>((set) => {
    return {
        lang: "",
        updateLang: (lang) => set(() => ({ lang: lang })),
    };
});

export { useLang }