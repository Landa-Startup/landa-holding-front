import { errors } from 'formidable';
import * as React from 'react';
import Input from './base/Input';
import { InvestorRegistrationFormData } from 'app/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../atoms/TextArea';

export default function StartupFormTargetMarket() {
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

  return (
    <>
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
        <div className='col-span-2'>
        <div>
          <p className="text-3xl mb-3">Target Market</p>
        </div>
        <div>
          <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
        </div>
        <TextArea
          title="Based on what characteristics do you decide who are your customers and who are not?"
          register={register}
          errors={errors}
          placeholder="Description"
          nameTextArea="customersCharacteristics"
          patternMessage=""
          patternValue=""
          required=""
        />
        </div>
        <div className="col-span-2">
          <TextArea
            title="Who are your current customers? How many customers have you had so far?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="salesCycleStructure"
            patternMessage=""
            patternValue=""
            required=""
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="How have you estimated the size of the market?*"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="salesCycleStructure"
            patternMessage=""
            patternValue=""
            required=""
          />
        </div>
        <div className="col-span-2">
          <TextArea
            title="How much is the total (TAM market accessible serviceable) (SAM market accessible) (SOM market addressable)?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="salesCycleStructure"
            patternMessage=""
            patternValue=""
            required=""
          />
        </div>

      </div>
    </>
  );
}
