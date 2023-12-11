import React, { useState } from 'react';
import Input from '../common/form/Input';
import YesRadioButton from '../common/YesRadioButton';
import StartupFormProblem from './StartupFormProblems';
import StartupFormSolutions from './StartupFormSolutions';
import StartupFormBusinessModel from './StartupFormBusinessModel';
import StartupFormTargetMarket from './StartupFormTargetMarket';
import StartupFormProperty from './StartupFormProperty';
import { handleRadioChange } from '../../utils/functions';
import { useTranslation } from 'app/i18n/client';

export default function StartupFormFirstSale({
  register,
  errors,
  handlePitchFileChange,
  handleBusinessFileChange,
  handleFinancialFileChange,
  lang
}: {
  register: any;
  errors: any;
  handlePitchFileChange: any;
  handleBusinessFileChange: any;
  handleFinancialFileChange: any;
  lang:string;
}) {
  const { t } = useTranslation(lang, 'formComponent');

  const [selectedRadioPitch, setSelectedRadioPitch] = useState('');

  const [selectedRadioBusiness, setSelectedRadioBusiness] = useState('');

  const [selectedRadioFinancial, setSelectedRadioFinancial] = useState('');

  return (
    <>
      <div className="my-6 mb-12 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
      <YesRadioButton
          title={t('startUp',{ returnObjects: true }).pitchDeck}
          register={register}
          errors={errors}
          required={t('startUp',{ returnObjects: true }).pitchDeckRequired}
          name="pitch-deck"
          handleRadioChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioPitch)}}
          selectedRadio={selectedRadioPitch}
          fileName="pitchDeckFile"
          handleFileChange={handlePitchFileChange}
        />
        <YesRadioButton
          title={t('startUp',{ returnObjects: true }).businessPlan}
          register={register}
          errors={errors}
          required={t('startUp',{ returnObjects: true }).businessPlanRequired}
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
                    label={t('startUp',{ returnObjects: true }).productName}
                    required={t('startUp',{ returnObjects: true }).productNameRequired}
                    patternValue=""
                    patternMessage="Only Alphabetic Characters are Allowed."
                    placeholder={t('startUp',{ returnObjects: true }).productNamePlaceholder}
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
                    label={t('startUp',{ returnObjects: true }).siteAddress}
                    required={t('startUp',{ returnObjects: true }).siteAddressRequired}
                    patternValue=""
                    patternMessage="Only Alphabetic Characters are Allowed."
                    placeholder={t('startUp',{ returnObjects: true }).siteAddressPlaceholder}
                    className="input input-bordered mb-1 mt-3 w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                    labelClass="text-[#6b6b6b] dark:text-current"
                  />
                </div>
              </div>
              <StartupFormProblem register={register} errors={errors} lang={lang}/>
              <StartupFormSolutions register={register} errors={errors} lang={lang}/>
              <StartupFormBusinessModel register={register} errors={errors} handleFinancialFileChange={handleFinancialFileChange} lang={lang}/>
            </div>
          );
        } else {
          return <div></div>;
        }
      })()}
      <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
        <YesRadioButton
          title={t('startUp',{ returnObjects: true }).financialFile}
          register={register}
          errors={errors}
          required={t('startUp',{ returnObjects: true }).financialFileRequired}
          name="financial-plan"
          handleRadioChange={(e:React.ChangeEvent<HTMLInputElement>) => {handleRadioChange(e, setSelectedRadioFinancial)}}
          selectedRadio={selectedRadioFinancial}
          fileName='financialFile'
          handleFileChange={handleFinancialFileChange}
        />
        </div>
      </div>
      {(() => {
        if (Boolean(selectedRadioFinancial) === false) {
          return (
            <div>
              <StartupFormTargetMarket register={register} errors={errors} lang={lang}/>
              <StartupFormProperty register={register} errors={errors} lang={lang}/>
              {/* <StartupFormTargetMarket register={register} errors={errors} lang={lang}/>
              <StartupFormProperty register={register} errors={errors} lang={lang}/> */}
            </div>
          );
        }else{
          return <div></div>;
        }
      })()}
    </>
  );
}
