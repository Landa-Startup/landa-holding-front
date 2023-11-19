'use client';
import React from "react"
import { useState, useContext } from "react";
import { ReactNode } from "react";
import { createContext } from "react"

let value: { 
    isSubmitting: boolean; 
    isSuccess: boolean; 
    send: boolean; 
    showNotification: boolean; 
    csrfToken: string; 
    handleSubmitingChange: (value: boolean) => void; 
    handleSuccessChange: (value: boolean) => void; 
    handleSendChange: (value: boolean) => void; 
    handleNotifChange: (value: boolean) => void; 
    handleTokenChange: (str: string) => void;
    handleChangeSuccess: () => void;
    handleChangeReject: () => void;
} = {
    isSubmitting: false,
    isSuccess: false,
    send: false,
    showNotification: false,
    csrfToken: "",
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
}

const SubmitContext = createContext(value);

const SubmitProvider = ({ children } : { children:ReactNode }) => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [send, setSend] = useState(false);
    const [showNotification, setShowNotification] = useState(true);
    const [csrfToken, setCsrfToken] = useState('');

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
            handleChangeReject
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