import { create } from "zustand";
import { MagazineData } from '@/types/global';



type State = {
    isSubmitting: boolean;
    isSuccess: boolean;
    send: boolean;
    showNotification: boolean;
    csrfToken: string;
    selectedRole: string;
    cardsData: MagazineData[];
    cardData: MagazineData;
    categories: any[];
    tags: any[];
}

type Action = {
    handleSubmitingChange: (bool: State['isSubmitting']) => void,
    handleSuccessChange: (bool: State['isSuccess']) => void,
    handleSendChange: (bool: State['send']) => void,
    handleNotifChange: (bool: State['send']) => void,
    handleTokenChange: (str: State['csrfToken']) => void,
    updateRole: (role: State['selectedRole']) => void,
    setCardsData: (data: State["cardsData"]) => void,
    setCardData: (data: State["cardData"]) => void,
    setCategories: (category: State["categories"]) => void,
    setTags: (tags: State["tags"]) => void,
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
        cardsData: [],
        cardData: {
            title: "",
            description: "",
            thumbnail: "",
            slug: "",
            date: "",
            file: "",
        },
        categories: [],
        tags: [],
        handleSubmitingChange: (bool) => set(() => ({isSubmitting: bool})),
        handleSuccessChange: (bool) => set(() => ({isSuccess: bool})),
        handleSendChange: (bool) => set(() => ({send: bool})),
        handleNotifChange: (bool) => set(() => ({showNotification: bool})),
        handleTokenChange: (str) => set(() => ({csrfToken: str})),
        updateRole: (role) => set(() => ({selectedRole: role})),
        setCardsData: (data) => set(() => ({cardsData: data})),
        setCategories: (categories) => set(() => ({categories: categories})),
        setTags: (tags) => set(() => ({tags: tags})),
        setCardData: (cardData) => set(() => ({cardData: cardData}))
    };
});

export { useSubmit }