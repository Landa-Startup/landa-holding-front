import { create } from "zustand";


type State = {
    isSubmitting: boolean;
    isSuccess: boolean;
    send: boolean;
    showNotification: boolean;
    csrfToken: string;
    selectedRole: string;
}

type Action = {
    handleSubmitingChange: (bool: State['isSubmitting']) => void,
    handleSuccessChange: (bool: State['isSuccess']) => void,
    handleSendChange: (bool: State['send']) => void,
    handleNotifChange: (bool: State['send']) => void,
    handleTokenChange: (str: State['csrfToken']) => void,
    updateRole: (role: State['selectedRole']) => void
    // handleChangeSuccess: () => void,
}

const useSubmit = create<State & Action>((set) => {
    return {
        isSubmitting: false,
        isSuccess: true,
        send: false,
        showNotification: true,
        csrfToken: "",
        selectedRole: "All",
        handleSubmitingChange: (bool) => set(() => ({isSubmitting: bool})),
        handleSuccessChange: (bool) => set(() => ({isSuccess: bool})),
        handleSendChange: (bool) => set(() => ({send: bool})),
        handleNotifChange: (bool) => set(() => ({showNotification: bool})),
        handleTokenChange: (str) => set(() => ({csrfToken: str})),
        updateRole: (role) => set(() => ({selectedRole: role}))
    };
});

export { useSubmit }