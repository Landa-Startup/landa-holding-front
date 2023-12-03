import React, { useState } from 'react';
import Input from '../common/form/Input';
import TextArea from '../common/TextArea';
import YesRadioButton from '../common/YesRadioButton';
import NoRadioButton from '../common/NoRadioButton';
import StartupFormProblem from './StartupFormProblems';
import StartupFormSolutions from './StartupFormSolutions';
import StartupFormBusinessModel from './StartupFormBusinessModel';
import { handleRadioChange } from '../../utils/functions';

export default function StartupFormMVP({
  register,
  errors,
  handlePitchFileChange,
  handleBusinessFileChange,
  handleFinancialFileChange
}: {
  register: any;
  errors: any;
  handlePitchFileChange: any;
  handleBusinessFileChange: any;
  handleFinancialFileChange: any;
}) {
  const [selectedRadioPitch, setSelectedRadioPitch] = useState('');

  const [selectedRadioBusiness, setSelectedRadioBusiness] = useState('');

  return (
    <>
      <div className="mb-12 mt-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <YesRadioButton
          title="Do you have Pitch deck?"
          register={register}
          errors={errors}
          required="Please choose an option"
          name="pitch-deck"
          handleRadioChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioPitch)}}
          selectedRadio={selectedRadioPitch}
          fileName="pitchDeckFile"
          handleFileChange={handlePitchFileChange}
        />
        <YesRadioButton
          title="Do you have Business Plan?"
          register={register}
          errors={errors}
          required="Please choose an option"
          name="business-plan"
          handleRadioChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioBusiness)}}
          selectedRadio={selectedRadioBusiness}
          fileName="businessPlanFile"
          handleFileChange={handleBusinessFileChange}
        />
      </div>
      {(() => {
        if (
          Boolean(selectedRadioBusiness) === false &&
          Boolean(selectedRadioPitch) === false
        ) {
          return (
            <div>
              <div className="my-6 mb-12 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
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
                    className="input input-bordered mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
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
                    className="input input-bordered mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                    labelClass="text-[#6b6b6b] dark:text-current"
                  />
                </div>
              </div>
              <StartupFormProblem register={register} errors={errors} />
              <StartupFormSolutions register={register} errors={errors} />
              <StartupFormBusinessModel
                register={register}
                errors={errors}
                handleFinancialFileChange={handleFinancialFileChange}
              />
            </div>
          );
        } else {
          return (
            <div>
              <div className="col-span-2 col-start-1">
                <TextArea
                  title="Have you previously cooperated with investors or accelerators?"
                  register={register}
                  errors={errors}
                  placeholder="Description"
                  nameTextArea="cooperatedWithInvestors"
                  patternMessage=""
                  patternValue=""
                  required=""
                />
              </div>
              <div className="col-span-2">
                <TextArea
                  title="How did you hear about us?"
                  register={register}
                  errors={errors}
                  placeholder="Description"
                  nameTextArea="getToKnowUs"
                  patternMessage=""
                  patternValue=""
                  required=""
                />
              </div>
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
