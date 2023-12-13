'use client'
import React, { useEffect } from 'react';
// import { PersonalInfoInput } from './PersonalInfoInput';
import GetCsrfToken from '@/utils/get-csrf-token';
import { useForm } from 'react-hook-form';
import { HandicraftFormData } from 'initials/initObjects';
import { HandicraftForm } from '../../../types/global';

import { useTranslation } from 'app/i18n/client';
import ButtonRefactor from '../ButtonRefactor';
import { useLang } from 'store';
import { submitHandiCraftApplicationForm } from 'pages/api/handiCrafts';

// import { HandicraftForm, HandicraftForm } from '@/types/global';
export default function HandicraftForm() {

  const { 
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange,
    lang
   } = useLang((s) => s)

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm<HandicraftForm>({
      mode: 'onBlur',
      defaultValues: HandicraftFormData
    });

  //   const {
      // csrfToken,
      // handleTokenChange,
      // handleSubmitingChange,
      // handleSendChange,
      // handleNotifChange,
  //     handleChangeSuccess,
  //     handleChangeReject
  //   } = useSubmit();

    useEffect(() => {
      async function fetchCsrfToken() {
        const token = await GetCsrfToken(
          `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
        );
        handleTokenChange(token);
      }

      fetchCsrfToken();
    }, []);

    const onSubmit = async (formData: HandicraftForm) => {
      // Set loading and sending states.
      handleSubmitingChange(true);
      handleSendChange(true);

      // Create a FormData object for form data.
      const sendFormData = new FormData();

      // Append all non-file form fields.
      Object.entries(formData).forEach(([fieldName, fieldValue]) => {
        if (typeof fieldValue !== 'object' || fieldValue === null) {
          sendFormData.append(fieldName, String(fieldValue));
        }
      });

      // Send the form data to the API.
      submitHandiCraftApplicationForm(sendFormData, csrfToken)
        .then((response) => {
          console.log(response);

          handleSuccessChange(true);
          handleNotifChange(true);
          handleSendChange(false);
          reset(HandicraftFormData); // Reset the form after successful submission
          setTimeout(() => {
            handleNotifChange(false);
          }, 10000); // 10 seconds in milliseconds
        })
        .catch(() => {
          handleNotifChange(true);
          handleSendChange(false);
          handleSuccessChange(false);
          reset(HandicraftFormData);

          setTimeout(() => {
            handleNotifChange(false);
          }, 10000); // 10 seconds in milliseconds
        });
    };

    // const errorsList = Object.entries(errors).map(([name, value]) => ({
    //   name: name,
    //   value: value
    // }));

  const { t } = useTranslation(lang, 'handicraft');

  return (
    // <form className="flex flex-col gap-4">
    //   <PersonalInfoInput
    //     lang={lang}
    //     errors={''}
    //     register={''}
    //     nameInputs={{
    //       firstName: 'First Name',
    //       lastName: 'Last Name',
    //       email: 'Email',
    //       phoneNumber: ''
    //     }}
    //   />
    // </form>
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 justify-items-center gap-4 md:w-1/2">
      <input
        className="h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
        placeholder={t('form.firstName')}
      ></input>
      <input
        className="h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
        placeholder={t('form.lastName')}
      ></input>
      <input
        className="col-span-2 h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
        placeholder={t('form.email')}
      ></input>
      <input
        className="col-span-2 h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
        placeholder={t('form.organization')}
      ></input>
      <div className="col-span-2">
        <ButtonRefactor text={t('form.submit')} type="submit" />
      </div>
    </form>
  );
}
