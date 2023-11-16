'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactUSFormData } from '../../../app/types/global';

import GetCsrfToken from '@/utils/get-csrf-token';
import apiClient from '@/utils/api';
import NotificationSendForm from './NotificationSendForm';
import { ContactFormData } from 'app/initials/initObjects';

import Input from './Input';
import TextArea from '../TextArea';
import Button from '../Button';

import { submitContactForm } from 'pages/api/contact-us';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [csrfToken, setCsrfToken] = useState('');

  const [formData, setFormData] = useState<ContactUSFormData>(
    ContactFormData
  );

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: ContactUSFormData) => {
    // Set loading and sending states.
    setIsSubmitting(true);
    setSend(true);
  
    // Create a FormData object for form data.
    const sendFormData = new FormData();
  
    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      }
    });
  
    // Send the form data to the API.
    const res = submitContactForm(formData, csrfToken).then((response) => {
      console.log(response);

      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(ContactFormData); // Reset the form after successful submission
      setFormData(ContactFormData);
      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }).catch((error) => {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      reset(ContactFormData);
      setFormData(ContactFormData);
  
      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    })
  };

  return (
    <div>
      <h2 className="text-5xl font-light text-center font-gilda">
        Reach us
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 my-6 gap-y-5 gap-x-6 md:grid-cols-2">
          <Input
            register={register}
            errors={errors}
            nameInput='name'
            type='text'
            label=''
            required='Your Name is required.'
            patternValue="/^[a-z ,.'-]+$/i"
            patternMessage='Enter a valid Name.'
            placeholder='Your Name*'
            className={`w-full input input-bordered drop-shadow-lg bg-white ${errors.name ? 'border-red-500' : ''}`}
            labelClass=''
            containerClass='flex flex-col'
          />

          <Input
            register={register}
            errors={errors}
            nameInput='email'
            type='email'
            label=''
            required='Your Email is required.'
            patternValue="/^[a-z ,.'-]+$/i"
            patternMessage='Enter a valid email address.'
            placeholder='Your Email*'
            className={`w-full input input-bordered drop-shadow-lg bg-white ${errors.email ? 'border-red-500' : ''}`}
            labelClass=''
            containerClass='flex flex-col'
          />

          <Input
            register={register}
            errors={errors}
            nameInput='number'
            type='text'
            label=''
            required='Your Number is required.'
            patternValue="/^[a-z ,.'-]+$/i"
            patternMessage='Enter a valid number.'
            placeholder='Your Number*'
            className={`w-full input input-bordered drop-shadow-lg bg-white ${errors.number ? 'border-red-500' : ''}`}
            labelClass=''
            containerClass='flex flex-col'
          />

          <Input
            register={register}
            errors={errors}
            nameInput='subject'
            type='text'
            label=''
            required='Your Subject is required.'
            patternValue="/^[a-z ,.'-]+$/i"
            patternMessage='Enter a valid Subject.'
            placeholder='Your Subject*'
            className={`w-full input input-bordered drop-shadow-lg bg-white ${errors.subject ? 'border-red-500' : ''}`}
            labelClass=''
            containerClass='flex flex-col'
          />

          <TextArea
            register={register}
            errors={errors}
            title=''
            required='Message is required.'
            nameTextArea='message'
            patternValue=''
            patternMessage=''
            placeholder='Message*'
            rows={4}
            cols={20}
          />
        </div>
        <div className="text-center">
          <Button
            text={send ? 'Submitting ....' : 'Submit'}
            size=''
            type='submit'
            addedClass='mt-3 btn btn-wide btn-neutral bg-primary border-none text-white'
            bgColor="Primary"
            goto=''
          />
        </div>
      </form>
      <NotificationSendForm
        submitting={isSubmitting}
        success={isSuccess}
        sendStatus={send}
        show={showNotification}
      />
    </div>
  );
}
