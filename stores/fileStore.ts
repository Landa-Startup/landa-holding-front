import { create } from "zustand";

type State = {
    cvFileState: {cvFile:  File | ''};
    filePostPitch: {pitchDeckFile:  File | ''},
    filePostFinancial: {financialFile:  File | ''},
    filePostBussines: {businessPlanFile:  File | ''}
}

type Action = {
    handleCvFileChange: (file: State['cvFileState']) => void,
    handleBusinessFileChange: (file: State['filePostBussines']) => void,
    handlePitchFileChange: (file: State['filePostPitch']) => void,
    handleFinancialFileChange: (file: State['filePostFinancial']) => void,
}

const useFile = create<State & Action>((set) => {
    return {
        cvFileState: { cvFile: "" },
        filePostPitch: { pitchDeckFile: ""},
        filePostFinancial: { financialFile: ""},
        filePostBussines: { businessPlanFile: ""},
        handleCvFileChange: (file) => set(() => ({cvFileState: file})),
        handleBusinessFileChange: (file) => set(() => ({filePostBussines: file})),
        handlePitchFileChange: (file) => set(() => ({filePostPitch: file})),
        handleFinancialFileChange: (file) => set(() => ({filePostFinancial: file})),
    };
});

export { useFile }