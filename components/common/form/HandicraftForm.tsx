'use client'
import React, { useEffect } from 'react';
import { PersonalInfoInput } from './PersonalInfoInput';
import GetCsrfToken from '@/utils/get-csrf-token';
import { useForm } from 'react-hook-form';
import { HandicraftFormData } from 'initials/initObjects';
import { HandicraftForm } from '../../../types/global';
import Input from './Input';

// import { useTranslation } from 'app/i18n/client';
// import ButtonRefactor from '../ButtonRefactor';
import Button from '../Button';
import { useLang } from 'stores/langStore';
import { submitHandiCraftApplicationForm } from 'pages/api/handiCrafts';
import { useSubmit } from 'stores/dataStore';

// import { HandicraftForm, HandicraftForm } from '@/types/global';
export default function HandicraftForm() {

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange,
  } = useSubmit((s) => s)

  const lang = useLang((s) => s.lang)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<HandicraftForm>({
    mode: 'onBlur',
    defaultValues: HandicraftFormData
  });

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

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }));

  // const { t } = useTranslation(lang, 'handicraft');

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
    // <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 justify-items-center gap-4 md:w-1/2">
    //   <input
    //     className="h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
    //     placeholder={t('form.firstName')}
    //   ></input>
    //   <input
    //     className="h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
    //     placeholder={t('form.lastName')}
    //   ></input>
    //   <input
    //     className="col-span-2 h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
    //     placeholder={t('form.email')}
    //   ></input>
    //   <input
    //     className="col-span-2 h-[50px] w-full rounded-lg border-[#FAFAFA] bg-[#FAFAFA] p-4 shadow-sm"
    //     placeholder={t('form.organization')}
    //   ></input>
    //   <div className="col-span-2">
    //     <ButtonRefactor text={t('form.submit')} type="submit" />
    //   </div>
    // </form>

    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col items-center">
      <div className="my-4 grid w-full grid-cols-1 md:flex md:w-2/5 md:flex-col md:items-center lg:w-2/5">
        <div className='grid w-full grid-cols-1 gap-x-3 md:grid-cols-2'>
          <PersonalInfoInput
            register={register}
            errors={errors}
            nameInputs={{
              firstName: 'name',
              lastName: '',
              email: '',
              phoneNumber: 'phone'
            }}
            noLabel={true}
          />
        </div>
        {/* TODO: delete hardcodes */}
        <div className="col-span-1 w-full">
          <Input
            register={register}
            errors={errors}
            nameInput="email"
            type="text"
            required={lang === "en" ? "Your email is required" : "وارد کردن ایمیل الزامی است"}
            patternValue=""
            patternMessage={lang === "en" ? "Your email is required" : "وارد کردن ایمیل الزامی است"}
            placeholder={
              lang === 'en'
                ? 'Your Email'
                : 'ایمیل شما'
            }
            className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
            containerClass="w-full" />
        </div>

        <div className="col-span-1 w-full">
          <Input
            register={register}
            errors={errors}
            nameInput="company"
            type="text"
            required={lang === "en" ? "Your company name is required" : "وارد کردن نام شرکت الزامی است"}
            patternValue=""
            patternMessage=""
            placeholder={
              lang === 'en'
                ? 'Name of Your Organization, if applicable'
                : 'نام شرکت خود را در صورت امکان وارد کنید'
            }
            className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
            containerClass="w-full"
            labelClass=""
          />
        </div>
      </div>

      <div className="w-full text-center md:w-auto">
        <Button
          type='submit'
          bgColor="Primary"
          disabled={errorsList[0] ? true : false}
          lang={lang}
        />
        {/* <ButtonRefactor type="submit" text="Submit" /> */}
      </div>
    </form>
  );
}