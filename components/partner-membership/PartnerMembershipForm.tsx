'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import PartnerMembershipTitle from './PartnerMembershipTitle';
import { PartnerMembershipFormData } from '../../app/types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import TextArea from '../common/TextArea';
import GetCsrfToken from '@/utils/get-csrf-token';
import { initialPartnerMembershipFormData } from '../../app/initials/initObjects'
import Button from '../common/Button';
import { submitPartnerMembershipForm } from 'pages/api/partner-membership';

import { useSubmit } from 'providers/StateProvider';
import CountryInput from '../common/form/CountryInput';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';

// import { PartnerMembership } from '@prisma/client';

export default function PartnerMembershipForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PartnerMembershipFormData>({
    mode: 'onBlur',
    defaultValues: initialPartnerMembershipFormData,
  });

  const {
    csrfToken, 
    handleTokenChange, 
    handleSubmitingChange,
    handleSuccessChange,
    handleSendChange,
    handleNotifChange,
    handleChangeSuccess,
    handleChangeReject
  } = useSubmit();

  useEffect(() => {
    async function fetchCsrfToken() {
      console.log("csrfToken", process.env.NEXT_PUBLIC_DJANGO_HOST_URL)
      const token = await GetCsrfToken(`${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`);
      handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: PartnerMembershipFormData) => {
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
    submitPartnerMembershipForm(sendFormData, csrfToken).then((response) => {
      handleChangeSuccess();
      reset(initialPartnerMembershipFormData); // Country does not reset

      console.log(response);

      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    }).catch((error) => {
      handleChangeReject();
      reset(initialPartnerMembershipFormData);
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
      <div className="container m-16 px-5 lg:p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <PartnerMembershipTitle />
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
                patternMessage="Please enter a valid Date of Birth (e.g., 2001/02/11)"
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
                nameInput="investmentCeiling"
                type="text"
                label="Field Of Professional"
                required="Investment Ceiling is Required."
                placeholder="Enter your Investment Ceiling"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
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
    </div>
  );
}
