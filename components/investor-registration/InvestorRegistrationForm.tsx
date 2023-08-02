'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../base/Input';
import Select from '../base/Select';

export default function InvestorRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission data here
  };

  const test = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  return (
    <>
      <div className="container p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            <Input
              register={register}
              errors={errors}
              nameInput="firstName"
              type="text"
              label="First Name"
              required="First Name is Required."
              patternValue="^[A-Za-z]+$"
              patternMessage="Only Alphabetic Characters are Allowed."
              placeholder="Enter your First Name"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
              labelClass="my-5"
            />

            <Input
              register={register}
              errors={errors}
              nameInput="lastName"
              type="text"
              label="Last Name"
              required="Last Name is Required."
              patternValue="^[A-Za-z]+$"
              patternMessage="Only Alphabetic Characters are Allowed."
              placeholder="Enter your Last Name"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
              labelClass="your-label-styles"
            />

            <Input
              register={register}
              errors={errors}
              nameInput="birthDate"
              type="text"
              label="Birth Date"
              required="Birth Date is Required."
              patternValue="(?:\d{1,2}[-/\s]\d{1,2}[-/\s]'?\d{2,4})|(?:\d{2,4}[-/\s]\d{1,2}[-/\s]\d{1,2})|(?:(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)[\s-/,]*?\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*[-/,]?(?:\s)*'?\d{2,4})|(?:\d{1,2}(?:\s)*(?:rd|th|st)?(?:\s)*(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)(?:\s)*?[-/,]?(?:\s)*'?\d{2,4})"
              patternMessage="Please enter a valid Birth Date (e.g., 2001\02\11)"
              placeholder="Enter your Birth Date"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
              labelClass="your-label-styles"
            />

            <Input
              register={register}
              errors={errors}
              nameInput="countryOfResidence"
              type="text"
              label="Country of Residence"
              required="Country of Residence is Required."
              patternValue="^[A-Za-z]+$"
              patternMessage="Only Alphabetic Characters are Allowed."
              placeholder="Enter your Country of Residence"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
              labelClass="your-label-styles"
            />

            <Input
              register={register}
              errors={errors}
              nameInput="provinceOfResidence"
              type="text"
              label="Province of Residence"
              required="Province of Residence is Required."
              patternValue="^[A-Za-z]+$"
              patternMessage="Only Alphabetic Characters are Allowed."
              placeholder="Enter your Province of Residence"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
              labelClass="your-label-styles"
            />

            <Input
              register={register}
              errors={errors}
              nameInput="streetAddress"
              type="text"
              label="Street Address"
              required="Street Address is Required."
              placeholder="Enter your Street Address"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
              labelClass="your-label-styles"
              patternValue={''}
              patternMessage={''}
            />

            <Input
              register={register}
              errors={errors}
              nameInput="streetAddressLine2"
              type="text"
              label="Street Address Line 2"
              placeholder="Enter Additional Address Details"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
              labelClass="your-label-styles"
              required={''}
              patternValue={''}
              patternMessage={''}
            />

            <Input
              register={register}
              errors={errors}
              nameInput="postalCode"
              type="text"
              label="Postal/Zip Code"
              required="Postal/Zip Code is Required."
              placeholder="Enter your Postal or Zip Code"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
              labelClass="your-label-styles"
              patternValue={''}
              patternMessage={''}
            />

            <Input
              register={register}
              errors={errors}
              nameInput="companyName"
              type="text"
              label="Company Name"
              required="Company Name is Required."
              placeholder="Enter your Company Name"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
              labelClass="your-label-styles"
              patternValue="^[A-Za-z]+$"
              patternMessage="Only Alphabetic Characters are Allowed."
            />

            <Input
              register={register}
              errors={errors}
              nameInput="investmentCeiling"
              type="text"
              label="Investment Ceiling"
              required="Investment Ceiling is Required."
              placeholder="Enter your Investment Ceiling"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
              labelClass="your-label-styles"
              patternValue={''}
              patternMessage={''}
            />

            <Input
              register={register}
              errors={errors}
              nameInput="positionInTeam"
              type="text"
              label="Your Position in Team"
              required="Position in Team is Required."
              placeholder="Enter your Position in Team"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
              labelClass="your-label-styles"
              patternValue={''}
              patternMessage={''}
            />

            <Select
              register={register}
              errors={errors}
              nameInput="preferredAreas"
              label="Preferred Areas for Investment"
              placeholder="Select your Position in Team"
              required="Preferred Areas is Required."
              options={test}
              className="col-span-3 w-full mt-3 mb-1 select select-bordered drop-shadow-lg"
              labelClass="your-label-styles"
            />

            <Select
              register={register}
              errors={errors}
              nameInput="howDidYouKnowUs"
              label="How did You Get to Know Us?"
              placeholder="Select How did You Get to Know Us?"
              required="This field is Required."
              options={test}
              className="col-span-3 w-full mt-3 mb-1 select select-bordered drop-shadow-lg"
              labelClass="your-label-styles"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="mt-3 btn btn-wide btn-neutral">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
