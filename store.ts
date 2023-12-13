import { create } from "zustand";

type State = {
    lang : string;
    isSubmitting: boolean;
    isSuccess: boolean;
    send: boolean;
    showNotification: boolean;
    csrfToken: string;
    cvFileState: {cvFile:  File | ''};
    filePostPitch: {pitchDeckFile:  File | ''},
    filePostFinancial: {financialFile:  File | ''},
    filePostBussines: {businessPlanFile:  File | ''}
}

type Action = {
    updateLang: (lang: State['lang']) => void,
    handleCvFileChange: (file: State['cvFileState']) => void,
    handleBusinessFileChange: (file: State['filePostBussines']) => void,
    handlePitchFileChange: (file: State['filePostPitch']) => void,
    handleFinancialFileChange: (file: State['filePostFinancial']) => void,
    handleSubmitingChange: (bool: State['isSubmitting']) => void,
    handleSuccessChange: (bool: State['isSuccess']) => void,
    handleSendChange: (bool: State['send']) => void,
    handleNotifChange: (bool: State['send']) => void,
    handleTokenChange: (str: State['csrfToken']) => void,
    // handleChangeSuccess: () => void,
}

const useLang = create<State & Action>((set) => {
    return {
        lang: "",
        isSubmitting: false,
        isSuccess: true,
        send: false,
        showNotification: true,
        csrfToken: "",
        cvFileState: { cvFile: "" },
        filePostPitch: { pitchDeckFile: ""},
        filePostFinancial: { financialFile: ""},
        filePostBussines: { businessPlanFile: ""},
        updateLang: (lang) => set(() => ({ lang: lang })),
        handleCvFileChange: (file) => set(() => ({cvFileState: file})),
        handleBusinessFileChange: (file) => set(() => ({filePostBussines: file})),
        handlePitchFileChange: (file) => set(() => ({filePostPitch: file})),
        handleFinancialFileChange: (file) => set(() => ({filePostFinancial: file})),
        handleSubmitingChange: (bool) => set(() => ({isSubmitting: bool})),
        handleSuccessChange: (bool) => set(() => ({isSuccess: bool})),
        handleSendChange: (bool) => set(() => ({send: bool})),
        handleNotifChange: (bool) => set(() => ({showNotification: bool})),
        handleTokenChange: (str) => set(() => ({csrfToken: str})),
    };
});

export { useLang }