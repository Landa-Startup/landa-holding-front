'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './base/Input';
import Select from './base/Select';
import { EntrepreneursFormData } from '../../app/types/global';
import EntrepreneursTitle from '../atoms/EntrepreneursTitle';

export default function EntrepreneursForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EntrepreneursFormData>();

  const onSubmit = async (data: EntrepreneursFormData) => {
    try {
      const response = await fetch('/api/entrepreneurs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Form data successfully submitted.');
      } else {
        console.error('Failed to submit form data.');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const test = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  return (
    <>
      <div className="container m-16 p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <EntrepreneursTitle/>
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

            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <Select
                register={register}
                errors={errors}
                nameInput="preferredAreas"
                label="Preferred Areas for Investment"
                placeholder="Select your Preferred Area"
                required="Preferred Areas is Required."
                options={test}
                className=" col-start-2 col-span-3 w-full mt-3 mb-1 select select-bordered drop-shadow-lg text-[#b2b1b0] dark:text-[#9CA3AF] "
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <Select
                register={register}
                errors={errors}
                nameInput="howDidYouKnowUs"
                label="How did You Get to Know Us?"
                placeholder="Select How did You Get to Know Us?"
                required="This field is Required."
                options={test}
                className="col-start-2 col-span-3 w-full mt-3 mb-1 select select-bordered drop-shadow-lg text-[#b2b1b0] dark:text-[#9CA3AF] "
                labelClass="text-[#6b6b6b] dark:text-current"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-3 btn btn-wide bg-[#AA8453] hover:bg-[#94744a] dark:hover:bg-[#21282f] dark:bg-[#2b333d] text-white dark:text-current"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
