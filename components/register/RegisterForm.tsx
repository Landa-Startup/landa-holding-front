'use client'
import React, { useState, useEffect } from 'react'
import Input from '../common/form/Input'
import { useForm } from 'react-hook-form';
import GetCsrfToken from '@/utils/get-csrf-token';
import apiClient from '@/utils/api';
import { FormData } from 'app/types/global';
import { RegisterationFormData } from 'app/initials/initObjects';
import Button from '../common/Button';

export default function RegisterForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: RegisterationFormData,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [csrfToken, setCsrfToken] = useState('');

  const [formData, setFormData] = useState<FormData>(RegisterationFormData);

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSend(true);
    try {
      const response = await apiClient.post(
        'accounts/register',
        JSON.stringify(data),
        {
          headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json',
          },
        }
      );
      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(RegisterationFormData);
      setFormData(RegisterationFormData);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
    } catch (error) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      console.error('Error sending form data:', error);
      reset(RegisterationFormData);
      setFormData(RegisterationFormData);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }
  };
  return (
    <div className="container m-16 p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            register={register}
            errors={errors}
            nameInput="email"
            type="text"
            label="Email"
            required="First Name is Required."
            patternValue=""
            patternMessage=""
            placeholder="Enter your Email"
            className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
          <Input
            register={register}
            errors={errors}
            nameInput="password"
            type="text"
            label="Password"
            required="First Name is Required."
            patternValue=""
            patternMessage=""
            placeholder="Enter your Password"
            className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
            labelClass="text-[#6b6b6b] dark:text-current"
          />
        </div>
        <div className="">
            <Button
              text='Register'
              type='submit'
              size=''
              addedClass='ml-auto btn btn-accent'
              bgColor="Primary"
              goto=''
            />
        </div>
      </form>
    </div>
  );
}
