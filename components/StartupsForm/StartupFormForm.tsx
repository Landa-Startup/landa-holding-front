'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { StartupsFormData } from '../../types/global';
import { initialStartupsFormData } from '../../initials/initObjects';
import StartupFormPersonalInformation from './StartupFormPersonalInformation';
import StartupFormIdea from './StartupFormIdea';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '../../utils/get-csrf-token';
import { submitStartupsForm } from '../../pages/api/startups-form';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/dataStore';
import { useFile } from 'stores/fileStore';
import FormTitle from '../common/form/FormTitle';
import ButtonRefactor from '../common/ButtonRefactor';
import StartUpFormCheckbox from './StartUpFormCheckbox';
import StartUpTrialRefactore from './StartUpTrialRefactore';
import StartUpMvpRefactore from './StartUpMvpRefactore';


export default function StartupFormForm() {
  const lang = useLang((s) => s.lang)
  const { t } = useTranslation(lang, 'formComponent');

  // enum Type {
  //   IDEA = t("IDEA"),
  //   MVP = t('MVP'),
  //   TRIAL = t('TRIAL'),
  //   FisrtSale = t('FisrtSale'), // Typo: Should be "FirstSale"
  //   SaleDevelopment = t('SaleDevelopment')
  // }

  // const Types = [
  //   Type.IDEA,
  //   Type.MVP,
  //   Type.TRIAL,
  //   Type.FisrtSale,
  //   Type.SaleDevelopment
  // ];

  // const typesData = Types.map((type: any) => ({
  //   value: type,
  //   label: type
  // }));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<StartupsFormData>({
    mode: 'onBlur',
    defaultValues: initialStartupsFormData
  });


  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange,
    startupFormType, 
    setStartUpFormType,
    filesCounter,
    handleFileCounterChange,
    solutionsLevel,
    handleSolutionsLevelChange
  } = useSubmit((s) => s)

  const {
    filePostBussines,
    filePostPitch,
    filePostFinancial,
    handleBusinessFileChange,
    handleFinancialFileChange,
    handlePitchFileChange,
  } = useFile((s) => s)

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      handleTokenChange(token);
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: StartupsFormData) => {
    // Set loading and sending states.
    console.log(formData)
    handleSubmitingChange(true);
    handleSendChange(true);



    // Create a FormData object for form data.
    const sendFormData = new FormData();

    // Handle conditional file attachments.
    const filePostMap = {
      businessPlanFile: filePostBussines.businessPlanFile,
      pitchDeckFile: filePostPitch.pitchDeckFile,
      financialFile: filePostFinancial.financialFile
    };

    for (const [fieldName, file] of Object.entries(filePostMap)) {
      if (file) {
        sendFormData.append(fieldName, file, file.name);
      }
    }

    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      }
    });

    // Convert file objects to Blob and append them.
    if (formData.pitchDeckFile) {
      sendFormData.append('pitchDeckFile', formData.pitchDeckFile as Blob);
    }

    if (formData.businessPlanFile) {
      sendFormData.append(
        'businessPlanFile',
        formData.businessPlanFile as Blob
      );
    }

    if (formData.financialModelFile) {
      sendFormData.append(
        'financialModelFile',
        formData.financialModelFile as Blob
      );
    }

    // Send the form data to the API.
    submitStartupsForm(sendFormData, csrfToken)
      .then(() => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialStartupsFormData); // Country does not reset
        setStartUpFormType('');



        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialStartupsFormData);
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }));

  return (
    <div className="container m-[-1rem] mx-auto my-12 gap-y-0 font-barlow px-2 md:px-12 relative">
      <div className='mb-12'>
        <FormTitle formName='startUp'/>
      </div>
      <div className="container mx-auto bg-[#faf8f5] dark:bg-transparent">
        <form onSubmit={handleSubmit(onSubmit)}>
          <StartupFormPersonalInformation
            register={register}
            errors={errors}
          />
          <div className="col-span-2">
            <div className="col-span-2">
              <div className="bg-[#222222CC]">
                <p className="mb-3 w-[310px] border-b px-10 py-5 text-2xl text-white md:w-[550px] md:text-3xl lg:w-[450px] lg:text-3xl xl:w-[650px]">
                  {t('startUp', { returnObjects: true }).secondTitle}
                </p>
                <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
              </div>
            </div>
          </div>
          <div className='w-full h-auto px-4'>
            <div className='h-auto w-full flex flex-col gap-2'>
              <StartUpFormCheckbox name={t("IDEA")} />
              {((): any => {
                if (startupFormType == t("IDEA")) {
                  return <StartupFormIdea register={register} errors={errors} />
                }
              })()}
              <StartUpFormCheckbox name={t("TRIAL")} />
              {((): any => {
                if (startupFormType == t("TRIAL")) {
                  return (
                    <StartUpTrialRefactore
                      handleFileCounterChange={handleFileCounterChange}
                      handlePitchFileChange={handlePitchFileChange}
                      handleBusinessFileChange={handleBusinessFileChange}
                      handleFinancialFileChange={handleFinancialFileChange}
                      filesCounter={filesCounter}
                      register={register}
                      errors={errors} 
                      handleSolutionsLevelChange={handleSolutionsLevelChange} 
                      solutionsLevel={solutionsLevel}                    />
                  )
                }
              })()}
              <StartUpFormCheckbox name={t("MVP")} />
              {((): any => {
                if (startupFormType == t("MVP")) {
                  return (
                    <StartUpMvpRefactore
                      handleFileCounterChange={handleFileCounterChange}
                      handlePitchFileChange={handlePitchFileChange}
                      handleBusinessFileChange={handleBusinessFileChange}
                       filesCounter={filesCounter}
                      register={register}
                      errors={errors} 
                      handleSolutionsLevelChange={handleSolutionsLevelChange} 
                      solutionsLevel={solutionsLevel}                    />
                  )
                }
              })()}
              <StartUpFormCheckbox name={t("FisrtSale")} />
              <StartUpFormCheckbox name={t("SaleDevelopment")} />
            </div>
          </div>

          <div className="flex justify-center w-1/3 md:w-1/4 lg:w-1/6 mx-auto">
            <ButtonRefactor type="submit" text={t('sendButton')} disabled={errorsList[0] ? true : false}/>
          </div>
          <NotificationSendForm />
        </form>
      </div>
    </div>
  );
}
