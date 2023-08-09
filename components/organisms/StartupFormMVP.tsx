import { errors } from 'formidable';
import * as React from 'react';
import Input from './base/Input';
import { InvestorRegistrationFormData } from 'app/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../atoms/TextArea';
import YesNoRadioButton from '../atoms/YesNoRadioButton';

export default function StartupFormMVP() {
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
        <YesNoRadioButton
          title="Do you have Pitch deck?*"
          register={register}
          errors={errors}
          required="Please choose an option"
          name="agree"
        />
                <YesNoRadioButton
          title="Do you have Business Plan?*"
          register={register}
          errors={errors}
          required="Please choose an option"
          name="agree"
        />
      </div>
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
