'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ContactUSFormData } from '../../../types/global';
import GetCsrfToken from '../../../utils/get-csrf-token';
import NotificationSendForm from './NotificationSendForm';
import { ContactFormData } from '../../../initials/initObjects';
import { submitContactForm } from '../../../pages/api/contact-us';
import { useSubmit } from '../../../providers/StateProvider';
import { PersonalInfoInput } from './PersonalInfoInput';
import Input from './Input';
import TextArea from '../TextArea';
import ButtonRefactor from '../ButtonRefactor';
export default function ContactUsForm({ lang }: { lang: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactUSFormData>({
    mode: 'onBlur',
    defaultValues: ContactFormData
  });

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleChangeSuccess,
    handleChangeReject
  } = useSubmit();

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
    submitContactForm(sendFormData, csrfToken)
      .then((response) => {
        console.log(response);

        handleChangeSuccess();
        reset(ContactFormData); // Reset the form after successful submission
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleChangeReject();
        reset(ContactFormData);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  // const errorsList = Object.entries(errors).map(([name, value]) => ({
  //   name: name,
  //   value: value
  // }));

  return (
    <div dir={lang === 'en' ? 'ltr' : 'rtl'}>
      <h2 className="text-center font-gilda text-5xl font-light">
        {lang === 'en' ? 'Reach us' : 'با ما تماس بگیرید'}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4 h-full grid-cols-2 gap-x-6 gap-y-5 md:grid">
          <PersonalInfoInput
            register={register}
            errors={errors}
            nameInputs={{
              firstName: 'name',
              lastName: '',
              email: 'email',
              phoneNumber: 'number'
            }}
            lang={lang}
          />

          <div className="col-span-1">
            <Input
              register={register}
              errors={errors}
              nameInput="subject"
              type="text"
              label={lang === 'en' ? 'Subject' : 'موضوع'}
              required={
                lang === 'en' ? 'Your Subject is required.' : 'موضوع الزامی است'
              }
              patternValue=""
              patternMessage={
                lang === 'en'
                  ? 'Enter a valid Subject.'
                  : 'یک موضوع معتبر وارد کنید'
              }
              placeholder={lang === 'en' ? 'Your Subject*' : 'موضوع'}
              className="input input-bordered col-span-1 mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
              containerClass=""
            />
          </div>

          <div className="col-span-2">
            <TextArea
              register={register}
              errors={errors}
              title={lang === 'en' ? 'Message' : 'پیام'}
              required={
                lang === 'en' ? 'Message is required' : 'پیام الزامی است'
              }
              nameTextArea="message"
              patternValue=""
              patternMessage=""
              placeholder={lang === 'en' ? 'Message' : 'پیام'}
              rows={4}
              cols={20}
            />
          </div>
        </div>
        {/* <Button
          type='submit'
          bgColor="Primary"
          disabled={errorsList[0] ? true : false}
          lang={lang}
        /> */}
        <ButtonRefactor text="Submit" type="submit" />
      </form>
      <NotificationSendForm />
    </div>
  );
}
