'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { contactUSFormData } from '../../app/types/global';
import NotificationSendForm from './base/NotificationSendForm';

export default function ContactUsForm() {
  const initialFormData: contactUSFormData = {
    name: '',
    email: '',
    number: '',
    subject: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<contactUSFormData>({
    mode: 'onBlur',
    defaultValues: initialFormData,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const onSubmit = async (formData: contactUSFormData) => {
    setIsSubmitting(true);
    setSend(true);
    try {
      const response = await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
      reset(initialFormData); // Reset the form after successful submission
      console.log('Form data sent successfully!');
    } catch (error) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      console.error('Error sending form data:', error);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds  
    }
  };

  return (
    <div>
      <h2 className="text-5xl font-light text-center">Get in touch</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 my-6 gap-y-5 gap-x-6 md:grid-cols-2">
          <div className="flex flex-col">
            <input
              id="name"
              type="text"
              {...register('name', {
                required: 'Your Name is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid Name.',
                },
              })}
              placeholder="Your Name*"
              className={`w-full input input-bordered drop-shadow-lg ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && (
              <span className="mt-2 text-sm text-yellow-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Your Email is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Enter a valid email address.',
                },
              })}
              placeholder="Your Email*"
              className={`w-full input input-bordered drop-shadow-lg ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <span className="mt-2 text-sm text-yellow-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              id="number"
              type="number"
              {...register('number', {
                required: 'Your Number is required.',
                pattern: {
                  value: /^\d{11}$/,
                  message: 'Enter a valid number.',
                },
              })}
              placeholder="Your Number*"
              className={`w-full input input-bordered drop-shadow-lg ${
                errors.number ? 'border-red-500' : ''
              }`}
            />
            {errors.number && (
              <span className="mt-2 text-sm text-yellow-500">
                {errors.number.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              id="subject"
              type="text"
              {...register('subject', {
                required: 'Your Subject is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid Subject.',
                },
              })}
              placeholder="Your Subject*"
              className={`w-full input input-bordered drop-shadow-lg ${
                errors.subject ? 'border-red-500' : ''
              }`}
            />
            {errors.subject && (
              <span className="mt-2 text-sm text-yellow-500">
                {errors.subject.message}
              </span>
            )}
          </div>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required.' })}
            rows={4}
            cols={20}
            className={`w-full col-span-1 textarea textarea-bordered md:col-span-2 drop-shadow-lg ${
              errors.message ? 'border-red-500' : ''
            }`}
            placeholder="Message*"
          ></textarea>
          {errors.message && (
            <span className="text-sm text-yellow-500 ">
              {errors.message.message}
            </span>
          )}
        </div>
        <div className="text-center">
          <button type="submit" className="mt-3 btn btn-wide btn-neutral" disabled={send}>
          {send ? 'Submitting ....' : 'Submit'}
          </button>
        </div>
      </form>
      <NotificationSendForm submitting={isSubmitting} success={isSuccess} sendStatus={send} show={showNotification}/>
    </div>
  );
}
