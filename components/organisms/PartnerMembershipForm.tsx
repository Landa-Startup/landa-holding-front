'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from './base/Input';
import Select from './base/Select';
import PartnerMembershipTitle from '../atoms/PartnerMembershipTitle';
import { partnerMembershipFormData } from '../../app/types/global';
import NotificationSendForm from './base/NotificationSendForm';
import TextArea from '../atoms/TextArea';
import { PartnerMembership } from '@prisma/client';

export default function PartnerMembershipForm() {
const initialPartnerMembershipFormData : partnerMembershipFormData ={
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    email: '',
    countryOfResidence: '',
    provinceOfResidence: '',
    companyName : '',
    investmentCeiling:'',
    preferredAreas:'',
    howDidYouKnowUs:'',
};


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<partnerMembershipFormData>({
    mode: 'onBlur',
    defaultValues: initialPartnerMembershipFormData ,
  });

  const [formData, setFormData] = useState<partnerMembershipFormData>(
    initialPartnerMembershipFormData
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const onSubmit = async (data: partnerMembershipFormData) => {
    setIsSubmitting(true);
    setSend(true);
    try {
      const response = await fetch('/api/partner-membership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset (initialPartnerMembershipFormData);
      setFormData(initialPartnerMembershipFormData);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); 
    } catch (error) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      console.error('Error sending form data:', error);
      reset (initialPartnerMembershipFormData);
      setFormData(initialPartnerMembershipFormData);
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds  
    }
  };


  return (
    <>
      <div className="container m-16 p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <PartnerMembershipTitle />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="firstName"
                type="text"
                label="First Name"
                required="First Name is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your First Name"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="lastName"
                type="text"
                label="Last Name"
                required="Last Name is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your Last Name"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="birthDate"
                type="date"
                label="Birth Date"
                required="Birth Date is Required."
                patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
                patternMessage="Please enter a valid Birth Date (e.g., 2001/02/11)"
                placeholder="Enter your Birth Date"
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
                nameInput="countryOfResidence"
                type="text"
                label="Country of Residence"
                required="Country of Residence is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your Country of Residence"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="provinceOfResidence"
                type="text"
                label="Province of Residence"
                required="Province of Residence is Required."
                patternValue=""
                patternMessage=""
                placeholder="Enter your Province of Residence"
                className="col-span-1 w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

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
                label="Investment Ceiling"
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
                title="How did you get to know us?*"
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
            <button
              type="submit"
              className="mt-3 btn btn-wide bg-[#AA8453] hover:bg-[#94744a] dark:hover:bg-[#21282f] dark:bg-[#2b333d] text-white dark:text-current"
              disabled={send}
            >
              {send ? 'Submiting ....' : 'Submit'}
            </button>
          </div>
        </form>
        <NotificationSendForm submitting={isSubmitting} success={isSuccess} sendStatus={send} show={showNotification}/>
      </div>
    </>
  );
}
