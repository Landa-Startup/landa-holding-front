import { errors } from 'formidable';
import * as React from 'react';
import Input from './base/Input';
import { InvestorRegistrationFormData } from 'app/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../atoms/TextArea';
import YesRadioButton from '../atoms/YesRadioButton';
import NoRadioButton from '../atoms/NoRadioButton';
import StartupFormProblem from './StartupFormProblems';
import StartupFormSolutions from './StartupFormSolutions';
import StartupFormBusinessModel from './StartupFormBusinessModel';

export default function StartupFormTrialProduct() {
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
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <YesRadioButton
          title="Do you have Pitch deck?"
          register={register}
          errors={errors}
          required="Please choose an option"
          name="pitch-deck"
        />
        <YesRadioButton
          title="Do you have Business Plan?"
          register={register}
          errors={errors}
          required="Please choose an option"
          name="business-plan"
        />
      </div>
        <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div>
            <NoRadioButton
              title="Do you have Pitch deck?*"
              register={register}
              errors={errors}
              required="Please choose an option"
              name="pitch-deck"
            />
            <Input
              register={register}
              errors={errors}
              nameInput="productName"
              type="text"
              label="Product Name"
              required="Product Name is Required."
              patternValue=""
              patternMessage="Only Alphabetic Characters are Allowed."
              placeholder="Enter your Product Name"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
            />
          </div>

          <div>
            <NoRadioButton
              title="Do you have Business Plan?*"
              register={register}
              errors={errors}
              required="Please choose an option"
              name="business-plan"
            />
            <Input
              register={register}
              errors={errors}
              nameInput="siteAddress"
              type="text"
              label="Site Address"
              required="Site Address is Required."
              patternValue=""
              patternMessage="Only Alphabetic Characters are Allowed."
              placeholder="Enter your Site Address"
              className="w-full mt-3 mb-1 input input-bordered drop-shadow-lg placeholder-[#b2b1b0] dark:placeholder-[#9CA3AF]"
              labelClass="text-[#6b6b6b] dark:text-current"
            />
          </div>
        </div>
          <StartupFormProblem/>
          <StartupFormSolutions/>
          <StartupFormBusinessModel/>
    </>
  );
}

{
  /* <TextArea
            title="Explain your idea in 5 lines?*"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="ideaExplanation"
            patternMessage=''
            patternValue=''
            required=''
          />*/
}
