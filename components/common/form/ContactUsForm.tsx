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
import Button from '../Button';
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
    submitContactForm(sendFormData, csrfToken).then((response) => {
      console.log(response);

      handleChangeSuccess();
      reset(ContactFormData); // Reset the form after successful submission
      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    }).catch((error) => {
      handleChangeReject();
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
    <div>
      <h2 className="text-5xl font-light text-center font-gilda">
        Reach us
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 my-4 h-full gap-y-5 gap-x-6 md:grid-cols-2">

          <PersonalInfoInput
            register={register}
            errors={errors}
            nameInputs={{
              firstName: "name",
              lastName: "",
              email: "email",
              phoneNumber: "number"
            }}
          />

          <div className='col-span-1'>
            <Input
              register={register}
              errors={errors}
              nameInput='subject'
              type='text'
              label='Subject'
              required='Your Subject is required.'
              patternValue=""
              patternMessage='Enter a valid Subject.'
              placeholder='Your Subject*'
              className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass='text-[#6b6b6b] dark:text-current'
              containerClass=''
            />
          </div>

          <div className='col-span-1'>
            <TextArea
              register={register}
              errors={errors}
              title='Message'
              required='Message is required.'
              nameTextArea='message'
              patternValue=''
              patternMessage=''
              placeholder='Message*'
              rows={4}
              cols={20}
            />
          </div>
        </div>
        <Button
            type='submit'
            bgColor="Primary"
            disabled={errorsList[0] ? true : false}
          />
      </form>
      <NotificationSendForm/>
    </div>
  );
}
