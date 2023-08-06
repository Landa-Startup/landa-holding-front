'use client';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import NotificationSendForm from './base/NotificationSendForm';
import Input from './base/Input';

interface FormData {
  fullName: string;
  email: string;
  streetAddress: string;
  companyName: string;
  phoneNumber: string;
  countryOfEsidence: string;
  streetAddressLine2: string;
  investmentCeiling: string;
  birthTime: Date;
  provinceOfResidence: string;
  zipCode: number;
  yourPositionInTeam: string;
  preferredInvestment: string;
  wayKnowUs: string;
}

export default function BusinessPartnerShiphtmlform() {
  const initialFormData: FormData = {
    fullName: '',
    email: '',
    streetAddress: '',
    companyName: '',
    phoneNumber: '',
    countryOfEsidence: '',
    streetAddressLine2: '',
    investmentCeiling: '',
    birthTime: new Date(),
    provinceOfResidence: '',
    zipCode: 0,
    yourPositionInTeam: '',
    preferredInvestment: '',
    wayKnowUs: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: initialFormData,
  });
  // TODO: Serach about handle forms with useForm

  const [send, setSend] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  
  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSend(true);
    try {
      const response = await fetch('/api/business-partner-ship', {
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
      setSend(false);
      reset(initialFormData); // Reset the form after successful submission
      console.log('Form data sent successfully!');
    } catch (error) {
      setSend(false);
      setIsSuccess(false);
      console.error('Error sending form data:', error);
    }
  };
  // TODO: fix regex of validations
  return (
    <div className="mx-auto w-7/12 bg-white">
      <h2 className="text-slate-950 text-center text-6xl mb-3 mt-16">
        PARTNER Membership FORM
      </h2>
      <h3 className="text-slate-950 text-center text-1xl mb-16 pr-16">
        Drop us a line through the form below and we will get back to you
      </h3>
      <h4 className="text-slate-950 text-left text-2xl ">
        Personal Informations
      </h4>
      <hr className="h-0.5 mt-2 mb-6 bg-gray-100 border-0 dark:bg-gray-700"></hr>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="grid grid-cols-3 mb-10 justify-center items-center">
          <div className="grid justify-center items-center">
            <label htmlFor="" className="block mb-1 text-slate-950">
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              {...register('fullName', {
                required: 'Please Enter Full',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid Name.',
                },
              })}
              placeholder="Your Name*"
              className={`bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.fullName ? 'border-red-500' : ''
              }`}
            />
            {errors.fullName && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.fullName.message}
              </p>
            )}

            <br />
            
            
            <Input register={register} errors={errors} nameInput='email' type='email' label='Email' required='Your Email is Invalid' patternValue='^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$' patternMessage='Please Enter Correct Email!' placeholder='Your Email Address' className='bg-amber-100 px-2 py-1 rounded-md shadow-md' labelClass='block mb-1 text-slate-950'/>
            <Input register={register} errors={errors} nameInput='streetAddress' type='text' label='Street Address' required='Your Street Address is required.' patternValue='' patternMessage='' placeholder='Your Street Address*' className='bg-amber-100 px-2 py-1 rounded-md shadow-md' labelClass='block mb-1 text-slate-950'/>
            <Input register={register} errors={errors} nameInput='streetAddress' type='text' label='Street Address' required='Your Street Address is required.' patternValue='' patternMessage='' placeholder='Your Street Address*' className='bg-amber-100 px-2 py-1 rounded-md shadow-md' labelClass='block mb-1 text-slate-950'/>
            

            <label htmlFor="" className="block mb-1 text-slate-950">
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              {...register('companyName', {
                required: 'Your Company Name is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid Company Name.',
                },
              })}
              placeholder="Your Company Name*"
              className={`bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.companyName ? 'border-red-500' : ''
              }`}
            />
            {errors.companyName && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.companyName.message}
              </p>
            )}
          </div>

          <div className="grid justify-center items-center">
            <label htmlFor="" className="block mb-1 text-slate-950">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              {...register('phoneNumber', {
                required: 'Your Phone Number is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid Phone Number.',
                },
              })}
              placeholder="Your Phone Number*"
              className={`bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.phoneNumber ? 'border-red-500' : ''
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.phoneNumber.message}
              </p>
            )}
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Country Of esidence
            </label>
            <input
              id="countryOfEsidence"
              type="text"
              {...register('countryOfEsidence', {
                required: 'Your Phone Number is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid Country Of Esidence.',
                },
              })}
              placeholder="Your Country Of Esidence*"
              className={`bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.countryOfEsidence ? 'border-red-500' : ''
              }`}
            />
            {errors.countryOfEsidence && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.countryOfEsidence.message}
              </p>
            )}
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Street Address Line 2
            </label>
            <input
              id="streetAddressLine2"
              type="text"
              {...register('streetAddressLine2', {
                required: 'Your Street Address Line2 is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid Street Address Line2.',
                },
              })}
              placeholder="Your Country Of Esidence*"
              className={`bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.streetAddressLine2 ? 'border-red-500' : ''
              }`}
            />
            {errors.streetAddressLine2 && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.streetAddressLine2.message}
              </p>
            )}
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Investment Ceiling
            </label>
            <input
              id="investmentCeiling"
              type="text"
              {...register('investmentCeiling', {
                required: 'Your Investment Ceiling is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid Investment Ceiling.',
                },
              })}
              placeholder="Your Investment Ceiling*"
              className={`bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.investmentCeiling ? 'border-red-500' : ''
              }`}
            />
            {errors.investmentCeiling && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.investmentCeiling.message}
              </p>
            )}
          </div>

          <div className="grid justify-center items-center">
            <label htmlFor="" className="block mb-1 text-slate-950">
              Birth Time
            </label>
            <input
              id="birthTime"
              type="text"
              {...register('birthTime', {
                required: 'Your Birth Time is required.',
              })}
              placeholder="Your Birth Time*"
              className={`bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.birthTime ? 'border-red-500' : ''
              }`}
            />
            {errors.birthTime && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.birthTime.message}
              </p>
            )}
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Province Of Residence
            </label>
            <input
              id="provinceOfResidence"
              type="text"
              {...register('provinceOfResidence', {
                required: 'Your province Of Residence is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid province Of Residence.',
                },
              })}
              placeholder="Your province Of Residence*"
              className={`bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.provinceOfResidence ? 'border-red-500' : ''
              }`}
            />
            {errors.provinceOfResidence && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.provinceOfResidence.message}
              </p>
            )}
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Postal/Zip Code
            </label>
            <input
              id="zipCode"
              type="number"
              {...register('zipCode', {
                required: 'Your zip Code is required.',
                pattern: {
                  value: /^[0-9]+$/i,
                  message: 'Enter a valid zip Code.',
                },
              })}
              placeholder="Your zip Code*"
              className={`bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.zipCode ? 'border-red-500' : ''
              }`}
            />
            {errors.zipCode && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.zipCode.message}
              </p>
            )}
            <br />
            <label htmlFor="" className="block mb-1 text-slate-950">
              Your Position In Team
            </label>
            <input
              id="yourPositionInTeam"
              type="text"
              {...register('yourPositionInTeam', {
                required: 'Your zip Code is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid your Position In Team',
                },
              })}
              placeholder="Your Position In Team*"
              className={`bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.yourPositionInTeam ? 'border-red-500' : ''
              }`}
            />
            {errors.yourPositionInTeam && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.yourPositionInTeam.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="" className="block text-slate-950 mb-2">
              Preferred areas for investment*
            </label>
            <input
              id="preferredInvestment"
              type="text"
              {...register('preferredInvestment', {
                required: 'Your preferred Investment is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid preferred Investment',
                },
              })}
              placeholder="Preferred Investment*"
              className={`w-full bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.preferredInvestment ? 'border-red-500' : ''
              }`}
            />
            {errors.preferredInvestment && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.preferredInvestment.message}
              </p>
            )}
          </div>
          <div className="mb-16">
            <label htmlFor="" className="block text-slate-950 mb-2">
              How did you get to know us? *
            </label>
            <input
              id="way Know Us"
              type="text"
              {...register('wayKnowUs', {
                required: 'Your way Know Us is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid way Know Us',
                },
              })}
              placeholder="way KnowUs*"
              className={`w-full bg-amber-100 px-2 py-1 rounded-md shadow-md ${
                errors.wayKnowUs ? 'border-red-500' : ''
              }`}
            />
            {errors.wayKnowUs && (
              <p className="text-sm text-yellow-500 mb-4 mt-0.5">
                {errors.wayKnowUs.message}
              </p>
            )}
          </div>
          <div className="mx-auto">
            <button
              type="submit"
              className="bg-amber-800 text-white px-12 py-2 rounded-lg mb-24"
              disabled={send}

            >
            {send ? "Sending ..." : "Send"}
            </button>
          </div>
        </div>
      </form>
      <NotificationSendForm submitting={isSubmitting} success={isSuccess} />
    </div>
  );
}
