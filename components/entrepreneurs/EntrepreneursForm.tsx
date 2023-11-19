'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import { Entrepreuneur } from '../../app/types/global';
import EntrepreneursTitle from './EntrepreneursTitle';
import NotificationSendForm from '../common/form/NotificationSendForm';
import apiClient from '@/utils/api';
import GetCsrfToken from '@/utils/get-csrf-token';
import { initialFormData } from 'app/initials/initObjects';
import Button from '../common/Button';
import { submitEntrepreneurForm } from 'pages/api/entrepreneurs';
import { error } from 'console';
import { useSubmit } from 'providers/StateProvider';

export default function EntrepreneursForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Entrepreuneur>({
    mode: 'onBlur',
    defaultValues: initialFormData,
  });

  const {
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
  } = useSubmit();

  const [formData, setFormData] = useState<Entrepreuneur>(
    initialFormData
  );

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken("https://panel.landaholding.com/get-csrf-token");
      handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: Entrepreuneur) => {
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
    const res = submitEntrepreneurForm(formData, csrfToken).then((response) => {
      console.log(response);

      console.log(isSubmitting);

      handleChangeSuccess();
      reset(initialFormData); // country does not reset
      setFormData(initialFormData);
      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    }).catch((error) => {
      handleChangeReject();
      reset(initialFormData);
      setFormData(initialFormData);
  
      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    })
  };

  return (
    <>
      <div className="container m-16 p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <EntrepreneursTitle />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="companyName"
                type="text"
                label="Company Name"
                required="Company Name is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your Company Name"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="email"
                type="email"
                label="Email Address"
                required="Email Address is Required."
                patternValue="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                patternMessage="Enter a Valid Email Address"
                placeholder="Enter your Email Address"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="website"
                type="text"
                label="Website"
                required="Website is Required."
                placeholder="Enter your Website"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="phone"
                type="text"
                label="Phone"
                required="Phone Number is Required."
                placeholder="Enter your Phone Number"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
              />
            </div>
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="fieldOfProfessional"
                type="text"
                label="Field Of Professional"
                required=" Field Of Professional is Required."
                placeholder="Enter your Field Of Professional"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
              />
            </div>
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
    </>
  );
}
