'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../base/Input';

function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission data here
  };

  return (
    <>
      <div className="container p-20 mx-auto bg-[#faf8f5]">
        <form
          className="grid my-6 gap-y-3 gap-x-6 md:grid-cols-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            register={register}
            errors={errors}
            nameInput="firstName"
            type="text"
            label="First Name"
            required="This field is required."
            patternValue="^[A-Za-z]+$"
            patternMessage="Only alphabetic characters are allowed."
            placeholder="Enter your first name"
            className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
            labelClass="my-5"
          />

          <Input
            register={register}
            errors={errors}
            nameInput="lastName"
            type="text"
            label="Last Name"
            required="This field is required."
            patternValue="^[A-Za-z]+$"
            patternMessage="Only alphabetic characters are allowed."
            placeholder="Enter your last name"
            className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
          />

          <Input
            register={register}
            errors={errors}
            nameInput="birthDate"
            type="text"
            label="Birth Date"
            required="This field is required."
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
            required="This field is required."
            patternValue="^[A-Za-z]+$"
            patternMessage="Only alphabetic characters are allowed."
            placeholder="Enter your country of residence"
            className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
          />

          <Input
            register={register}
            errors={errors}
            nameInput="provinceOfResidence"
            type="text"
            label="Province of Residence"
            required="This field is required."
            patternValue="^[A-Za-z]+$"
            patternMessage="Only alphabetic characters are allowed."
            placeholder="Enter your province of residence"
            className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
          />

          <Input
            register={register}
            errors={errors}
            nameInput="streetAddress"
            type="text"
            label="Street Address"
            required="This field is required."
            placeholder="Enter your street address"
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
            placeholder="Enter additional address details"
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
            required="This field is required."
            placeholder="Enter your postal or zip code"
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
            required="This field is required."
            placeholder="Enter your company name"
            className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            patternValue={''}
            patternMessage={''}
          />

          <Input
            register={register}
            errors={errors}
            nameInput="investmentCeiling"
            type="number"
            label="Investment Ceiling"
            required="This field is required."
            placeholder="Enter your investment ceiling"
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
            required="This field is required."
            placeholder="Enter your position in the team"
            className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            patternValue={''}
            patternMessage={''}
          />

          <Input
            register={register}
            errors={errors}
            nameInput="preferredAreas"
            type="text"
            label="Preferred Areas for Investment"
            required="This field is required."
            placeholder="Enter your preferred areas for investment"
            className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            patternValue={''}
            patternMessage={''}
          />

          <Input
            register={register}
            errors={errors}
            nameInput="howDidYouKnowUs"
            type="text"
            label="How Did You Get to Know Us?"
            required="This field is required."
            placeholder="Enter how you found out about us"
            className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg"
            labelClass="your-label-styles"
            patternValue={''}
            patternMessage={''}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default FormComponent;
