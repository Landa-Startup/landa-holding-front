import { errors } from 'formidable';
import * as React from 'react';
import Input from './base/Input';
import { InvestorRegistrationFormData } from 'app/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../atoms/TextArea';
import RadioButtonGroup from '../atoms/RadioButtonGroup';

export default function StartupFormSolutions() {
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

  const preparationStatsOption = [
    { value: 'The basic principle has been observed.', label: 'The basic principle has been observed.' },
    { value: 'The technology concept has been formulated.', label: 'The technology concept has been formulated.' },
    { value: 'Experimental proof of concept.', label: 'Experimental proof of concept.' },
    { value: 'The confirmed technology in laboratory.', label: 'The confirmed technology in laboratory.' },
    { value: 'The confirmed technology in the environmental conditions', label: 'The confirmed technology in the environmental conditions' },
    { value: 'The presented technology in the environmental conditions', label: 'The presented technology in the environmental conditions' },
    { value: 'Show the system prototype in the mvp operating environment.', label: 'Show the system prototype in the mvp operating environment.' },
    { value: 'The proved realistic system in the operating environment.', label: 'The proved realistic system in the operating environment.' },
    { value: 'A complete and qualified system.', label: 'A complete and qualified system.' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <div className="col-span-2">
          <div>
            <p className="text-3xl mb-3">Solutions</p>
          </div>
          <div>
            <hr className="border-[#000000] dark:border-[#ffffff] mb-5" />
          </div>
          <TextArea
            title="What is your unique value proposition (innovation)? What is new about what you do?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="ProblemExplanation"
            patternMessage=""
            patternValue=""
            required=""
          />
        </div>
        <div className="col-span-2">
          <RadioButtonGroup
            title="How much is level of your product and technology preparation?"
            options={preparationStatsOption}
            register={register}
            errors={errors}
            required="Preparation Stats Required"
            nameRadioButton="preparationStats"
          />
        </div>
        <div className="col-span-2 mt-2">
          <TextArea
            title="Briefly explain how your technology is scalable?"
            register={register}
            errors={errors}
            placeholder="Description"
            nameTextArea="techScale"
            patternMessage=""
            patternValue=""
            required=""
          />
        </div>
      </div>
    </>
  );
}
