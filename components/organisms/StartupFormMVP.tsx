import React, { useState } from 'react';
import Input from './base/Input';
import { InvestorRegistrationFormData } from 'app/types/global';
import { useForm } from 'react-hook-form';
import TextArea from '../atoms/TextArea';
import YesRadioButton from '../atoms/YesRadioButton';
import NoRadioButton from '../atoms/NoRadioButton';
import StartupFormProblem from './StartupFormProblems';
import StartupFormSolutions from './StartupFormSolutions';
import StartupFormBusinessModel from './StartupFormBusinessModel';

export default function StartupFormMVP({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) {
  const [selectedRadioPitch, setSelectedRadioPitch] = useState('');

  const handleRadioPitchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedRadioPitch(event.target.value);
  };

  const [selectedRadioBusiness, setSelectedRadioBusiness] = useState('');

  const handleRadioBusinessChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedRadioBusiness(event.target.value);
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
          handleRadioChange={handleRadioPitchChange}
          selectedRadio={selectedRadioPitch}
        />
        <YesRadioButton
          title="Do you have Business Plan?"
          register={register}
          errors={errors}
          required="Please choose an option"
          name="business-plan"
          handleRadioChange={handleRadioBusinessChange}
          selectedRadio={selectedRadioBusiness}
        />
      </div>
      {(() => {
        if ((Boolean(selectedRadioBusiness) === false) && (Boolean(selectedRadioPitch)) === false) {
          return (
            <div>
              <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                <div>
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
              <StartupFormProblem />
              <StartupFormSolutions />
              <StartupFormBusinessModel />
            </div>
          );
        }
      })()}
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
