'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { StartupsFormData } from '../../types/global';
import { initialStartupsFormData } from '../../initials/initObjects'
import StartupFormPersonalInformation from './StartupFormPersonalInformation';
import StartupFormIdea from './StartupFormIdea';
import StartupFormMVP from './StartupFormMVP';
import StartupFormFirstSale from './StartupFormFirstSale';
import StartupFormSaleDevelopment from './StartupFormSaleDevelopment';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '../../utils/get-csrf-token';
import Select from '../../components/common/form/Select';
import Button from '../common/Button';
import { submitStartupsForm } from '../../pages/api/startups-form';
import { useSubmit } from '../../providers/StateProvider';
import { useTranslation } from 'app/i18n/client';

//TODO: add this enum in a file and import it to index.ts api file , global.d file

export default function StartupFormForm(
  { lang }: { lang: string }
) {
  const { t } = useTranslation(lang, 'formComponent');

  enum Type {
    IDEA = 'IDEA',
    MVP = 'MVP',
    TRIAL = 'TRIAL',
    FisrtSale = 'FisrtSale', // Typo: Should be "FirstSale"
    SaleDevelopment = 'SaleDevelopment',
  }

  const Types = [
    Type.IDEA,
    Type.MVP,
    Type.TRIAL,
    Type.FisrtSale,
    Type.SaleDevelopment
  ]

  const typesData = Types.map((type: string) => ({
    value: type,
    label: type,
  }))

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<StartupsFormData>({
    mode: 'onBlur',
    defaultValues: initialStartupsFormData,
  });

  const [selectedRadio, setSelectedRadio] = useState('');

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleChangeSuccess,
    handleChangeReject,
    filePost,
    filePost2,
    filePost3,
    handleBusinessFileChange,
    handleFinancialFileChange,
    handlePitchFileChange
  } = useSubmit();

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRadio(event.target.value);
  };

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
    handleSubmitingChange(true);
    handleSendChange(true);

    console.log(formData);

    // Create a FormData object for form data.
    const sendFormData = new FormData();

    // Handle conditional file attachments.
    const filePostMap = {
      businessPlanFile: filePost.businessPlanFile,
      pitchDeckFile: filePost2.pitchDeckFile,
      financialFile: filePost3.financialFile,
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
      sendFormData.append('businessPlanFile', formData.businessPlanFile as Blob);
    }

    if (formData.financialModelFile) {
      sendFormData.append('financialModelFile', formData.financialModelFile as Blob);
    }

    // Send the form data to the API.
    submitStartupsForm(sendFormData, csrfToken).then((response) => {
      handleChangeSuccess();
      reset(initialStartupsFormData); // Country does not reset
      setSelectedRadio("");

      console.log(response);

      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    }).catch(() => {
      handleChangeReject();
      reset(initialStartupsFormData);
      setTimeout(() => {
        handleNotifChange(false);
      }, 10000); // 10 seconds in milliseconds
    })
  };

  const errorsList = Object.entries(errors).map(([name, value]) => ({
    name: name,
    value: value
  }))

  return (
    <div className="container m-10 mx-auto px-5 pt-20 text-center font-barlow lg:p-2">
      <div className="container m-10 mx-auto px-5 pt-20 text-center lg:p-2">
        <p className="pb-3 pt-0 font-condensed text-3xl tracking-wide text-black sm:mt-0 md:pt-0 md:text-5xl  lg:pt-10 lg:text-6xl xl:text-7xl ">{t('startUp',{ returnObjects: true }).formTitle}</p>
      </div>
      <div className="container m-10 mx-auto bg-[#faf8f5] px-5 dark:bg-transparent lg:p-20">
        {/* {t('startUp',{ returnObjects: true }).formTitle} */}
        <div>
          <p className="mb-4 text-4xl">{t('startUp',{ returnObjects: true }).formSubtitle}</p>
        </div>

        <div>
          <hr className="mb-5 border-[#000000] dark:border-[#ffffff]" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StartupFormPersonalInformation
            register={register}
            errors={errors}
            lang={lang}
          />

          <div className="col-span-2">
            <div className="col-span-2">
              <div className="bg-[#222222CC]">
                <p className="mb-3 w-[310px] border-b py-5 pl-10 text-xl text-white md:w-[550px] md:text-3xl lg:w-[450px] lg:text-3xl xl:w-[650px]">
                {t('startUp',{ returnObjects: true }).subTitle}
                </p>
                <hr className=" mb-5 mt-0 dark:border-[#222222CC] " />
              </div>
            </div>
          </div>
          <Select
            register={register}
            errors={errors}
            nameInput='statusSelect'
            label={t('startUp',{ returnObjects: true }).statusSelect}
            required={t('startUp',{ returnObjects: true }).statusSelectRequired}
            className='select select-bordered mt-4 w-full max-w-xs'
            labelClass='text-[#6b6b6b] dark:text-current'
            placeholder={t('startUp',{ returnObjects: true }).statusSelectPlaceholder}
            options={typesData}
            handleChange={handleItemChange}
            selected={selectedRadio}
          />
          <br />

          {((): any => {
            switch (selectedRadio) {
              case 'IDEA':
                return <StartupFormIdea register={register} errors={errors} lang={lang} />;
                break;
              case 'MVP':
                return (
                  <StartupFormMVP
                    register={register}
                    errors={errors}
                    handlePitchFileChange={handlePitchFileChange}
                    handleBusinessFileChange={handleBusinessFileChange}
                    handleFinancialFileChange={handleFinancialFileChange}
                    lang={lang}
                  />
                );
                break;
              case 'FisrtSale':
                return (
                  <StartupFormFirstSale
                    register={register}
                    errors={errors}
                    handlePitchFileChange={handlePitchFileChange}
                    handleBusinessFileChange={handleBusinessFileChange}
                    handleFinancialFileChange={handleFinancialFileChange}
                    lang={lang}
                  />
                );
                break;
              case 'SaleDevelopment':
                return (
                  <StartupFormSaleDevelopment
                    register={register}
                    errors={errors}
                    handlePitchFileChange={handlePitchFileChange}
                    handleBusinessFileChange={handleBusinessFileChange}
                    handleFinancialFileChange={handleFinancialFileChange}
                    lang={lang}
                  />
                );
                break;
              default:
                console.error("error");
            }
          })()}

          <div className="ml-1 mt-10 text-start">
            <Button
              type='submit'
              bgColor="Primary"
              disabled={errorsList[0] ? true : false}
              lang={lang}
            />
          </div>
          <NotificationSendForm lang={lang}/>
        </form>
      </div>
    </div>
  );
}
