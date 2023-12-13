'use client';
import { useParams } from "next/navigation";
import React,{ useState, useContext, createContext } from "react";
import { ReactNode } from "react";
// import { useCookies } from 'react-cookie';

const value: { 
    isSubmitting: boolean; 
    isSuccess: boolean; 
    send: boolean; 
    showNotification: boolean; 
    csrfToken: string; 
    filePost: {businessPlanFile: File | ""};
    filePost2: {pitchDeckFile: File | ""};
    filePost3: {financialFile: File | ""};
    cvFileState: {cvFile: File | ""};
    handleBusinessFileChange: (file : File) => void;
    handlePitchFileChange: (file : File) => void;
    handleFinancialFileChange: (file : File) => void;
    handleCvFileChange: (file : File) => void;
    handleSubmitingChange: (value: boolean) => void; 
    handleSuccessChange: (value: boolean) => void; 
    handleSendChange: (value: boolean) => void; 
    handleNotifChange: (value: boolean) => void; 
    handleTokenChange: (str: string) => void;
    handleChangeSuccess: () => void;
    handleChangeReject: () => void;
    lang: string;
} = {
    isSubmitting: false,
    isSuccess: false,
    send: false,
    showNotification: false,
    csrfToken: "",
    filePost: {businessPlanFile: ""},
    filePost2: {pitchDeckFile: ""},
    filePost3: {financialFile: ""},
    cvFileState: {cvFile: ""},
    handleBusinessFileChange(file : File) {
        //
    },
    handlePitchFileChange(file : File) {
        //
    },
    handleFinancialFileChange(file : File) {
        //
    },
    handleCvFileChange(file) {
        //
    },
    handleSubmitingChange(value) {
        //
    },
    handleSuccessChange(value) {
        //
    },
    handleSendChange(value) {
        //
    },
    handleNotifChange(value) {
        //
    },
    handleTokenChange(str) {
        console.log(str);
    },
    handleChangeSuccess() {
        //
    },
    handleChangeReject() {
        //
    },
    lang: ""
}

const SubmitContext = createContext(value);

const SubmitProvider = ({ children} : { children : ReactNode}) => {

    // const [cookies, setCookies] = useCookies(['i18next'])

    // const lang = cookies.i18next;

    // console.log(lang);

    const path = useParams();

    // console.log(path?.lang);

    let lang = "";

    if (path?.lang) {
        if (path.lang == "en" || path.lang == "fa") {
            lang = path.lang;
        }
    }

    // console.log(lang);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [send, setSend] = useState(false);
    const [showNotification, setShowNotification] = useState(true);
    const [csrfToken, setCsrfToken] = useState('');
    const [cvFileState, setCvFileState] = useState<{ cvFile:  File | ''}>({
        cvFile: '',
      });
    
      const handleCvFileChange = (file : File) => {
        setCvFileState({cvFile : file});
      };
    const [filePost, setFilePost] = useState<{ businessPlanFile: File | '' }>({
        businessPlanFile: '',
      });
      const handleBusinessFileChange = (file : File) => {
        setFilePost({businessPlanFile : file})
      }
    
      const [filePost2, setFilePost2] = useState<{ pitchDeckFile: File | '' }>({
        pitchDeckFile: '',
      });
      const handlePitchFileChange = (file : File) => {
        setFilePost2({pitchDeckFile : file})
      }
    
      const [filePost3, setFilePost3] = useState<{ financialFile: File | '' }>({
        financialFile: '',
      });
      const handleFinancialFileChange = (file : File) => {
        setFilePost3({financialFile : file})
      }

    function handleSubmitingChange (value: boolean) {
        setIsSubmitting(value);
    }
    function handleSuccessChange (value: boolean) {
        setIsSuccess(value);
    }
    function handleSendChange (value: boolean) {
        setSend(value);
    }
    function handleNotifChange (value: boolean) {
        setShowNotification(value);
    }
    function handleTokenChange (str: string) {
        setCsrfToken(str);
    }

    function handleChangeSuccess () {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
    }

    function handleChangeReject () {
        handleNotifChange(true);
        handleSendChange(false);
        handleSuccessChange(false);
    }

    return (
        <SubmitContext.Provider 
          value={{
            isSubmitting, 
            isSuccess, 
            send, 
            showNotification, 
            csrfToken, 
            handleTokenChange, 
            handleSubmitingChange,
            handleSuccessChange,
            handleSendChange,
            handleNotifChange,
            handleChangeSuccess,
            handleChangeReject,
            filePost,
            filePost2,
            filePost3,
            cvFileState,
            handleBusinessFileChange,
            handleFinancialFileChange,
            handlePitchFileChange,
            handleCvFileChange,
            lang
          }}
        >
            {children}
        </SubmitContext.Provider>
    )
}

const useSubmit = () => {
    const context = useContext(SubmitContext);

    if (!context) {
        throw new Error("useSubmit must be used within a SubmitProvider");
    }
    return context;
}

export {
    SubmitProvider,
    useSubmit
};