'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/form/Input';
import { Entrepreuneur } from '../../types/global';
import NotificationSendForm from '../common/form/NotificationSendForm';
import GetCsrfToken from '../../utils/get-csrf-token';
import { initialFormData } from '../../initials/initObjects';
import { submitEntrepreneurForm } from '../../pages/api/entrepreneurs';
import { PersonalInfoInput } from '../common/form/PersonalInfoInput';
import Button from '../common/Button';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import { useSubmit } from 'stores/dataStore';

export default function EntrepreneursForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Entrepreuneur>({
    mode: 'onBlur',
    defaultValues: initialFormData
  });

  const {
    csrfToken,
    handleTokenChange,
    handleSubmitingChange,
    handleSendChange,
    handleNotifChange,
    handleSuccessChange
  } = useSubmit((s) => s);

  const lang = useLang((s) => s.lang);

  const { t } = useTranslation(lang, 'formComponent');

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        // TODO: avoid hardcoding the URL.
        'https://landa-back.landaholding.com/get-csrf-token'
      );
      handleTokenChange(token);
      
    }

    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: Entrepreuneur) => {
    // Set loading and sending states.
    handleSubmitingChange(true);
    handleSendChange(true);

    // Create a FormData object for form data.
    const sendFormData = new FormData();

    // Append all non-file form fields.
    Object.entries(formData).forEach(([fieldName, fieldValue]) => {
      if (typeof fieldValue !== 'object' || fieldValue === null) {
        sendFormData.append(fieldName, String(fieldValue));
      }
    });

    // Send the form data to the API.
    submitEntrepreneurForm(sendFormData, csrfToken)
      .then(() => {
        handleSuccessChange(true);
        handleNotifChange(true);
        handleSendChange(false);
        reset(initialFormData); // country does not reset
        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      })
      .catch(() => {
        handleSuccessChange(true);
        handleNotifChange(false);
        handleSendChange(false);
        reset(initialFormData);

        setTimeout(() => {
          handleNotifChange(false);
        }, 10000); // 10 seconds in milliseconds
      });
  };

  // const errorsList = Object.entries(errors).map(([name, value]) => ({
  //   name: name,
  //   value: value
  // }))

  return (
    <>
      <div className="container m-[-1rem] mx-auto my-20 gap-y-0 px-5 font-barlow lg:p-20">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className='w-full h-auto pt-8 bg-[#F8F5F0]'>
            <div className='w-full h-auto flex flex-col gap-12'>
              <div className='w-full h-auto flex flex-row justify-center'>
                <p className='text-black font-gilda font-medium text-[64px] leading-[75px]'>{t('EntrepreneurTitle')}</p>
              </div>
              <div className='w-full h-auto flex flex-row justify-start px-6'>
                <p className='text-black font-barlow font-medium text-[30px] leading-[42px]'>{t('PersonalInformation')}</p>
              </div>
            </div>
          </div>
          <div className="mb-6 grid w-full grid-cols-1 gap-x-6 gap-y-4 bg-[#faf8f5] p-2 md:grid-cols-2 lg:grid-cols-3">
            <PersonalInfoInput
              register={register}
              errors={errors}
              nameInputs={{
                firstName: 'first_name',
                lastName: 'last_name',
                email: 'email',
                phoneNumber: 'phone',
                jobPosition:''
              }}
            />

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="companyName"
                type="text"
                label={t('companyName')}
                required={t('companyNameRequired')}
                placeholder={t('companyNamePlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-3 bg-whiteGold w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="website"
                type="text"
                label={t('website')}
                required={t('websiteRequired')}
                placeholder={t('websitePlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-3 bg-whiteGold w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue=""
                patternMessage=""
              />
            </div>

            <div className="col-span-1">
              <Input
                register={register}
                errors={errors}
                nameInput="fieldOfProfessional"
                type="text"
                label={t('prosField')}
                required={t('prosFieldRequired')}
                placeholder={t('prosFieldPlaceholder')}
                className="input input-bordered col-span-1 mb-1 mt-3 bg-whiteGold w-full placeholder-[#b2b1b0] drop-shadow-lg dark:placeholder-[#9CA3AF]"
                labelClass="text-[#6b6b6b] dark:text-current"
                patternValue={''}
                patternMessage={''}
              />
            </div>
          </div>
          <div className="mx-auto w-full pb-4 md:w-auto">
            {/* <ButtonRefactor type="submit" text={t('sendButton')} disabled={errorsList[0] ? true : false}/> */}
            <Button type="submit" bgColor="Primary" />
          </div>
        </form>
        <NotificationSendForm />
      </div>
    </>
  );
}
