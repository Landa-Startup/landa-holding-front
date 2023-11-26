import React, { useState } from 'react';
import Input from '../common/form/Input';
import YesRadioButton from '../common/YesRadioButton';
import StartupFormProblem from './StartupFormProblems';
import StartupFormSolutions from './StartupFormSolutions';
import StartupFormBusinessModel from './StartupFormBusinessModel';
import StartupFormTargetMarket from './StartupFormTargetMarket';
import StartupFormProperty from './StartupFormProperty';
import { handleRadioChange } from '@/utils/functions';

export default function StartupFormFirstSale({
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

  const [selectedRadioFinancial, setSelectedRadioFinancial] = useState('');

  return (
    <>
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <YesRadioButton
          title="Do you have Pitch deck?"
          register={register}
          errors={errors}
          required="Please choose an option"
          name="pitch-deck"
          handleRadioChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioPitch)}}
          selectedRadio={selectedRadioPitch}
          fileName='pitchDeckFile'
          handleFileChange={handlePitchFileChange}
        />
        <YesRadioButton
          title="Do you have Business Plan?"
          register={register}
          errors={errors}
          required="Please choose an option"
          name="business-plan"
          handleRadioChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioBusiness)}}
          selectedRadio={selectedRadioBusiness}
          fileName='businessPlanFile'
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
              <StartupFormProblem register={register} errors={errors}/>
              <StartupFormSolutions register={register} errors={errors}/>
              <StartupFormBusinessModel register={register} errors={errors} handleFinancialFileChange={handleFinancialFileChange}/>
            </div>
          );
        } else {
          return <div></div>;
        }
      })()}
      <div className="grid grid-cols-1 my-6 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <YesRadioButton
            title="Do you have Financial file?"
            register={register}
            errors={errors}
            required="Please choose an option"
            name="financial-plan"
            handleRadioChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioFinancial)}}
            selectedRadio={selectedRadioFinancial}
            fileName="financialFile"
            handleFileChange={handleFinancialFileChange}
          />
        </div>
      </div>
      {(() => {
        if (Boolean(selectedRadioFinancial) === false) {
          return (
            <div>
              <StartupFormTargetMarket register={register} errors={errors}/>
              <StartupFormProperty register={register} errors={errors}/>
            </div>
          );
        }else{
          return <div></div>;
        }
      })()}
    </>
  );
}
