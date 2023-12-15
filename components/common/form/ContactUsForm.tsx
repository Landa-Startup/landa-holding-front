'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ContactUSFormData } from '../../../types/global';
import GetCsrfToken from '../../../utils/get-csrf-token';
import NotificationSendForm from './NotificationSendForm';
import { ContactFormData } from '../../../initials/initObjects';
import { submitContactForm } from '../../../pages/api/contact-us';
import { PersonalInfoInput } from './PersonalInfoInput';
import Input from './Input';
import TextArea from '../TextArea';
import Button from '../Button';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/submitStore';
// import { on } from 'events';
export default function ContactUsForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactUSFormData>({
    mode: 'onBlur',
    defaultValues: ContactFormData,
  });

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange,
  } = useSubmit((s) => s)

  const lang = useLang((s) => s.lang)

  const { t } = useTranslation(lang, "formComponent")

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: ContactUSFormData) => {
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
    submitContactForm(sendFormData, csrfToken).then((response) => {
      console.log(response);

      handleSuccessChange(true);
      handleNotifChange(true);
      handleSendChange(false);
      reset(ContactFormData); // Reset the form after successful submission
      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    }).catch(() => {
      handleNotifChange(true);
      handleSendChange(false);
      handleSuccessChange(false);
      reset(ContactFormData);

      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    })
  };

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }))

  return (
    <div className='h-full flex flex-col justify-between items-center md:items-start'>
      <h2 className="text-center font-gilda text-5xl font-light">
        {t('contactForm', {returnObjects: true}).title}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2'>
        <div className="my-4 col-span-2 grid h-full grid-cols-1 gap-x-6 md:grid-cols-2">

          <PersonalInfoInput
            register={register}
            errors={errors}
            nameInputs={{
              firstName: "name",
              lastName: "",
              email: "email",
              phoneNumber: "number"
            }}
            noLabel={true}
          />

          <div className='col-span-1'>
            <Input
              register={register}
              errors={errors}
              nameInput='subject'
              type='text'
              required={t('contactForm', {returnObjects: true}).subjectRequired}
              patternValue=""
              patternMessage={t('contactForm', {returnObjects: true}).subjectRequired}
              placeholder={t('contactForm', {returnObjects: true}).subjectPlaceholder}
              className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-md dark:placeholder-[#9CA3AF]"
              labelClass='text-[#6b6b6b] dark:text-current'
              containerClass=''
            />
          </div>

          <div className='col-span-2'>
            <TextArea
              register={register}
              errors={errors}
              required={t('contactForm', {returnObjects: true}).messageRequired}
              nameTextArea='message'
              patternValue=''
              patternMessage=''
              placeholder={t('contactForm', {returnObjects: true}).messagePlaceholder}
              rows={4}
              cols={20}
            />
          </div>
        </div>  
        <div className='col-span-1'>
        <Button
          type='submit'
          bgColor="Primary"
          disabled={errorsList[0] ? true : false}
        />
        </div>
      </form>
      <NotificationSendForm />
    </div>
  );
}
