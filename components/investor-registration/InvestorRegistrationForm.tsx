'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import InvestorRegistrationTitle from './InvestorRegistrationTitle';
import { InvestorRegistrationFormData } from '../../app/types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import TextArea from '../common/TextArea';
import GetCsrfToken from '@/utils/get-csrf-token';
import Input from '../common/form/Input';
import { initialInvestorRegistrationFormData } from '../../app/initials/initObjects'
import Button from '../common/Button';
import { submitInvestorRegistrationForm } from 'pages/api/investor-registration';

import { useSubmit } from 'providers/StateProvider';
import CountryInput from '../common/form/CountryInput';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';

export default function InvestorRegistrationForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InvestorRegistrationFormData>({
    mode: 'onBlur',
    defaultValues: initialInvestorRegistrationFormData,
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
      const token = await GetCsrfToken(`${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`);
      handleTokenChange(token);
    }
    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: InvestorRegistrationFormData) => {
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
    submitInvestorRegistrationForm(sendFormData, csrfToken).then((response) => {
      
      console.log(response);

      handleChangeSuccess();
      reset(initialInvestorRegistrationFormData); // Country does not reset
      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    }).catch((error) => {
      console.log(error);
      handleChangeReject();
      reset(initialInvestorRegistrationFormData);
  
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
    <>
      <div className="container m-16 px-5 lg:p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <InvestorRegistrationTitle />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">

            <PersonalInfoInput
              register={register}
              errors={errors}
              nameInputs={{
                firstName: "firstName",
                lastName: "lastName",
                email: "email",
                phoneNumber: ""
              }}
            />

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="birthDate"
                type="date"
                label="Date of Birth"
                required="Date of Birth is Required."
                patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
                patternMessage="Please enter a valid Date of Birth(e.g., 2001/02/11)"
                placeholder="Enter your Date of Birth"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <CountryInput
              register={register}
              errors={errors}
              nameInput='countryOfResidence'
            />

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="companyName"
                type="text"
                label="Company Name"
                required="Company Name is Required."
                placeholder="Enter your Company Name"
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
                nameInput="interests"
                type="text"
                label="Interests"
                required="Interests is Required."
                placeholder="Enter your Interests"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <TextArea
                title="Preferred Areas for Investment"
                register={register}
                errors={errors}
                placeholder="Description"
                nameTextArea="preferredAreas"
                patternMessage=""
                patternValue=""
                required="This field is required"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <TextArea
                title="How did you hear about us?*"
                register={register}
                errors={errors}
                placeholder="Description"
                nameTextArea="howDidYouKnowUs"
                patternMessage=""
                patternValue=""
                required="This field is required"
              />
            </div>
          </div>
          <div className="text-center">
            <Button
              type='submit'
              bgColor="Primary"
              disabled={errorsList[0] ? true : false}
            />
          </div>
        </form>
        <NotificationSendForm/>
      </div>
    </>
  );
}
