'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './base/Input';
import Select from './base/Select';
import InvestorRegistrationTitle from 'app/types/global';
import { InvestorRegistrationFormData } from '../../app/types/global';
import StartupFormTitle from '../atoms/StartupFormTitle';
import StartupFormPersonalInformation from './StartupFormPersonalInformation';
import StartupFormIdea from './StartupFormIdea';
import StartupFormMVP from './StartupFormMVP';
import StartupFormTrialProduct from './StartupFormTrialProduct';
import StartupFormFirstSale from './StartupFormFirstSale';
import StartupFormSaleDevelopment from './StartupFormSaleDevelopment';

export default function StartupFormForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvestorRegistrationFormData>();

  const onSubmit = async (data: InvestorRegistrationFormData) => {
    try {
      const response = await fetch('/api/investor-registration', {
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
      <div className="container m-10 p-20 mx-auto bg-[#faf8f5] dark:bg-transparent">
        <StartupFormTitle />
        <div>
          <p className="text-4xl mb-4">Personal information</p>
        </div>
        <div>
          <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StartupFormPersonalInformation />

          <div>
            <p className="text-4xl mb-4">Grows and Scale Up</p>
          </div>
          <div>
            <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
          </div>

          <div className="collapse collapse-arrow bg-[#f9f7f5] dark:bg-[#21282f] my-10">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium  bg-[#f8f5f0] dark:bg-[#2b333d]">
              Idea
            </div>
            <div className="collapse-content">
              <StartupFormIdea />
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#f9f7f5] dark:bg-[#21282f] my-10">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium  bg-[#f8f5f0] dark:bg-[#2b333d]">
              Minimal Valuable Product
            </div>
            <div className="collapse-content">
              <StartupFormMVP />
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#f9f7f5] dark:bg-[#21282f] my-10">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium  bg-[#f8f5f0] dark:bg-[#2b333d]">
              Trial Product
            </div>
            <div className="collapse-content">
              <StartupFormTrialProduct />
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#f9f7f5] dark:bg-[#21282f] my-10">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium  bg-[#f8f5f0] dark:bg-[#2b333d]">
              First Sale
            </div>
            <div className="collapse-content">
              <StartupFormFirstSale />
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#f9f7f5] dark:bg-[#21282f] my-10">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium  bg-[#f8f5f0] dark:bg-[#2b333d]">
              Sale Development
            </div>
            <div className="collapse-content">
              <StartupFormSaleDevelopment />
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

{
  /* <Input
              register={register}
              errors={errors}
              nameInput="streetAddress"
              type="text"
              label="Street Address"
              required="Street Address is Required."
              placeholder="Enter your Street Address"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
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
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
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
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
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
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
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
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
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
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
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
                className=" w-full mt-3 mb-1 select select-bordered drop-shadow-lg text-[#b2b1b0] dark:text-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              />
              <Select
                register={register}
                errors={errors}
                nameInput="howDidYouKnowUs"
                label="How did You Get to Know Us?"
                placeholder="Select How did You Get to Know Us?"
                required="This field is Required."
                options={test}
                className=" w-full mt-3 mb-1 select select-bordered drop-shadow-lg text-[#b2b1b0] dark:text-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
              /> */
}
